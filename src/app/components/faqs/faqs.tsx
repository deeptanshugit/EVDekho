import { Col, Container, Row } from "react-bootstrap";
import styles from "./faqs.module.css";

export default function FAQS() {
  return (
    <Row>
      <Col>
        <Container fluid>
          <div>
            <h3> Ather 450S FAQs </h3>
          </div>

          <div className={styles.container}>
            <div className={styles.section}>
              <div className="question">
                <h5>
                  {" "}
                  Q: What is the range of Ather 450s
                </h5>
              </div>
              <div className="answer">
                <p>
                  {" "}
                  The 2024 on-road price of Royal Enfield Hunter 350 in Delhi is
                  Rs. 1,73,111. This Royal Enfield Hunter 350 price includes the
                  ex-showroom price, RTO and insurance charges.{" "}
                </p>
              </div>
            </div>
            <div className={styles.section}>
              <div className="question">
                <h5>
                  {" "}
                  Q: What is the on-road price of Ather 450S in
                  2024?{" "}
                </h5>
              </div>
              <div className="answer">
                <p>
                  {" "}
                  The 2024 on-road price of Royal Enfield Hunter 350 in Delhi is
                  Rs. 1,73,111. This Royal Enfield Hunter 350 price includes the
                  ex-showroom price, RTO and insurance charges.{" "}
                </p>
              </div>
            </div>
            <div className={styles.section}>
              <div className="question">
                <h5>
                  {" "}
                  Q: What is the battery of Ather 450s in
                  2024?{" "}
                </h5>
              </div>
              <div className="answer">
                <p>
                  {" "}
                  The 2024 on-road price of Royal Enfield Hunter 350 in Delhi is
                  Rs. 1,73,111. This Royal Enfield Hunter 350 price includes the
                  ex-showroom price, RTO and insurance charges.{" "}
                </p>
              </div>
            </div>
            <div className={styles.section}>
              <div className="question">
                <h5>
                  {" "}
                  Q: What is the 0 - 100 charging duration of Ather 450S in
                  2024?{" "}
                </h5>
              </div>
              <div className="answer">
                <p>
                  {" "}
                  The 2024 on-road price of Royal Enfield Hunter 350 in Delhi is
                  Rs. 1,73,111. This Royal Enfield Hunter 350 price includes the
                  ex-showroom price, RTO and insurance charges.{" "}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Col>
    </Row>
  );
}
