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
import { Divider, Grid, Typography } from "@mui/material";
import { fontSize } from "../../theme/fontsize";

interface KeySpecsProps {
  keySpecs1: Array<any>;
  keySpecs2: Array<any>;
}

export default function KeySpecsComparison(props: KeySpecsProps) {
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
        <Typography fontSize={fontSize.h2.medium} className="mt-2">
          Key Specs Comparison
        </Typography>

        <Container className={styles.container}>
          <Grid container spacing={2}>
            <Grid item lg={5} xs={12}>
              {props.keySpecs1 &&
                props.keySpecs1.length > 0 &&
                props.keySpecs1.map((spec: any, index: any) => (
                  <Col key={index} sm={12} md={6} lg={6}>
                    <div className="d-flex justify-content-between p-1">
                      <div className="d-flex">
                        <div>{spec.icon}</div>
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
            </Grid>
            <Grid item lg={2}>
              <div className="h-100 py-2">
                <Divider
                  sx={{ color: "black", background: "black", width: "1px" }}
                  orientation="vertical"
                ></Divider>
              </div>
            </Grid>
            <Grid item lg={5} xs={12}>
              {props.keySpecs2 &&
                props.keySpecs2.length > 0 &&
                props.keySpecs2.map((spec: any, index: any) => (
                  <Col key={index} sm={12} md={6} lg={6}>
                    <div className="d-flex justify-content-between p-1">
                      <div className="d-flex">
                        <div>
                          {spec.icon}
                          {/* <FontAwesomeIcon
                            icon={spec.icon}
                          ></FontAwesomeIcon> */}
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
            </Grid>
          </Grid>
        </Container>
      </Col>
    </Row>
  );
}
