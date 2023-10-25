import $ from 'jquery';

function checkSelectsNotEmpty() { 
    const selects = $("select");
    let allFields = true;

    selects.each(function() { 
        if($(this).val() === null) {
            allFields = false;
            return false;
        }
    })

    return allFields;
}

export default checkSelectsNotEmpty;