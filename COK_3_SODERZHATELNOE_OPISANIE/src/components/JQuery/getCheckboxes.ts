import $ from 'jquery';
import { AnswerValue } from '../../types/Answer';

function getCheckboxes(): AnswerValue { 
    const checkboxes = $('input[name="options"]:checked');
    const values: AnswerValue = [];

    checkboxes.each(function() {
        values.push($(this).val())
    })

    return values;
}

export default getCheckboxes;