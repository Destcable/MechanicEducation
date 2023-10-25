import $ from "jquery";
import { ANSWER_BUTTON_COLOR } from "../../../UI.config";
import BlockedElement from "../../JQuery/blockElements";
import { UserAnswer } from "../../../types/Answer";

export default function highlightAnswersRadio(
  correctAnswers: UserAnswer | unknown,
  userAnswers: UserAnswer | unknown
) {
  const radio = $("label.btn input[type='radio']");
  radio.each(function () {
    const currentValue = $(this).val();

    if (Array.isArray(userAnswers) && userAnswers.includes(currentValue)) {
      const isCorrect = Array.isArray(correctAnswers)
        ? correctAnswers[0] === currentValue
        : false;

      if (isCorrect) {
        $(this).parent().css('background-color', ANSWER_BUTTON_COLOR.success);
      } else {
        $(this).parent().css('background-color', ANSWER_BUTTON_COLOR.error);
      }
    }

    BlockedElement($(this));
  });
}
