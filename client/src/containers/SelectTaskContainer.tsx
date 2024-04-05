import { useQueryManyThemeTasks } from "../hooks/useQueryThemeTasks";
import SelectTask from "../ui/SelectTask/SelectTask";

interface ISelectTaskContainerProps { 
    dataTheme: any,
    onTaskSelected: (data: any) => void
};

const SelectTaskContainer = (props: ISelectTaskContainerProps) => { 
    const { data, loading } = useQueryManyThemeTasks(props.dataTheme?.id);

    if (loading) return <h1>Loading...</h1>

    if (data) return <SelectTask tasks={data} onClick={props.onTaskSelected}/>
};

export default SelectTaskContainer;