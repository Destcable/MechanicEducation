import $ from 'jquery';
import { AnswerValue } from '../../types/Answer';

function getSelects(): AnswerValue { 
    const selects = $("select");
    const values: AnswerValue = [];

    selects.each(function() {
        values.push($(this).val())
    })

    return values;
}

export default getSelects;