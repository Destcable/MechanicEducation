import { FC, ReactNode } from "react";
import WindowTask from "../ui/WindowTask";
import { useQueryListThemeTasks } from "../hooks/useQueryThemeTasks";

interface IWindowTaskContainer { 
    title: string;
    themeId: number;
    numberTask: number;
    children: ReactNode
}

const WindowTaskContainer: FC<IWindowTaskContainer> = (props) => {
    const { data } = useQueryListThemeTasks(props.themeId);
    const countTasks = data.length;

    return(
        <WindowTask
            countTasks={countTasks}
            numberTask={props.numberTask}
            title={props.title}
        >
            {props.children}
        </WindowTask>
    )
};


export default WindowTaskContainer;