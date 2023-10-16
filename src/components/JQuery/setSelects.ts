import $ from 'jquery';
import BlockedElement from './blockElements';
import { UserAnswer } from '../../types/Answer';
import { ANSWER_BUTTON_COLOR } from '../../UI.config';

function setSelects(correctAnswers: UserAnswer | unknown, userAnswers: UserAnswer| unknown ) { 
    const selects = $("select");
    selects.each(function(index) {
        const userAnswer = Array.isArray(userAnswers) ? userAnswers[index] : false;
        const isCorrect = Array.isArray(correctAnswers) ? correctAnswers[index] === userAnswer : false;

        $(this).val(userAnswer);

        if (isCorrect) {
            $(this).css('background-color', ANSWER_BUTTON_COLOR.success);
        } else {
            $(this).css('background-color', ANSWER_BUTTON_COLOR.error);
        }

        $(this).val(Array.isArray(userAnswers) ? userAnswers[index] : false);    

        BlockedElement($(this));
    });
}

export default setSelects;