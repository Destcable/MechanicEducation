import React from "react";
import { getUserAnswers } from "../../../Controllers/answers/saveAnswer";
import { useNavigate } from "react-router-dom";

const setCountActiveTab = (
    setActiveTab: React.Dispatch<React.SetStateAction<number>>,
    setEnabledButton: React.Dispatch<React.SetStateAction<boolean>>,
    count: number,
    props: any
) => {
    const navigate = useNavigate();

    if (count < props.traning.length && count >= 0) {
      return setActiveTab(count);
    } else if (props.traning.length === count) {
      setEnabledButton(false);
      setActiveTab(count);
      navigate('/result', { state: { traningAnswer: props.traning, userAnswer: getUserAnswers() } });
      return true;
    }

    return console.error("Данный таб отсутствует");
};
export default setCountActiveTab;