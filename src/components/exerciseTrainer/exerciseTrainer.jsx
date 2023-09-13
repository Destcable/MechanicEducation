import React from "react";

const ExerciseTrainer = ({title}) => {
    return (
        <>
            <div className="flex space-between">
                <p className="text-zadanie">{title}</p>
            </div>

            <div className="flex container-filling align-center justify-center">
                <div className="img-exercise">
                    <img src="" alt="" className="img-exercise1" />
                </div>
                <div className="flex col">
                    <p className="text-exercise">
                    </p>
                </div>


            </div>
        </>
    )
};

export default ExerciseTrainer;