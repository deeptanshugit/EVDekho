
import { Button, Col, Container, Row } from "react-bootstrap";
import styles from './rangeselector.module.css'

const ranges = [
    {
        range: '50 - 100 KM'
    },
    {
        range: '100 - 200 KM'
    },
    {
        range: '200 - 300 KM'
    },
    {
        range: '300 - 400 KM'
    },
    {
        range: '400 - 500 KM'
    }

]

export default function RangeSelector() {
    return (
        <Row>
            <Container className={styles.container}>
                <Row>
                    {ranges.map((range, index) => (
                        <Col key={index} className="p-1">
                            <Button variant="outline-secondary">{range.range}</Button>{' '}
                        </Col>
                    ))}
                </Row>
            </Container>
        </Row>
    )
}