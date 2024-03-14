import { ANSWER_BUTTON_COLOR } from "../../../../UI.config";

const handleCheckboxChange = (
    handleSelectChangeCallback: () => void
) => {
    const checkboxInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('input[type="checkbox"]');
    checkboxInputs.forEach(checkBox => checkBox.addEventListener("change", handleSelectChangeCallback));

    checkboxInputs.forEach(checkbox => {
        checkbox.addEventListener("change", () => {
            if (checkbox.checked) {
                (checkbox.parentNode as HTMLElement).style.backgroundColor = ANSWER_BUTTON_COLOR.selected;
            } else {
                (checkbox.parentNode as HTMLElement).style.backgroundColor = "";
            }
        });
    });
};

export default handleCheckboxChange;