import { Button, Col, Container, Row } from "react-bootstrap";
import styles from './budgetselector.module.css'

const budgets = [
    {
        budget: 'Under 50,000'
    },
    {
        budget: 'Under 60,000'
    },
    {
        budget: 'Under 70,000'
    },
    {
        budget: 'Under 80,000'
    },
    {
        budget: 'Under 90,000'
    },
    {
        budget: 'Under 1 lakh'
    },
    {
        budget: 'Under 1.5 lakh'
    },
    {
        budget: 'Under 2 lakh'
    },

]

export default function BudgetSelector() {
    return (
        <Row>
            <Container className={styles.container}>
                <Row>
                    {budgets.map((budget, index) => (
                        <Col key={index} className="p-2">
                            <Button variant="outline-secondary">{budget.budget}</Button>{' '}
                        </Col>
                    ))}
                </Row>
            </Container>
        </Row>
    )
}