import React, { CSSProperties } from "react";
import ModalBootstrap from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

interface ModalProps {
    active: boolean,
    setActive: React.Dispatch<React.SetStateAction<boolean>>
}

const Modal = (ModalObj: ModalProps) => {

    const handleClose = () => ModalObj.setActive(false);

    const styleModal: CSSProperties = { 
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 5,
    };

    const styleModalContext: CSSProperties = { 
        padding: "20px",
        backgroundColor: "white",
        height: "200px",
        width: "400px",
    }

    return (
        <>
        <div style={styleModal}>
            <div style={styleModalContext}>

            </div>
        </div>
        </>
    )
};

export default Modal;