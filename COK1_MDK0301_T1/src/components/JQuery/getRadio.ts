import $ from 'jquery';
import { AnswerValue } from '../../types/Answer';

function getRadio(): AnswerValue { 
    const radio = $('input[type="radio"]:checked');
    const values: AnswerValue = [];

    radio.each(function() {
        values.push($(this).val())
    })

    return values;
}

export default getRadio;