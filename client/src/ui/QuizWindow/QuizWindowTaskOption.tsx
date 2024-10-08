import { ANSWER_BUTTON_COLOR } from "../../UI.config";

interface TaskOptionProps {
    idInput: string
    task: { title: string };
    selectedAnswers: string[];
    handleOptionChange: (props: any) => void;
}

const QuizWindowTaskOption: React.FC<TaskOptionProps> = ({ idInput, task, handleOptionChange }) => {
    return (
        <label
            className="btn colorButton d-block mb-2 w-100" // TODO решить btn_big or btn
            style={{ backgroundColor: ANSWER_BUTTON_COLOR.default }}
        >
            <input
                type="checkbox"
                name="options"
                style={{ display: 'none' }}
                value={task.title}
                onChange={(element) => handleOptionChange({ title: task.title, idInput, event: element })}
            />
            {task.title}
        </label>
    );
};

export default QuizWindowTaskOption;