import {
  Accordion,
  Card,
  Col,
  Container,
  Row,
  useAccordionButton,
} from "react-bootstrap";
import { Collapse, Divider, Link } from "@mui/material";
import styles from "./faqs.module.css";
import { fontSize } from "../theme/fontsize";
import { useEffect, useState } from "react";

const ReadMore = ({ children }: any) => {
  const text = children;
  console.log(text);
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <div className="text">
      <Collapse in={!isReadMore} timeout={{ enter: 500, exit: 500 }}>
        {/* <div>{text}</div> */}
        <div>{text}</div>
      </Collapse>
      <Collapse in={isReadMore} timeout={{ enter: 200, exit: 200 }}>
        <div>{text.slice(0, 100) + "..." }</div>
      </Collapse>

      <div
        onClick={toggleReadMore}
        className="read-or-hide d-flex justify-content-end"
        style={{ color: "rgb(0,136,209)" }}
      >
        {isReadMore ? "Read More" : "Read Less"}
      </div>
    </div>
  );
};

export default function FAQS() {
  const [vehicleFAQ, setvehicleFAQ] = useState([]);

  const getFAQ = async () => {
    try {
      const response = await fetch(
        "https://evdekho-backend-7f6f8ecf5616.herokuapp.com/api/v1/faq/search/faq?vehicleId=66387bb104fa76d91a3b868d"
      );
      const faq = await response.json();
      console.log(faq);
      setvehicleFAQ(faq.faqs)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFAQ();
  }, []);

  return (
    <Row>
      <Col>
        <Container fluid >
          <div>
            <h3> Ather 450S FAQs </h3>
          </div>
          <div className={styles.container} >
            <div className={styles.section}>
              <div className="question">
                <h5> Q: What is the range of Ather 450s</h5>
              </div>
              <div className="answer">
                <ReadMore>
                  The 2024 on-road price of Royal Enfield Hunter 350 in Delhi is
                  Rs. 1,73,111. This Royal Enfield Hunter 350 price includes the
                  ex-showroom price, RTO and insurance charges.
                </ReadMore>
              </div>
            </div>

            <Divider className="w-100" />
            <div className={styles.section}>
              <div className="question">
                <h5> Q: What is the on-road price of Ather 450S in 2024? </h5>
              </div>
              <div className="answer">
                <ReadMore>
                  The 2024 on-road price of Royal Enfield Hunter 350 in Delhi is
                  Rs. 1,73,111. This Royal Enfield Hunter 350 price includes the
                  ex-showroom price, RTO and insurance charges.
                </ReadMore>
              </div>
            </div>
            <Divider className="w-100" />

            <div className={styles.section}>
              <div className="question">
                <h5> Q: What is the battery of Ather 450s in 2024? </h5>
              </div>
              <div className="answer">
                <ReadMore>
                  The 2024 on-road price of Royal Enfield Hunter 350 in Delhi is
                  Rs. 1,73,111. This Royal Enfield Hunter 350 price includes the
                  ex-showroom price, RTO and insurance charges.
                </ReadMore>
              </div>
            </div>
            <Divider className="w-100" />

            <div className={styles.section}>
              <div className="question">
                <h5>
                  {" "}
                  Q: What is the 0 - 100 charging duration of Ather 450S in
                  2024?{" "}
                </h5>
              </div>
              <div className="answer">
                <ReadMore>
                  The 2024 on-road price of Royal Enfield Hunter 350 in Delhi is
                  Rs. 1,73,111. This Royal Enfield Hunter 350 price includes the
                  ex-showroom price, RTO and insurance charges.
                </ReadMore>
              </div>
            </div>
          </div>
        </Container>
      </Col>
    </Row>
  );
}
