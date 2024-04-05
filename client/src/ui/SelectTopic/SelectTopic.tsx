import Footer from "../../components/ui/footer/Footer";
import Tringle from "../../components/ui/tringle/tringle";
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

            <div style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', boxSizing: 'border-box', zIndex: 999 }}>
                <Tringle />
                <Footer />
            </div>
        </>
    )
};

export default SelectTopic;