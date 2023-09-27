import React, { useEffect, useState } from 'react';

const ExerciseTrainer = ({ title, image, text }) => {

    const [textSrc, setTextSrc] = useState(null);

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
                            <img src={image} alt="" className="img-exercise1" style={{ maxHeight: "400px" }} />
                        }
                    </div>
                }
                <div className="d-flex flex-column">
                    <div className='text-exercise'>
                        {textSrc}
                    </div>
                </div>


            </div>
        </>
    )
};

export default ExerciseTrainer;