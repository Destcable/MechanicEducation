import Modal from "../modal/modal";

interface ModalProps { 
    active: boolean,
    setActive: React.Dispatch<React.SetStateAction<boolean>>,
    children?: any
}

export const ModalLecture = (props: ModalProps) => { 
    return( 
        <Modal
            active={props.active}
            setActive={props.setActive}
        >
            <p>1231</p>
        </Modal>
    )
}