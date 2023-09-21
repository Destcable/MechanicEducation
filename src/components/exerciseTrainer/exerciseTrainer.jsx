import React, { useEffect, useState } from 'react';

const ExerciseTrainer = ({ title, image, text }) => {
    const [imageSrc, setImageSrc] = useState(null);

    const [textSrc, setTextSrc] = useState(null);

    useEffect(() => {
        if (image) {
            import(`../../pages/traning/trainings/img/${image}`)
                .then(imageModule => {
                    setImageSrc(imageModule.default);
                })
        }
    }, [image]);

    useEffect(() => {
        if (text) {
            import(`../../trainers/${text}`)
                .then(textModule => {
                    setTextSrc(textModule.default);
                })
        }
    }, [text]);

    return (
        <>
            <div className="d-flex space-between">
                <p className="text-zadanie">{title}</p>
            </div>

            <div className="d-flex container-filling align-center justify-center">
                {image &&
                    <div className="img-exercise">
                        {image &&
                            <img src={imageSrc} alt="" className="img-exercise1" style={{ maxHeight: "400px" }} />
                        }
                    </div>
                }
                <div className="d-flex col">
                    <div className='text-exercise'>
                        {textSrc}
                    </div>
                </div>


            </div>
        </>
    )
};

export default ExerciseTrainer;