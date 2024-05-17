import { faSpeakerDeck } from "@fortawesome/free-brands-svg-icons";
import {
  faBattery,
  faChargingStation,
  faGauge,
  faGaugeHigh,
  faWeightHanging,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./keyspecs.module.css";

interface KeySpecsProps {
  keySpecs: Array<any>;
}

export default function KeySpecs(props: KeySpecsProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "top-speed":
        return faGauge;
      case "range":
        return faGaugeHigh;
      case "battery":
        return faBattery;
      case "charging-time":
        return faChargingStation;
      case "kerb-weight":
        return faWeightHanging;
      default:
        return faGauge;
    }
  };

  return (
    <Row>
      <Col>
      <h4> Key Specifications </h4>
        <Container className={styles.container}>
          <Row className="mt-3">
            {props.keySpecs &&
              props.keySpecs.length > 0 &&
              props.keySpecs.map((spec: any, index: any) => (
                <Col key={index} sm={12} md={6} lg={6}>
                  <div className="d-flex justify-content-between p-1">
                    <div className="d-flex">
                      <div>
                        <FontAwesomeIcon
                          icon={getIcon(spec.icon)}
                        ></FontAwesomeIcon>
                      </div>
                      <div className="px-2">
                        <p> {spec.text}</p>
                      </div>
                    </div>
                    <div>
                      <p> {spec.value}</p>
                    </div>
                  </div>
                </Col>
              ))}
          </Row>
        </Container>
      </Col>
    </Row>
  );
}
