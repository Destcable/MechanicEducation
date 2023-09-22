import React, { CSSProperties } from "react";
import ModalBootstrap from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

interface ModalProps {
    active: boolean,
    setActive: React.Dispatch<React.SetStateAction<boolean>>
}

const Modal = (ModalObj: ModalProps) => {
    const handleClose = () => ModalObj.setActive(false);
    return (
        <>
            <ModalBootstrap show={ModalObj.active} onHide={handleClose}>
                <ModalBootstrap.Header closeButton>
                    <ModalBootstrap.Title>Modal heading</ModalBootstrap.Title>
                </ModalBootstrap.Header>
                <ModalBootstrap.Body>Woohoo, you are reading this text in a modal!</ModalBootstrap.Body>
                <ModalBootstrap.Footer>
                    <Button variant="secondary">
                        Close
                    </Button>
                    <Button variant="primary">
                        Save Changes
                    </Button>
                </ModalBootstrap.Footer>
            </ModalBootstrap>
        </>
    )
};

export default Modal;