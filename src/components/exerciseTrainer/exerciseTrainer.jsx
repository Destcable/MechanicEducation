import React, { useEffect, useState } from 'react';

const ExerciseTrainer = ({title, image, text}) => {
    const [imageSrc, setImageSrc] = useState(null);

    useEffect(() => {
      import(`../../pages/traning/trainings/img/${image}`)
        .then(imageModule => {
          setImageSrc(imageModule.default);
        })
        .catch(error => {
          console.error('Ошибка загрузки изображения:', error);
        });
    }, [image]);
    
    return (
        <>
            <div className="flex space-between">
                <p className="text-zadanie">{title}</p>
            </div>

            <div className="flex container-filling align-center justify-center">
                <div className="img-exercise">
                    {image &&
                        <img src={imageSrc} alt="" className="img-exercise1" />
                    }
                </div>
                <div className="flex col">
                    <div className='text-exercise'>
                        {text}
                    </div>
                </div>


            </div>
        </>
    )
};

export default ExerciseTrainer;