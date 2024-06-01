import Footer from "../Elements/Footer/Footer";
import { Topic } from "../../interfaces/topic";
import Button from "../Elements/Button/Button";
import Header from "../../components/ui/Header/Header";
import { store } from "../../reducer";

interface ISelectThemeProps {
    topics: Topic[],
    onClick: (data: Topic) => void
}

const SelectTopic = (props: ISelectThemeProps) => {
    store.dispatch({ type: 'headerTheme/change', payload: null });

    return (
        <>
            <Header />
            <div className=" d-flex h-100">
                <h1 className="h-100 bg-light">123</h1>
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