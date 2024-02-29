import { Card, CardBody, CardImg, CardText, CardTitle } from "react-bootstrap"

export default function PriceCard() {
    return (
        <Card style={{ width: '18rem' }}>
            <CardImg src="/bangalore.png"></CardImg>
            <CardBody>
                <CardTitle>
                    Bengaluru
                </CardTitle>
                <CardText>
                ₹ 1,13,694
                </CardText>
            </CardBody>
        </Card>
    )
}