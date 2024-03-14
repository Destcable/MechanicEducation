import useQueryTopics from "../hooks/useQueryTopics";
import SelectTheme from "../ui/SelectTheme/SelectTheme";

const SelectThemeContainer = () => { 
    const { data, loading } = useQueryTopics();

    if (loading) return <h1>Loading...</h1>

    if (data) return <SelectTheme themes={data} onClick={(test) => console.log(test)}/>
};

export default SelectThemeContainer;