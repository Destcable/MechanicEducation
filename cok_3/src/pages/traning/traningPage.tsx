import { CSSProperties, ReactNode, useEffect, useState } from "react";
import $ from "jquery";
import { useNavigate } from "react-router-dom";
import type { TraningData } from "../../types/Traning";
import Tringle from "../../components/ui/tringle/tringle";
import ArrowRight from "../../components/ui/arrowRight/arrowRight";
import ArrowLeft from "../../components/ui/arrowLeft/arrowLeft";
import TemplateLoader from "../../components/TemplateLoader/TemplateLoader";
import checkSelectsNotEmpty from "../../components/JQuery/checkSelectsNotEmpty";
import { ANSWER_BUTTON_COLOR } from "../../UI.config";
import {
  getUserAnswers,
  saveUserAnswers,
} from "../../Controllers/answers/saveAnswer";
import createAnswerButton from "../../components/JQuery/AnswerButton/createAnswerButton";
import { removeAnswerButton } from "../../components/JQuery/AnswerButton/removeAnswerButton";
import getAnswersByType from "../../utils/getAnswersByType";
import highlightAnswersRadio from "../../components/highlightAnswers/radio/highlightAnswersRadio";
import highlightAnswersSelects from "../../components/highlightAnswers/select/highlightAnswersSelects";
import highlightAnswersCheckbox from "../../components/highlightAnswers/checkbox/highlightAnswersCheckbox";
import highlightAnswersText from "../../components/highlightAnswers/text/highlightAnswersText";
import { highlightAnswers } from "../../components/highlightAnswers/highlightAnswers";
import TraningPageUI from "./ui/TraningPageUI";


interface TraningPageProps {
  traning: TraningData[];
  child?: ReactNode;
}

const arrows: CSSProperties = {
  bottom: "20px",
  right: "50px",
};

