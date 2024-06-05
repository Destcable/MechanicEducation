import { ReactNode } from "react";
import Header from "../../components/ui/Header/Header";

interface TraningPageProps {
    title: string,
    children?: ReactNode;
    nextButton?: ReactNode; 
}

const LectureWindow = (props: TraningPageProps) => {
    return (
        <>
            <Header />
            <div className="bg_color_block d-flex flex-column ">
                <div className="d-flex justify-content-center align-center">
                    <div className="content1 d-flex flex-column max-content w-100">
                        <div className="container1">
                            <p className="container_header container_title">{props.title}</p>
                            <div className="container-exercise w-100">

                                <div className="text-zadanie w-100 fs-6">
                                    <div className="d-flex container-filling align-center justify-content-center fw-light w-100">
                                        {props.children}
                                    </div>
                                    {props.nextButton}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default LectureWindow;