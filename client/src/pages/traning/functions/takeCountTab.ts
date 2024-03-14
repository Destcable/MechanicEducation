import React from "react";
import { getUserAnswers } from "../../../Controllers/answers/saveAnswer";
import setCountActiveTab from "./setCountActiveTab";

const takeCountTab = (
    setActiveTab: React.Dispatch<React.SetStateAction<number>>,
    setEnabledButton: React.Dispatch<React.SetStateAction<boolean>>,
    traningType: unknown,
    countActiveTab: number,
    props: any
) => {
    if (traningType) {
        setEnabledButton(false);
    }
    
    if (getUserAnswers()[countActiveTab]) {
        setEnabledButton(true);
    }

    setCountActiveTab(
        setActiveTab,
        setEnabledButton,
        countActiveTab - 1,
        props
    );
};

export default takeCountTab;