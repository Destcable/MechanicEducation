import { CSSProperties, FC } from 'react';
import tringle from './img/tringle.png';

interface ITringleProps { 
    backgroundColor?: string
}

const Tringle: FC<ITringleProps> = ({ backgroundColor }) => {
    
    const styles: CSSProperties = { 
        backgroundColor: backgroundColor ? backgroundColor : 'white'
    };

    return (
        <div className="d-flex triangle1" style={styles}>
            <div className="triangle1_img">
                <img src={tringle} alt="tri" />
            </div>
        </div>
    )
}

export default Tringle;