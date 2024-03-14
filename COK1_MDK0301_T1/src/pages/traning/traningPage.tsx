import { ReactNode, useEffect, useState } from "react";
import $ from "jquery";
import type { TraningData } from "../../types/Traning";
import Tringle from "../../components/ui/tringle/tringle";
import TemplateLoader from "../../components/TemplateLoader/TemplateLoader";
import { getUserAnswers } from "../../Controllers/answers/saveAnswer";
import createAnswerButton from "../../components/JQuery/AnswerButton/createAnswerButton";
import { removeAnswerButton } from "../../components/JQuery/AnswerButton/removeAnswerButton";
import highlightAnswersRadio from "../../components/highlightAnswers/radio/highlightAnswersRadio";
import highlightAnswersSelects from "../../components/highlightAnswers/select/highlightAnswersSelects";
import highlightAnswersCheckbox from "../../components/highlightAnswers/checkbox/highlightAnswersCheckbox";
import highlightAnswersText from "../../components/highlightAnswers/text/highlightAnswersText";
import TraningPageUI from "./ui/TraningPageUI";
import answerButtonClick from "./functions/answerButtonClick";
import takeCountTab from "./functions/takeCountTab";
import { handleSelectChange, handleCheckboxChange, handleRadioChange } from "./functions/handlers";
import ArrowsField from "./ui/ArrowsField";

interface TraningPageProps {
  traning: TraningData[];
  child?: ReactNode;
}

const TraningPage = (props: TraningPageProps) => {
  const [countActiveTab, setActiveTab] = useState(0);
  const [isEnabledButton, setEnabledButton] = useState(false);
  const currentAnswers = getUserAnswers()[countActiveTab + 1];

  const traningType = props.traning[countActiveTab]?.type;

  const HTMLContent = props.traning[countActiveTab]?.component
    ? TemplateLoader(props.traning[countActiveTab]?.component)
    : undefined;

  const ImageUrl = props.traning[countActiveTab]?.image
    ? props.traning[countActiveTab].image
    : undefined;


  useEffect(() => {
    if (!traningType) {
      setEnabledButton(true);
    }
    if (traningType && !currentAnswers) {
      setEnabledButton(false);
    }
  }, [traningType]);

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
          answerButtonClick(
            setEnabledButton,
            countActiveTab,
            traningType,
            currentAnswers,
            props
          );
        }
      } else {
        removeAnswerButton();
      }
    });
  }

  function addCountTab() {
    if (traningType) {
      setEnabledButton(false);
    }

    if (getUserAnswers()[countActiveTab + 2]) {
      setEnabledButton(true);
    }

    setActiveTab(countActiveTab + 1);
  }

  const handleSelectChangeCallback = () => handleSelectChange(
    setEnabledButton,
    countActiveTab,
    traningType,
    currentAnswers,
    props
  );

  const handleRadioChangeCallback = () => handleRadioChange(handleSelectChangeCallback);
  const handleCheckboxChangeCallback = () => handleCheckboxChange(handleSelectChangeCallback);

  const takeCountTabCallback = () => takeCountTab(
    setActiveTab,
    setEnabledButton,
    traningType,
    countActiveTab,
    props
  );

  const tabs = [];
  // const tabs = Array.from({ length: props.traning.length }, (_, index) => <div key={index} className="tab"></div>);

  for (let index = 0; index < props.traning.length; index++) {
    tabs.push(<div key={index} className="tab"></div>);
  };

  // -------------
  $('input[name="options"]')
    .off("change")
    .on("change", function () {
      const selectedElements = $('input[name="options"]:checked');

      if (selectedElements.length > 0) {
        const sendAnswerButton = document.querySelectorAll('#send-answers__button');

        if (sendAnswerButton.length === 0) {
          createAnswerButton();
          answerButtonClick(
            setEnabledButton,
            countActiveTab,
            traningType,
            currentAnswers,
            props
          );
        }
      } else { 
        removeAnswerButton();
      }

    });
  // -------------

  if (traningType === "radio") {
    currentAnswers
      ? highlightAnswersRadio(props.traning[countActiveTab].answers, getUserAnswers()[countActiveTab + 1])
      : handleRadioChangeCallback();
  }


  if (traningType === "checkbox") {
    currentAnswers
      ? highlightAnswersCheckbox(props.traning[countActiveTab].answers, currentAnswers)
      : handleCheckboxChangeCallback();
  }

  if (traningType === "select") {
    currentAnswers
      ? highlightAnswersSelects(props.traning[countActiveTab].answers, currentAnswers)
      : document.querySelectorAll('select').forEach(select => select.addEventListener("change", handleSelectChangeCallback));
  }

  if (traningType === "text") {
    currentAnswers
      ? highlightAnswersText(
        props.traning[countActiveTab].answers,
        getUserAnswers()[countActiveTab + 1],
      )
      : handleTextChange();
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

        <ArrowsField
          addCountTab={addCountTab}
          countActiveTab={countActiveTab}
          isEnabledButton={isEnabledButton}
          takeCountTabCallback={takeCountTabCallback}
        />
      </TraningPageUI>
      <Tringle background="CFDEEE" />
    </>
  );
};

export default TraningPage;