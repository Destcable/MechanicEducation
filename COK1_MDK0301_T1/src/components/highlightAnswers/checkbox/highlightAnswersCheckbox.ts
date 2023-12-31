import $ from "jquery";
import { ANSWER_BUTTON_COLOR } from "../../../UI.config";
import BlockedElement from "../../JQuery/blockElements";
import { UserAnswer } from "../../../types/Answer";

export default function highlightAnswersCheckbox(
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