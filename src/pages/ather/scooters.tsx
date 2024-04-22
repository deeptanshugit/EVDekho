import Scooter from "@/app/components/cards/scooter";
import withLayout from "@/app/components/WithLayout";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, CardBody, CardImg, Col, Container, Row } from "react-bootstrap";
import styles from "./scooters.module.css";
import Image from "next/image";

const scooters = [
  {
    image: "/ather/atherrizta/ather-rizta.png",
    price: "1,20,025",
    name: "Ather Rizta",
    quickSpec: "80 Kmph |123 Km |119 kg |8.3 Hrs"
  },
  {
    image: "/ather/ather450s/ather-450s.jpg",
    price: "1,09,999",
    name: "Ather 450S",
    quickSpec: "90 Kmph |115 Km |108 kg | 8.3 Hrs"
  },
  {
    image: "/ather/ather-450x.png",
    price: "1,25,999",
    name: "Ather 450X",
    quickSpec: "90 Kmph | 111 Km | 108 kg | 8.36 Hrs"
  },
  {
    image: "/ather/ather-apex.png",
    price: "1,88,999",
    name: "Ather Apex",
    quickSpec: "100 Kmph | 157 Km | 111.6 kg |5.45 Hrs"
  },
];

const AtherScooters = () => {
  return (
    <Container>
      <Row className="mt-5">
      {scooters.map((scooter, index) => (
        <Col key={index} lg={4} md={4} className="p-3">
          <Card>
            <Image
              src={scooter.image}
              alt="scooter"
              layout="responsive"
              height={200}
              width={200}
            />
            <CardBody>
              <h3> {scooter.name} </h3>
              <p> {scooter.quickSpec} </p>
              <h4> {scooter.price}</h4>
              <Button variant="primary">See Specifications </Button>
            </CardBody>
          </Card>
        </Col>
      ))}
      </Row>
    </Container>
    // <div className={styles.main}>
    //   <div className={styles.container}>
    //     <div>
    //       <h1>Electric Scooters By Ather</h1>
    //     </div>
    //     <div>
    //       <Row>
    //         {scooters.map((scooter, index) => (
    //           <Col key={index}>
    //             <div>
    //               <Scooter scooter={scooter} />
    //             </div>
    //           </Col>
    //         ))}
    //       </Row>
    //     </div>
    //   </div>
    // </div>
  );
};

export default withLayout(AtherScooters);
