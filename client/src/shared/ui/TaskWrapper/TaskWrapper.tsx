import { useParams } from "react-router-dom";
import { useQueryListThemeTasks } from "../../../hooks/useQueryThemeTasks";
import LectureWindowContainer from "../../../containers/LectureWindowContainer";

const TaskWrapper = () => { 
    const { themeId, taskId } = useParams();
    if ( !themeId || !taskId) return null;

    const { data }  = useQueryListThemeTasks(parseInt(themeId))
    return data?.map((task: any, index: number) => { 

        if (task.id == taskId) { 
            if ( task.type === "LECTURE" ) return <LectureWindowContainer key={index} dataTask={task} />
        }
    })
    // return data?.map((task: any, index: number) => { 
    //     
    // }) 
};

export default TaskWrapper;