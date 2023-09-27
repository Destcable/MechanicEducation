import tringle from './img/tringle.png';

interface TringleProps { 
    background? : string
}

const Tringle = (TringleObj: TringleProps) => {

    return (
        <div className="d-flex triangle1"
            style={{
                backgroundColor: TringleObj.background ? '#' + TringleObj.background : '#ffffff',
            }}
        >
            <div className="triangle1_img">
                <img src={tringle} alt="tri" />
            </div>
        </div>
    )
}

export default Tringle;