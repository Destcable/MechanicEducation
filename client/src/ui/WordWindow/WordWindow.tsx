import { FC, ReactNode } from "react";
import WindowTaskContainer from "../../containers/WindowTaskContainer";

interface IWordWindow {
    title: string;
    themeId: number;
    numberTask: number;
    children?: ReactNode;
    button?: ReactNode;
}

const WordWindow: FC<IWordWindow> = ({ title, themeId, numberTask, children, button }) => (
    <WindowTaskContainer
        title={title}
        themeId={themeId}
        numberTask={numberTask}
    >
        <div className="text-zadanie w-100 fs-6">
            <div className="d-flex container-filling align-center justify-content-center fw-light w-100">
                {children}
            </div>
            {button}
        </div>
    </WindowTaskContainer>
)

export default WordWindow;