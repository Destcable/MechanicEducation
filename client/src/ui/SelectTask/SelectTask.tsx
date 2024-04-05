import { CSSProperties } from "react";
import Header from "../../components/ui/Header/Header";
import Footer from "../../components/ui/footer/footer";
import Tringle from "../../components/ui/tringle/tringle";
import Button from "../Button/Button";
import { Task } from "../../interfaces/task";

interface ISelectTaskProps {
    tasks: Task[]
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
                {props.tasks.map((item) =>
                    <div className="d-flex align-items-center w-50 justify-content-between border rounded-3 p-2">
                        {item.type === "LECTURE" &&
                            <span>ЛЕКЦИЯ</span> 
                        }
                        <span>{item.title}</span>
                        <div>
                            <Button className='text-white w-100 p-1'>Пройти</Button>
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