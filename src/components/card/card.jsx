import React from "react";
import ProgressBar from "../progressBar/progressBar";
import '../../styles/main.css';

const Card = (title) => {
    return(
        <div className="card flex col ">
            <ProgressBar />
            <div className="train-block col">
                <div className="shape-card shape-color_1 mb-30">
                    <p className="card-text_main">Освоение нового материала</p>
                </div>
                <p className="center">Оборудование по обработке заготовок</p>
                <div className="flex w100 justify-center button_train ">
                    <a href="#ex3" rel="modal:open" className="">
                        <div className="flex btn btn_info align-center">Справка
                            <image src="img/papersheet.png" alt="papersheet"/>
                        </div>
                    </a>
                    <a href="1_animation_lecture/page1.html" className=""><div className="flex btn btn_exe align-center">Задание
                        <image src="img/Polygon 1.png" alt="papersheet"/>
                    </div></a>
                </div>
            </div>
        </div>
    )
}

export default Card;