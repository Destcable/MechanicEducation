import { ANSWER_BUTTON_COLOR } from "../../../../UI.config";

const handleRadioChange = (
    handleSelectChangeCallback: () => void
) => { 
    const radioInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('input[type="radio"]');
    radioInputs.forEach(radio => radio.addEventListener("change", handleSelectChangeCallback));
    
    radioInputs.forEach(radio => {
        radio.addEventListener("change", () => {
            radioInputs.forEach(input => {
                (input.parentNode as HTMLElement).style.backgroundColor = "";
            });

            if (radio.checked) {
                (radio.parentNode as HTMLElement).style.backgroundColor = ANSWER_BUTTON_COLOR.selected;
            }
        });
    });
};

export default handleRadioChange;