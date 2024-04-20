'use client'
import { useState } from "react";
import { Col, Row } from "react-bootstrap";

interface vehicleName {
    name: string
}

export default function VehicleName(props: vehicleName) {
    const [rating, setRating] = useState<number>(4); // Set initial rating

    return (
        <Row className="p-0">
            <Col>
            <h3>
                {props.name}
            </h3>
            <div style={{ color: "#00afa0" }}>
                    {[...Array(5)].map((_, index) => (
                        <span key={index}>{index < rating ? "★" : "☆"}</span>
                    ))}
                </div>
            </Col>
        </Row>
    )
}