import $ from 'jquery';
import { ANSWER_BUTTON_COLOR } from '../../UI.config';
import BlockedElement from './blockElements';

function setCheckboxes(values: unknown[]) { 
    const checkbox = $("input[name='options']");

    checkbox.each(function() {
        const checkboxValue = $(this).val();

        if (values.includes(checkboxValue)) {
            $(this).prop('checked', true);
            $(this).parent().css('background-color', ANSWER_BUTTON_COLOR.success);
        } 
        
        BlockedElement($(this));
    });
}

export default setCheckboxes;