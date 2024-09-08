interface CardElementProps {
    title: string,
    image?: string,
    onClick?: () => void,
}

export default function CardElement(props: CardElementProps) {
    return (
        <div className="card" onClick={props.onClick ? props.onClick : undefined}>
            {props.image &&
                <img
                    src={props.image}
                    className="card-img-top"
                />
            }
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
            </div>
        </div>
    )
}