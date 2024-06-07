import { useParams } from "react-router-dom";
import ResultWindow from "../ui/ResultWindow/ResultWindow";
import { useQueryListThemeTasks } from "../hooks/useQueryThemeTasks";

const ResultWindowContainer = () => {
    const { themeId } = useParams();

    // @ts-ignore
    const { data } = useQueryListThemeTasks(parseInt(themeId));
    if (data) { 
        // @ts-ignore
        const tasks = data.find(item => item.type === "QUIZ" || item.type === "WORD");

        if (!tasks || tasks === 0) {
            return <ResultWindow isLecture={true} />
        }
        if (tasks || tasks.length > 0) {
            return <ResultWindow isLecture={false} />
        }
    }
};

export default ResultWindowContainer;