import { CSSProperties } from "react";
import Header from "../../components/ui/Header/Header";
import Footer from "../../components/ui/footer/footer";
import Tringle from "../../components/ui/tringle/tringle";
import Button from "../Button/Button";
import { Task } from "../../interfaces/task";

interface ISelectTaskProps {
    tasks: Task[]
    onClick: (data: any) => void
}

const SelectTask = (props: ISelectTaskProps) => {
    const mainBlock: CSSProperties = {
        marginTop: "150px",
        columnGap: "90px"
    }

    return (
        <>
            <Header />
            <div className="d-flex justify-content-center flex-wrap" style={mainBlock}>
                {props.tasks.map((item, idx) =>
                    <div key={idx} className="d-flex align-items-center w-50 justify-content-between border rounded-3 p-2 mb-3">
                        {item.type === "LECTURE" &&
                            <span>ЛЕКЦИЯ</span> 
                        }
                        <span>{item.title}</span>
                        <div>
                            <Button 
                                className='text-white w-100 p-1'
                                onClick={() => props.onClick(item)}>Пройти</Button>
                        </div>
                    </div>
                )}
            </div>

            <Tringle />
            <Footer />
        </>
    );
};

export default SelectTask;