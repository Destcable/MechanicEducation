import React from "react";
const TraningPageController = (
    countActiveTab: number, 
    setActiveTab: React.Dispatch<React.SetStateAction<number>>
) => { 
    console.log(countActiveTab);
    console.log(setActiveTab);
    return({
        countActiveTab: countActiveTab
    })
};

function addCountTab() {
    return setCountActiveTab(countActiveTab + 1);
}

export default TraningPageController;