const TraningPage = (props: TraningPageProps) => {
  const [countActiveTab, setActiveTab] = useState(0);
  const [isEnabledButton, setEnabledButton] = useState(false);
  const currentAnswers = getUserAnswers()[countActiveTab + 1];

  const traningType = props.traning[countActiveTab]?.type;
  const navigate = useNavigate();

  const HTMLContent = props.traning[countActiveTab]?.component
    ? TemplateLoader(props.traning[countActiveTab]?.component)
    : undefined;

  function handleSelectChange() {
    if (checkSelectsNotEmpty()) {
      if ($("#send-answers__button").length === 0) {
        createAnswerButton();
      }
      answerButtonClick();
    }
  }

  function handleTextChange() {
    const textInputs = $('input[type="text"]');

    textInputs.on("input", function () {
      let allFilled = true;

      textInputs.each(function () {
        const inputValue = $(this).val();
        if (typeof inputValue === "string" && inputValue.trim() === "") {
          allFilled = false;
          return false;
        }
      });

      if (allFilled) {
        if ($("#send-answers__button").length === 0) {
          createAnswerButton();
          answerButtonClick();
        }
      } else {
        removeAnswerButton();
      }
    });
  }

  function handleRadioChange() {
    $('input[type="radio"]').on("change", function () {
      $('input[type="radio"]').parent().css("background-color", "");

      if ($(this).is(":checked")) {
        $(this).parent().css("background-color", ANSWER_BUTTON_COLOR.selected);
      }
    });
  }

  function setCountActiveTab(count: number) {
    if (count < props.traning.length && count >= 0) {
      return setActiveTab(count);
    } else if (props.traning.length === count) {
      setEnabledButton(false);
      setActiveTab(count);
      navigate('/result', { state: { traningAnswer: props.traning, userAnswer: getUserAnswers() } });
      return true;
    }

    return console.error("Данный таб отсутствует");
  }

  function addCountTab() {
    if (traningType) {
      setEnabledButton(false);
    }

    if (getUserAnswers()[countActiveTab + 2]) {
      setEnabledButton(true);
    }

    setCountActiveTab(countActiveTab + 1);
  }

  function takeCountTab() {
    if (traningType) {
      setEnabledButton(false);
    }


    if (getUserAnswers()[countActiveTab]) {
      setEnabledButton(true);
    }

    setCountActiveTab(countActiveTab - 1);
  }

  useEffect(() => {
    if (!traningType) {
      setEnabledButton(true);
    }
    if (traningType && !currentAnswers) {
      setEnabledButton(false);
    }
  }, [traningType]);

  const tabs = [];

  const ImageUrl = props.traning[countActiveTab]?.image
    ? props.traning[countActiveTab].image
    : undefined;

  for (let index = 0; index < props.traning.length; index++) {
    tabs.push(<div key={index} className="tab"></div>);
  }

  $('input[name="options"]')
    .off("change")
    .on("change", function () {
      const selectedElements = $('input[name="options"]:checked');

      if (selectedElements.length > 0) {
        if ($("#send-answers__button").length === 0) {
          createAnswerButton();
          answerButtonClick();
        }
      }

      if (selectedElements.length === 0) {
        removeAnswerButton();
      }

      if (traningType === "checkbox") {
        if ($(this).is(":checked")) {
          $(this)
            .parent()
            .css("background-color", ANSWER_BUTTON_COLOR.selected);
        } else {
          $(this).parent().css("background-color", "");
        }
      }
    });

  if (traningType === "radio") {
    currentAnswers
      ? highlightAnswersRadio(
        props.traning[countActiveTab].answers,
        getUserAnswers()[countActiveTab + 1],
      )
      : handleRadioChange();
  }

  if (traningType === "select") {
    currentAnswers
      ? highlightAnswersSelects(
        props.traning[countActiveTab].answers,
        currentAnswers,
      )
      : $("select")
        .off("change")
        .on("change", () => handleSelectChange());
  }

  if (traningType === "checkbox" && currentAnswers) {
      highlightAnswersCheckbox(
          props.traning[countActiveTab].answers,
          currentAnswers,
      )
  }

  if (traningType === "text") {
    currentAnswers
      ? highlightAnswersText(
        props.traning[countActiveTab].answers,
        getUserAnswers()[countActiveTab + 1],
      )
      : handleTextChange();
  }

  function answerButtonClick() {
    const sendAnswersButton = document.getElementById('send-answers__button');
    if (sendAnswersButton) {
      sendAnswersButton.addEventListener('click', () => {
        removeAnswerButton();
        setEnabledButton(true);
        saveUserAnswers(countActiveTab + 1, getAnswersByType(traningType));
        highlightAnswers(traningType, props.traning[countActiveTab].answers, currentAnswers);
      });
    }
  }

  return (
    <>
      <TraningPageUI
        title={props.traning[countActiveTab]?.title}
        tabs={tabs}
        countTab={countActiveTab}
        lengthTabs={props.traning.length}
      >
        <div className="d-flex container-filling align-center justify-content-center fw-light w-100">
          {ImageUrl && (
            <div className="img-exercise">
              <img
                src={ImageUrl}
                className="img-exercise1"
                style={{ maxHeight: "400px" }}
              />
            </div>
          )}
          {props.traning[countActiveTab]?.component && (
            <div>
              {HTMLContent && (
                <div dangerouslySetInnerHTML={{ __html: HTMLContent }} />
              )}
            </div>
          )}
        </div>

        <div
          id="arrows"
          className="d-flex w-100 justify-content-end "
          style={arrows}
        >
          {isEnabledButton && countActiveTab > 0 && (
            <ArrowLeft onClick={takeCountTab} />
          )}
          {isEnabledButton && (
            <ArrowRight id="" onClick={addCountTab} />
          )}
        </div>
      </TraningPageUI>
      <Tringle background="CFDEEE" />
    </>
  );
};

export default TraningPage;