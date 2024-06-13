import { useQueryListThemeTasks } from "../hooks/useQueryThemeTasks";
import Loading from "../ui/Loading";
import SelectTask from "../ui/SelectTask/SelectTask";

interface ISelectTaskContainerProps { 
    dataTheme: any,
    onTaskSelected: (data: any) => void
};

const SelectTaskContainer = (props: ISelectTaskContainerProps) => { 
    const { data, loading } = useQueryListThemeTasks(props.dataTheme?.id);

    if (loading) return <Loading />

    if (data) return <SelectTask tasks={data} onClick={props.onTaskSelected}/>
};

export default SelectTaskContainer;