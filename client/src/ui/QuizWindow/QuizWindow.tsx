import { FC, ReactNode } from "react";
import WindowTaskContainer from "../../containers/WindowTaskContainer";

interface IQuizWindow {
    title: string;
    quizTitle: string;
    children?: ReactNode;
    answerButton?: ReactNode;
    numberTask: number;
    themeId: number;
}

const QuizWindow: FC<IQuizWindow> = (props) => {

    return (
        <WindowTaskContainer 
            numberTask={props.numberTask}
            themeId={props.themeId} 
            title={props.title}
        >
            <div className="text-zadanie w-100 fs-6">
                {props.quizTitle}
                <div className="d-flex container-filling align-center justify-content-center fw-light w-100">
                    {props.children}
                </div>
                {props.answerButton}
            </div>
        </WindowTaskContainer>
    )
};

export default QuizWindow;