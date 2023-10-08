import $ from 'jquery';
import { ANSWER_BUTTON_COLOR } from "../../UI.config";
import BlockedElement from '../JQuery/blockElements';

export function highlightAnswersCheckbox(answers: unknown[] | undefined) {
    const checkbox = $("label.btn input[type='checkbox']");
    BlockedElement(checkbox);
    $("input[type='checkbox']:checked").each(function () {
        const currentElement = $(this);
        if (answers?.includes(currentElement.val())) {
            currentElement.parent().css('background-color', ANSWER_BUTTON_COLOR.success);
        } else {
            currentElement.parent().css('background-color', ANSWER_BUTTON_COLOR.error);
        }
    })
}

export function highlightAnswersRadio(answers: unknown[] | undefined) { 
    const radio = $("label.btn input[type='radio']");
    BlockedElement(radio);
    $("input[type='radio']:checked").each(function () {
        const currentElement = $(this);
        if (answers?.includes(currentElement.val())) {
            currentElement.parent().css('background-color', ANSWER_BUTTON_COLOR.success);
        } else {
            currentElement.parent().css('background-color', ANSWER_BUTTON_COLOR.error);
        }
    })
}