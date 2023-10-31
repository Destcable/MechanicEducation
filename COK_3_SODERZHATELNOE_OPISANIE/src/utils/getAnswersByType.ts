import getCheckboxes from "../components/JQuery/getCheckboxes";
import getInputTexts from "../components/JQuery/getInputTexts";
import getRadio from "../components/JQuery/getRadio";
import getSelects from "../components/JQuery/getSelects";

export default function getAnswersByType(traningType: unknown) {
    switch (traningType) {
        case "select":
            return getSelects();
        case "checkbox":
            return getCheckboxes();
        case "text":
            return getInputTexts();
        case "radio":
            return getRadio();
        default:
            return [];
    }
}