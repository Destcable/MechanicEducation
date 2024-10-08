import { CSSProperties } from "react";
import Button from "../Elements/Button/Button";
import { Task } from "../../interfaces/task";
import FlexBetween from "../Semantic/FlexBetween";
import _ from "lodash";
import { store } from "../../reducer";
import { TbLockFilled } from "react-icons/tb";

interface ISelectTaskProps {
    tasks: Task[]
    onClick: (data: any) => void
}

const SelectTask = (props: ISelectTaskProps) => {
    const mainBlock: CSSProperties = {
        marginTop: "150px",
        columnGap: "90px"
    }

    const storeReducer = store.getState();

    return (
                <div className="d-flex justify-content-center flex-wrap" style={mainBlock}>
                    {props.tasks.map((item, idx) =>
                        <FlexBetween
                            key={idx}
                            className="align-items-center w-50 border rounded-3 p-2 mb-3"
                        >
                            <span>{item.title}</span>
                            <div>
                                {!_.includes(storeReducer.tasks, item.id) &&
                                    <Button
                                        className='text-white w-100 p-1'
                                        onClick={() => props.onClick(item)}>Пройти</Button>
                                }
                                {_.includes(storeReducer.tasks, item.id) &&
                                    <TbLockFilled />
                                }
                            </div>
                        </FlexBetween>
                    )}
                </div>
    );
};

export default SelectTask;