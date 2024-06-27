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
      {/* {isReadMore ? (
        text.slice(0, 150)
      ) : (
        text
        
      )} */}
      <Collapse in={!isReadMore} timeout={{ enter: 500, exit: 500 }}>
        {/* <div>{text}</div> */}
        <div>{text}</div>
      </Collapse>
      <Collapse in={isReadMore} timeout={{ enter: 200, exit: 200 }}>
        <div>{text}</div>
      </Collapse>
      {/* {isReadMore && text.length > 150 ? text.slice(0, 150) + "..." : ""} */}

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
        <Container fluid>
          <div>
            <h3> Ather 450S FAQs </h3>
          </div>
          <div className={styles.container}>
            {vehicleFAQ &&
              vehicleFAQ.map((faq: any, index) => (
                <div key={index} className={styles.section}>
                  <div className="question">
                    <h5> {faq.question} </h5>
                  </div>
                  <div className="answer">
                    <ReadMore> {faq.answer} </ReadMore>
                  </div>
                  <Divider className="w-100" />
                </div>
              ))}
          </div>
        </Container>
      </Col>
    </Row>
  );
}
