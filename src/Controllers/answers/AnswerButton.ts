import $ from 'jquery';
import { highlightAnswersCheckbox, highlightAnswersRadio } from "../../components/AnswersLogic/highlightAnswers";
import { removeAnswerButton } from "../../components/JQuery/AnswerButton/removeAnswerButton";
import getCheckboxes from "../../components/JQuery/getCheckboxes";
import getInputTexts from "../../components/JQuery/getInputTexts";
import getRadio from "../../components/JQuery/getRadio";
import getSelects from "../../components/JQuery/getSelects";
import { saveUserAnswers } from "./saveAnswer";
import { useState } from 'react';

export function AnswerButtonClickController(type: unknown, correctAnswers: unknown[] | undefined, countCurrentTab:number ): boolean { 
    const [state, setState] = useState(false);

    $('#send-answers__button').off("click").on("click", function () {
        removeAnswerButton();

        if (type === "select") { 
            saveUserAnswers(countCurrentTab, getSelects());
            setState(true);
        }

        if (type === "checkbox") { 
            saveUserAnswers(countCurrentTab, getCheckboxes());
            highlightAnswersCheckbox(correctAnswers);
            setState(true);
        }

        if (type === "text") { 
            saveUserAnswers(countCurrentTab, getInputTexts());
            setState(true);
        }

        if (type === "radio") { 
            saveUserAnswers(countCurrentTab, getRadio());
            highlightAnswersRadio(correctAnswers);
            setState(true);
        }

    });

    return(inButton(true));

}