import $ from "jquery";
import { ANSWER_BUTTON_COLOR } from "../../UI.config";
import BlockedElement from "../JQuery/blockElements";
import { UserAnswer } from "../../types/Answer";

export function highlightAnswersCheckbox(
  correctAnswers: UserAnswer[] | unknown,
  values: UserAnswer[] | unknown,
) {
  const checkboxes = $("input[name='options']");

  checkboxes.each(function () {
    const checkboxValue = $(this).val();
    if (Array.isArray(correctAnswers) && Array.isArray(values)) {
      if (
        correctAnswers.includes(checkboxValue) ||
        (values && values.includes(checkboxValue))
      ) {
        const isCorrect = correctAnswers?.includes(checkboxValue);
        const isIncorrect = values && values.includes(checkboxValue);

        if (isCorrect) {
          $(this).parent().css("background-color", ANSWER_BUTTON_COLOR.success);
        } else if (isIncorrect) {
          $(this).parent().css("background-color", ANSWER_BUTTON_COLOR.error);
        }
      }
    }
    BlockedElement($(this));
  });
}

export function highlightAnswersSelects(
  correctAnswers: UserAnswer | unknown,
  userAnswers: UserAnswer | unknown,
) {
  const selects = $("select");
  selects.each(function (index) {
    const userAnswer = Array.isArray(userAnswers) ? userAnswers[index] : false;
    const isCorrect = Array.isArray(correctAnswers)
      ? correctAnswers[index] === userAnswer
      : false;

    $(this).val(userAnswer);

    if (isCorrect) {
      $(this).css("background-color", ANSWER_BUTTON_COLOR.success);
    } else {
      $(this).css("background-color", ANSWER_BUTTON_COLOR.error);
    }

    $(this).val(Array.isArray(userAnswers) ? userAnswers[index] : false);

    BlockedElement($(this));
  });
}

export function highlightAnswersText(
  correctAnswers: UserAnswer | unknown,
  userAnswers: UserAnswer | unknown,
) {
  $("input[type='text']").each(function () {
    $(this).css("background-color", ANSWER_BUTTON_COLOR.success);
    BlockedElement($(this));
  });
  // const textInputs = $('input[type="text"]');
  // textInputs.each((index) => {
  // $(this).parent().css("background-color", ANSWER_BUTTON_COLOR.success);
  // const userAnswer = Array.isArray(userAnswers) ? userAnswers[index] : false;
  // const isCorrect = Array.isArray(correctAnswers)
  //   ? correctAnswers[index] === userAnswer
  //   : false;
  // if (isCorrect) {
  //   $(this).css("background-color", ANSWER_BUTTON_COLOR.success);
  // } else {
  //   $(this).css("background-color", ANSWER_BUTTON_COLOR.error);
  // }
}

export function highlightAnswersRadio(answers: unknown[] | undefined) {
  const radio = $("label.btn input[type='radio']");
  BlockedElement(radio);
  $("input[type='radio']:checked").each(function () {
    const currentElement = $(this);
    if (answers?.includes(currentElement.val())) {
      currentElement
        .parent()
        .css("background-color", ANSWER_BUTTON_COLOR.success);
    } else {
      currentElement
        .parent()
        .css("background-color", ANSWER_BUTTON_COLOR.error);
    }
  });
}
