import { FC, ReactNode } from "react";
import Footer from "../Elements/Footer/Footer";
import Header from "../../components/ui/Header/Header";

interface IWindowTask {
    title: string;
    countTasks: number;
    numberTask: number;
    children: ReactNode
}

const WindowTask: FC<IWindowTask> = (props) => {
    const WindowClipse = () => {
        const arr = [];
        for (let i = 0; i < props.countTasks; i++) {
            arr.push(<div
                className="w-100 bg-danger rounded-clipse"
                style={{ height: '20px' }}
            />)
        };

        return arr;
    };

    return (
        <div className="page-container">
            <div className="content-wrap">
                <Header />
                <div className="bg_color_block d-flex flex-column ">
                    <div className="d-flex justify-content-center align-center">
                        <div className="content1 d-flex flex-column max-content w-100">
                            <div className="container1">
                                <div className="container_header">
                                    <div className="d-flex justify-content-between ">
                                        <p className="container_title">{props.title}</p>
                                        {props.countTasks &&
                                            <div
                                                style={{ fontSize: "23px" }}
                                                className="d-flex align-items-center text-white p-4 display-7"
                                            >
                                                {props.numberTask} / {props.countTasks}
                                            </div>
                                        }
                                    </div>
                                    <div className="d-flex">
                                        <WindowClipse />
                                    </div>
                                </div>
                                <div className="container-exercise w-100">

                                    {props.children}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer
                isTringle={false}
                isBottom={true}
                backgroundColorTringle="rgba(160, 190, 221, 50%)"
            />
        </div>
    )
};

export default WindowTask;