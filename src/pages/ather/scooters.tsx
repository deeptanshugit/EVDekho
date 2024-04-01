import Scooter from "@/app/components/cards/scooter";
import withLayout from "@/app/components/WithLayout";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row } from "react-bootstrap";

const scooters = [
  {
    image: "/ather/ather-450s.jpg",
    price: "1,09,999",
    name: "Ather 450S",
  },
  {
    image: "/ather/ather-450x.jpg",
    price: "1,25,999",
    name: "Ather 450X",
  },
  {
    image: "/ather/ather-apex.png",
    price: "1,88,999",
    name: "Ather Apex",
  },
];

const AtherScooters = () => {
  return (
    <div>
      <h1>Electric Scooters By Ather</h1>
      <Row>
        {scooters.map((scooter, index) => (
          <Col key={index}>
            <div>
              <Scooter scooter={scooter} />
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default withLayout(AtherScooters);
