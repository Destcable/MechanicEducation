import Modal from "../modal/modal";

interface ModalProps {
    active: boolean,
    setActive: React.Dispatch<React.SetStateAction<boolean>>,
    children?: any
}

export const ModalLecture = (props: ModalProps) => {
    return (
        <Modal
            active={props.active}
            setActive={props.setActive}
        >
            <span className="display-6">Рекомендации для обучающегося</span>
            <ul>
                <li>Повторите ранее пройденный материал</li>
                <li>Ознакомьтесь с теоретическим материалом и динамической инфографикой по теме</li>
                <li>Если в процессе изучения материала возникнут вопросы, то запишите их для дальнейшего обсуждения с преподавателем и/или с группой обучающихся.</li>
                <li>При необходимости просмотрите материал еще раз</li>
                <li>Возвращайтесь к наиболее сложным аспектам темы</li>
                <li>Соблюдайте здоровье сберегающий режим: чередуйте работу с электронными носителями с отдыхом и гимнастикой для глаз</li>
            </ul>
        </Modal>
    )
}