import React from "react";
import { removeAnswerButton } from "../../../components/JQuery/AnswerButton/removeAnswerButton";
import { saveUserAnswers } from "../../../Controllers/answers/saveAnswer";
import { highlightAnswers } from "../../../components/highlightAnswers/highlightAnswers";
import getAnswersByType from "../../../utils/getAnswersByType";

const answerButtonClick = (
    setEnabledButton: React.Dispatch<React.SetStateAction<boolean>>,
    countActiveTab: number,
    traningType: unknown,
    currentAnswers: any,
    props: any
) => {
    const sendAnswersButton = document.getElementById('send-answers__button');
    if (sendAnswersButton) {
        sendAnswersButton.addEventListener('click', () => {
            removeAnswerButton();
            setEnabledButton(true);
            saveUserAnswers(countActiveTab + 1, getAnswersByType(traningType));
            highlightAnswers(traningType, props.traning[countActiveTab].answers, currentAnswers);
        });
    }
};

export default answerButtonClick;