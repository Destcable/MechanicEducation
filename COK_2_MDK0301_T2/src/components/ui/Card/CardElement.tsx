import { Card } from "react-bootstrap";

interface CardElementProps {
    title: string,
    image?: string,
    onClick?: () => void,
}

export default function CardElement(props: CardElementProps) {
    return (
        <Card onClick={props.onClick ? props.onClick : undefined}>
            {props.image &&
                <Card.Img
                    src={props.image}
                    className="card-img-top"
                />
            }
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
            </Card.Body>
        </Card>
    )
}