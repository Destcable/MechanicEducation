import $ from 'jquery';
import { ANSWER_BUTTON_COLOR } from '../../UI.config';
import BlockedElement from './blockElements';
import { UserAnswer } from '../../types/Answer';

function setCheckboxes(values: UserAnswer | unknown) { 
    const checkbox = $("input[name='options']");

    checkbox.each(function() {
        const checkboxValue = $(this).val();
        
        if (Array.isArray(values) && values.includes(checkboxValue)) {
            $(this).prop('checked', true);
            $(this).parent().css('background-color', ANSWER_BUTTON_COLOR.success);
        } 
        BlockedElement($(this));
    });
}

export default setCheckboxes;