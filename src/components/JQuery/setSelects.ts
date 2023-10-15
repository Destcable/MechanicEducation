import $ from 'jquery';
import BlockedElement from './blockElements';
import { UserAnswer } from '../../types/Answer';

function setSelects(values: UserAnswer| unknown ) { 
    const selects = $("select");
    selects.each(function(index) {
        $(this).val( Array.isArray(values) ? values[index] : false);    
        BlockedElement($(this));
    });
}

export default setSelects;