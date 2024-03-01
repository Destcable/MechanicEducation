import React from "react";
import { getUserAnswers } from "../../../Controllers/answers/saveAnswer";

const takeCountTab = (
    setEnabledButton: React.Dispatch<React.SetStateAction<boolean>>,
    setCountActiveTab: (count: number) => true | void,
    traningType: unknown,
    countActiveTab: number
) => {
    if (traningType) {
        setEnabledButton(false);
    }
    
    if (getUserAnswers()[countActiveTab]) {
        setEnabledButton(true);
    }

    setCountActiveTab(countActiveTab - 1);
};

export default takeCountTab;