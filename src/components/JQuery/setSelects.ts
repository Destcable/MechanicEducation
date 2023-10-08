import $ from 'jquery';

function setSelects(values: unknown[]) { 
    const selects = $("select");

    selects.each(function(index) {
        if (index < values.length) {
            $(this).val(values[index]);
        } else {
            $(this).val(""); 
        }
        $(this).prop("disabled", true);
    });
}

export default setSelects;