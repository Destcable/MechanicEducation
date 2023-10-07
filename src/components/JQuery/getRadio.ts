import $ from 'jquery';
import { AnswerValue } from '../../types/Answer';

function getRadio(): AnswerValue { 
    const radio = $('input[name="radio"]:checked');
    const values: AnswerValue = [];

    radio.each(function() {
        values.push($(this).val())
    })

    return values;
}

export default getRadio;