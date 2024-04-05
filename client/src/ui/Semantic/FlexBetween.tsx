import { ReactNode } from "react";

interface IFlexBetweenProps {
    className?: string
    children?: ReactNode
}

const FlexBetween = (props: IFlexBetweenProps) => { 
    return <div className={`${props.className} d-flex justify-content-between`}>
        {props.children}
    </div>
};

export default FlexBetween;