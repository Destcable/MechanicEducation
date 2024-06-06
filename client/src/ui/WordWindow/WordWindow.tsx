import { FC, ReactNode } from "react";
import Header from "../../components/ui/Header/Header";

interface IWordWindow {
    title: string;
    children?: ReactNode;
    button?: ReactNode;
}

const WordWindow: FC<IWordWindow> = ({title, children, button}) => {

    return (
        <>
            <Header />
            <div className="bg_color_block d-flex flex-column ">
                <div className="d-flex justify-content-center align-center">
                    <div className="content1 d-flex flex-column max-content w-100">
                        <div className="container1">
                            <p className="container_header container_title">{title}</p>
                            <div className="container-exercise w-100">

                                <div className="text-zadanie w-100 fs-6">
                                    <div className="d-flex container-filling align-center justify-content-center fw-light w-100">
                                        {children}
                                    </div>
                                    {button}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default WordWindow;