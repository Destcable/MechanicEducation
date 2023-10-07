import $ from 'jquery';
import { ANSWER_BUTTON_COLOR } from "../../UI.config";

export function highlightAnswersCheckbox(answers: unknown[] | undefined) {
    const checkbox = $("label.btn input[type='checkbox']");
    checkbox.prop("disabled", true);
    checkbox.parent().addClass("disabled");
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
    radio.prop("disabled", true);
    radio.parent().addClass("disabled");
    $("input[type='radio']:checked").each(function () {
        const currentElement = $(this);
        if (answers?.includes(currentElement.val())) {
            currentElement.parent().css('background-color', ANSWER_BUTTON_COLOR.success);
        } else {
            currentElement.parent().css('background-color', ANSWER_BUTTON_COLOR.error);
        }
    })
}