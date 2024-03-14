import React from "react";
import $ from "jquery";
import createAnswerButton from "../../../../components/JQuery/AnswerButton/createAnswerButton";
import checkSelectsNotEmpty from "../../../../components/JQuery/checkSelectsNotEmpty";
import answerButtonClick from "../answerButtonClick";

const handleSelectChange = (
    setEnabledButton: React.Dispatch<React.SetStateAction<boolean>>,
    countActiveTab: number,
    traningType: unknown,
    currentAnswers: any,
    props: any
) => {
    if (checkSelectsNotEmpty()) {
        if ($("#send-answers__button").length === 0) {
            createAnswerButton();
        }
        answerButtonClick(
            setEnabledButton,
            countActiveTab,
            traningType,
            currentAnswers,
            props
        );
    }
};

export default handleSelectChange;