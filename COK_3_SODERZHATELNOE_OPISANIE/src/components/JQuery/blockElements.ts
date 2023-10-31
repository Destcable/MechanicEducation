import $ from 'jquery';

export default function BlockedElement(HTMLelement: JQuery<HTMLElement>) { 
    $(HTMLelement).prop("disabled", true);
    $(HTMLelement).parent().addClass("disabled");
}
