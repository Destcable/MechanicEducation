import { useEffect, useState } from 'react';

interface ExerciseTrainerProps {
    title: string,
    image?: string,
    text: unknown
}

const ExerciseTrainer = (props: ExerciseTrainerProps) => {

    const [textSrc, setTextSrc] = useState(null);

    useEffect(() => {
        if (props.text) {
            import(`../../trainers/${props.text}`)
                .then(textModule => {
                    setTextSrc(textModule.default);
                })
        }
    }, [props.text]);

    return (
        <>
            <div className="d-flex space-between">
                <p className="text-zadanie">{props.title}</p>
            </div>

            <div className="d-flex container-filling align-center justify-center">
                {props.image &&
                    <div className="img-exercise">
                        <img src={props.image} alt="" className="img-exercise1" style={{ maxHeight: "400px" }} />
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