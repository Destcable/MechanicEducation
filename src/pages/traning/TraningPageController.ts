import React from "react";

interface CountTabProps {
    countActiveTab: number, 
    setActiveTab: React.Dispatch<React.SetStateAction<number>>
}



function addCountTab(props: CountTabProps) {
    return props.setActiveTab(props.countActiveTab + 1);
}

function takeCountTab(props: CountTabProps) {
    return props.setActiveTab(props.countActiveTab - 1);
}


export default {addCountTab, takeCountTab};