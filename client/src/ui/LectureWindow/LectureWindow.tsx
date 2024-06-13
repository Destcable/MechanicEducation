import { ReactNode } from "react";
import WindowTaskContainer from "../../containers/WindowTaskContainer";

interface TraningPageProps {
    title: string,
    themeId: number;
    numberTask: number;
    children?: ReactNode;
    nextButton?: ReactNode;
}

const LectureWindow = (props: TraningPageProps) => (
    <WindowTaskContainer
        title={props.title}
        themeId={props.themeId}
        numberTask={props.numberTask}
    >
        <div className="text-zadanie w-100 fs-6">
            <div className="d-flex container-filling align-center justify-content-center fw-light w-100">
                {props.children}
            </div>
            {props.nextButton}
        </div>
    </WindowTaskContainer>
);

export default LectureWindow;