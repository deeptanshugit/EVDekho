import styles from "./page.module.css";
import BrandSelector from "./components/browse/BrandSelector/BrandSelector";

import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import VehicleSearch from "./components/search/vehicle/VehicleSearch";
import SimpleSlider from "./components/slider/simpleSlider";
import Featurebike from "./components/home/featuredbike/featurebike";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <div>
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
      </Row>
      <div className={styles.bodyContainer}>
        <div>
          <Featurebike />
        </div>
        <div>
          <BrandSelector/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
