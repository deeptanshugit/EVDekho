"use client";
import { useState } from "react";
import { Button, Col, FormControl, InputGroup, Row } from "react-bootstrap";

export default function VehicleSearch() {
  const [search, setSearch] = useState("");
  return (
    <Row>
      <Col sm={12} lg={12} md={12}>
        <InputGroup>
          <FormControl
            aria-label="Example text with button addon"
            aria-describedby="basic-addon1"
          ></FormControl>
          <Button variant="danger" id="button-addon1">
            Search
          </Button>
        </InputGroup>
      </Col>
    </Row>
  );
}
