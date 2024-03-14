import $ from 'jquery';

export function removeAnswerButton() { 
    return($('#send-answers__button').parent().remove());
}