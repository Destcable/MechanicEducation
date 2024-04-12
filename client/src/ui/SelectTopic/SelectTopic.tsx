import Footer from "../Elements/Footer/Footer";
import { Topic } from "../../interfaces/topic";
import Button from "../Elements/Button/Button";

interface ISelectThemeProps {
    topics: Topic[],
    onClick: (data: Topic) => void
}

const SelectTopic = (props: ISelectThemeProps) => {
    return (
        <>
            <div className="d-grid m-5 gap-4">
                {props.topics.map((item, key) =>
                    <Button
                        key={key}
                        id={item.id}
                        className='text-white w-100 p-2'
                        onClick={() => props.onClick(item)}
                    >
                        {item.name}
                    </Button>
                )}
            </div>


            <Footer />
        </>
    )
};

export default SelectTopic;