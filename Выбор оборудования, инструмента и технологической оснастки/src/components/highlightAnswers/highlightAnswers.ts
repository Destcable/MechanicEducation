import { UserAnswer } from "../../types/Answer";
import highlightAnswersCheckbox from "./checkbox/highlightAnswersCheckbox";
import highlightAnswersRadio from "./radio/highlightAnswersRadio";
import highlightAnswersText from "./text/highlightAnswersText";



export function highlightAnswers(traningType: unknown, answers: UserAnswer[] | unknown, userAnswers: UserAnswer[] | unknown) {

    switch (traningType) {
      case "checkbox":
        highlightAnswersCheckbox(answers, userAnswers);
        break;
      case "text":
        highlightAnswersText(answers, userAnswers);
        break;
      case "radio":
        highlightAnswersRadio(answers, userAnswers);
        break;
    }
  }