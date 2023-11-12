import Modal from "../../components/ui/modal/modal";

interface ModalProps {
    active: boolean,
    setActive: React.Dispatch<React.SetStateAction<boolean>>,
    children?: string
}

export function ModalGetFromContent(props: ModalProps) {
    return (
        <Modal
            active={props.active}
            setActive={props.setActive}
        >
            <div>
                <p><strong>ФГОС СПО 15.02.16</strong></p>
                <span>Технология машиностроения</span>
            </div>

            <div>
                <p><strong>МДК 01.01</strong></p>
                <span>Разработка технологических процессов изготовления деталей машин с применением систем автоматизированного проектирования</span>
            </div>

            <div>
                <p><strong>Раздел</strong></p>
                <span>Машиностроение</span>
            </div>

            <div>
                <p><strong>Тема</strong></p>
                <span>Выбор оборудования, инструмента и технологической оснастки</span>
            </div>
        </Modal>
    )
}


export function ModalGetKeyWords(props: ModalProps) {
    return (
        <Modal
            active={props.active}
            setActive={props.setActive}
        >
            <p><strong>Ключевые слова</strong></p>

            <br />

            <p><strong>Режущий инструмент</strong> - инструмент для обработки резанием, то есть инструмент для
                формирования новых поверхностей отделением поверхностных слоёв материала с образованием стружки.</p>

            <p><strong>Фреза</strong> - инструмент с одним или несколькими режущими лезвиями для фрезерования на станке.</p>

            <p><strong>Протяжка</strong> - многолезвийный инструмент с рядом последовательно выступающих одно
                над другим лезвий в направлении, перпендикулярном к направлению скорости главного движения.</p>
        </Modal>
    )
};


export function ModalLecture(props: ModalProps) {
    return (
        <Modal
            active={props.active}
            setActive={props.setActive}
        >
            <div dangerouslySetInnerHTML={{ __html:  props.children ? props.children : '' }} />
        </Modal>
    )
};