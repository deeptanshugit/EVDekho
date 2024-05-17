import Scooter from "@/app/components/cards/scooter";
import withLayout from "@/app/components/WithLayout";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  Col,
  Container,
  Row,
} from "react-bootstrap";
import styles from "./scooters.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";

const scooters = [
  {
    image: "/ather/atherrizta/ather-rizta.png",
    price: "1,20,025",
    name: "Ather Rizta",
    quickSpec: "80 Kmph |123 Km |119 kg |8.3 Hrs",
  },
  {
    image: "/ather/ather450s/ather-450s.jpg",
    price: "1,09,999",
    name: "Ather 450S",
    quickSpec: "90 Kmph |115 Km |108 kg | 8.3 Hrs",
  },
  {
    image: "/ather/ather-450x.png",
    price: "1,25,999",
    name: "Ather 450X",
    quickSpec: "90 Kmph | 111 Km | 108 kg | 8.36 Hrs",
  },
  {
    image: "/ather/ather-apex.png",
    price: "1,88,999",
    name: "Ather Apex",
    quickSpec: "100 Kmph | 157 Km | 111.6 kg |5.45 Hrs",
  },
];

const AtherScooters = () => {
  const [scooters, setScooters] = useState([])

  const fetchScooters = async() => {
    const brandName = 'Ather'
    const response = await fetch(`http://localhost:3001/api/v1/vehicles/list/search?brandName=${brandName}`)
    const scooters = await response.json()
    setScooters(scooters)
  }

  useEffect(() => {
    fetchScooters()
  }, [])

  return (
    <div className={styles.bodyContainer}>
      <Container>
        <Row>
          <Col>
            <div className="mt-5">
              <h4>Ather Scooters</h4>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          {scooters.map((scooter: any, index) => (
            <Col key={index} lg={12} md={12} sm={12} className="p-3">
              <Card className={styles.vehicleCard}>
                <Row className="align-items-center">
                  <Col lg={4} md={4} sm={12}>
                    <Image
                      src={scooter.imagePath}
                      alt="scooter"
                      height={300}
                      width={300}
                      layout="responsive"
                    />
                  </Col>
                  <Col lg={8} md={8} sm={12}>
                    <h4> {scooter.modelName} </h4>
                    <p> {scooter.keySpecs?.topSpeed} Kmph | {scooter.keySpecs?.range} Km | {scooter.keySpecs?.chargingTime} Hrs </p>
                    <h4> ₹{scooter.exShowroomPrice}</h4>
                    <Button variant="primary">See Specifications </Button>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default withLayout(AtherScooters);
