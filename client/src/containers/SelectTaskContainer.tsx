import { useNavigate, useParams } from "react-router-dom";
import { useQueryListThemeTasks } from "../hooks/useQueryThemeTasks";
import SelectTask from "../ui/SelectTask/SelectTask";
import { Loading } from "../ui/Loading";

const SelectTaskContainer = () => {
    const navigate = useNavigate();
    const { themeId } = useParams();
    if (!themeId) return null;

    const { data, loading } = useQueryListThemeTasks(parseInt(themeId));

    if (loading) return <Loading />

    if (data) return <SelectTask tasks={data}
        onClick={(selectableTask) => navigate(`/theme/${themeId}/task/${selectableTask.id}`, { replace: true })}
    />
};

export default SelectTaskContainer;