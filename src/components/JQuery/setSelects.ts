import $ from 'jquery';

function setSelects() { 
    const selects = $("select");

    selects.each(function() {
        console.log($(this).val())
    })
}

export default setSelects;