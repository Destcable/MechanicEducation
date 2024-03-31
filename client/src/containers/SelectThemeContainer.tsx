import useQueryThemeTasks from "../hooks/useQueryThemeTasks";
import SelectTheme from "../ui/SelectTheme/SelectTheme";

const SelectThemeContainer = () => { 
    const { data, loading } = useQueryThemeTasks();

    if (loading) return <h1>Loading...</h1>

    if (data) return <SelectTheme tasks={data}/>
};

export default SelectThemeContainer;