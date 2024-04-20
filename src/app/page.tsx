import styles from "./page.module.css";
import BrandSelector from "./components/brands/BrandSelector";

import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import VehicleSearch from "./components/search/vehicle/VehicleSearch";
import Image from "next/image";

export default function Home() {
  return (
    <Row>
      <Col sm={12} md={12} lg={12}>
        <div className={styles.container}>
          <div className={styles.overlay}>
            <h3> Find the right electric vehicle </h3>
            <h4> Get comprehensive information on electric vehicles </h4>
            <VehicleSearch></VehicleSearch>
          </div>
        </div>
      </Col>
      <Col sm={12} md={12} lg={12} className="mt-5">
        <BrandSelector></BrandSelector>
      </Col>
    </Row>
  );
}
