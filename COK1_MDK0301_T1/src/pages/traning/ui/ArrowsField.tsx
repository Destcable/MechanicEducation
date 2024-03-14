import { CSSProperties, MouseEventHandler } from "react";
import ArrowLeft from "../../../components/ui/arrowLeft/arrowLeft";
import ArrowRight from "../../../components/ui/arrowRight/arrowRight";

const arrows: CSSProperties = {
    bottom: "20px",
    right: "50px",
};

interface IArrowsFieldProps {
    isEnabledButton: boolean,
    countActiveTab: number,
    addCountTab: MouseEventHandler<HTMLButtonElement>,
    takeCountTabCallback: () => void
}

const ArrowsField = (props: IArrowsFieldProps) => {
    return(
        <div
        id="arrows"
        className="d-flex w-100 justify-content-end "
        style={arrows}>
            {props.isEnabledButton && props.countActiveTab > 0 && (
                <ArrowLeft onClick={props.takeCountTabCallback} />
            )}
            {props.isEnabledButton && (
                <ArrowRight id="" onClick={props.addCountTab} />
            )}
        </div>
    )
};

export default ArrowsField;