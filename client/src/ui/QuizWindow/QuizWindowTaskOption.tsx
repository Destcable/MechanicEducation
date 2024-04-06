import { includes } from "lodash";
import { ANSWER_BUTTON_COLOR } from "../../UI.config";

interface TaskOptionProps {
    task: { title: string };
    selectedAnswers: string[];
    handleOptionChange: (task: string) => void;
}

const QuizWindowTaskOption: React.FC<TaskOptionProps> = ({ task, selectedAnswers, handleOptionChange }) => {
    return (
        <label
            className="btn colorButton d-block mb-2 w-100"
            style={{
                backgroundColor: includes(selectedAnswers, task.title)
                    ? ANSWER_BUTTON_COLOR.selected
                    : ANSWER_BUTTON_COLOR.default,
            }}
        >
            <input
                type="checkbox"
                name="options"
                style={{ display: 'none' }}
                onChange={() => handleOptionChange(task.title)}
            />
            {task.title}
        </label>
    );
};

export default QuizWindowTaskOption;