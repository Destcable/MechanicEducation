import $ from 'jquery';
import { AnswerValue } from '../../types/Answer';

function getInputTexts(): AnswerValue { 
    const textInputs = $("input[type='text']");
    const values: AnswerValue = [];

    textInputs.each(function() {
        values.push($(this).val())
    })

    return values;
}

export default getInputTexts;