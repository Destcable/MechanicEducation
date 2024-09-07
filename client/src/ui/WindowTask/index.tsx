import { FC, ReactNode } from "react";

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
                key={i}
                className="w-100 rounded-clipse"
                style={{
                    height: '20px',
                    backgroundColor: i < props.numberTask
                        ? '#FEFEFE'
                        : 'rgba(254, 254, 254, 0.5)'
                }}
            />)
        };

        return arr;
    };

    return (
        <div className="d-flex flex-column bg_color_block">
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
    )
};

export default WindowTask;