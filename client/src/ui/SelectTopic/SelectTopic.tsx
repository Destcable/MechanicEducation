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
            <div className="d-flex">
                <div className="d-flex  p-3 w-50 flex-wrap" style={{ backgroundColor: '#4276af6b' }}>
                    <span className="mb-3">Выбор предмета:</span>
                    <span>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. 
                        Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. 
                        В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, 
                        используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил 
                        без заметных изменений пять веков, но и перешагнул в электронный дизайн. 
                        Его популяризации в новое время послужили публикация листов 
                        Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, 
                        программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.</span>
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