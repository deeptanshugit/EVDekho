import Scooter from "@/app/components/cards/scooter";
import withLayout from "@/app/components/WithLayout";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row } from "react-bootstrap";
import styles from "./scooters.module.css";

const scooters = [
  {
    image: "/ola/ola-s1-air.png",
    price: "1,04,999",
    name: "Ola S1 Air",
  },
  {
    image: "/ola/ola-s1-pro.png",
    price: "1,29,999",
    name: "Ola S1 Pro",
  },
  {
    image: "/ola/ola-s1-x.png",
    price: "1,09,999",
    name: "Ola S1 X",
  },
  {
    image: "/ola/ola-s1-x-plus.png",
    price: "84,999",
    name: "Ola S1 X Plus",
  },
];

const OlaScooters = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div>
          <h1>Electric Scooters By OLA</h1>
        </div>
        <div>
          <Row xs="auto">
            {scooters.map((scooter, index) => (
              <Col c key={index}>
                <div>
                  <Scooter scooter={scooter} />
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </main>
  );
};

export default withLayout(OlaScooters);
