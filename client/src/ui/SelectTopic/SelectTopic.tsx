import { Topic } from "../../interfaces/topic";
import testLogo from "./img/test.png";
import { FaArrowRight } from "react-icons/fa6";
import { FC } from "react";
import { Button } from "react-bootstrap";
import { store } from "../../core/store/reducer";

interface ISelectThemeProps {
    topics: Topic[],
    onClick: (data: Topic) => void
}

const SelectTopic = (props: ISelectThemeProps) => {
    store.dispatch({ type: 'headerTheme/change', payload: null });

    return (
        <div className="d-flex bg-light">
            <div className="w-100 m-5 gap-4 d-flex flex-wrap mb-5">
                {props.topics.map((item, key) =>
                    <TemplateSelectTopic
                        key={key}
                        name={item.name}
                        section={item.section}
                        onClick={() => props.onClick(item)}
                    />
                )}
            </div>
        </div>
    )
};

interface ITemplateSelectTopic {
    name: string,
    section: string,
    onClick?: (data: Topic) => void
}

const TemplateSelectTopic: FC<ITemplateSelectTopic> = ({ name, section, onClick }) => (
    <div className="p-3 border rounded bg-white w-32">
        <div className="justify-content-center text-center">
            <img src={testLogo} alt="testLogo" className="img-fluid" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
        <div className="d-flex mt-3">
            <span
                className="p-2 rounded font-monospace"
                style={{ backgroundColor: '#f6ecff', color: '#a348ff' }}
            >
                {section}
            </span>
        </div>
        <p className="fs-5 fw-bold mt-3 mb-4">{name}</p>
        <Button
            className='font-monospace bg-white border-0 p-0'
            style={{ color: '#0250ce' }}
            // @ts-ignore
            onClick={onClick}
        >
            Перейти <FaArrowRight />
        </Button>
    </div>
);

export default SelectTopic;