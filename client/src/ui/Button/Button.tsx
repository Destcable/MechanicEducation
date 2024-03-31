import { ReactNode } from "react";

interface IButtonProps { 
    id?: string, 
    className: string, 
    onClick?: () => void, 
    children: ReactNode
};

const Button = (props: IButtonProps) => ( 
        <button 
            id={props.id}
            className={`btn ${props.className || ''}`} 
            style={{ backgroundColor: '#4f7094' }}
            onClick={props.onClick}
        >
            {props.children}
        </button>
);

export default Button;  