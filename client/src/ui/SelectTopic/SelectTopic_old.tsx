import Footer from "../Elements/Footer/Footer";
import { Topic } from "../../interfaces/topic";
import Button from "../Elements/Button/Button";
import Header from "../../components/ui/Header/Header";
import { store } from "../../reducer";
import SelectTopicInfo from "./SelectTopicInfo";

interface ISelectThemeProps {
    topics: Topic[],
    onClick: (data: Topic) => void
}

const SelectTopic = (props: ISelectThemeProps) => {
    store.dispatch({ type: 'headerTheme/change', payload: null });

    return (
        <>
            <Header />
            <div className="d-flex">
                <div className="d-flex  p-3 w-50 flex-wrap" style={{ backgroundColor: 'rgba(160, 190, 221, 25%)' }}>
                    <SelectTopicInfo />
                </div>
                <div className="w-100 m-5 gap-4">
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

            </div>
            <Footer />
        </>
    )
};

export default SelectTopic;