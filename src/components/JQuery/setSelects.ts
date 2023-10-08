import $ from 'jquery';
import BlockedElement from './blockElements';

function setSelects(values: string[] | number[]) { 
    const selects = $("select");

    selects.each(function(index) {
        if (index < values.length) {
            $(this).val(values[index]);
        } else {
            $(this).val(""); 
        }
        
        BlockedElement($(this));
    });
}

export default setSelects;