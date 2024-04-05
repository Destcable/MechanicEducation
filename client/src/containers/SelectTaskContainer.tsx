import useQueryThemeTasks from "../hooks/useQueryThemeTasks";
import SelectTask from "../ui/SelectTask/SelectTask";

const SelectTaskContainer = () => { 
    const { data, loading } = useQueryThemeTasks();

    if (loading) return <h1>Loading...</h1>

    if (data) return <SelectTask tasks={data}/>
};

export default SelectTaskContainer;