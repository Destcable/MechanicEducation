import $ from "jquery";
import BlockedElement from "../../JQuery/blockElements";
import { UserAnswer } from "../../../types/Answer";
import { ANSWER_BUTTON_COLOR } from "../../../UI.config";

export default function highlightAnswersText(
    correctAnswers: UserAnswer | unknown,
    userAnswers: UserAnswer | unknown,
  ) {
    $("input[type='text']").each(function (index) {
      const userAnswer = Array.isArray(userAnswers) ? userAnswers[index] : false;
      const isCorrect = Array.isArray(correctAnswers)
        ? correctAnswers[index] === userAnswer
        : false;
  
      $(this).val(userAnswer);
  
      if (isCorrect) {
        $(this).css("background-color", ANSWER_BUTTON_COLOR.success);
      } else {
        $(this).css('background-color', ANSWER_BUTTON_COLOR.error);
      }
  
      BlockedElement($(this));
    });
  }
  