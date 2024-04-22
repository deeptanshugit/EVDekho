import withLayout from "@/app/components/WithLayout";
import { Button, Card, CardBody, Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";

const scooters = [
  {
    image: "/electricscooter/ola/ola-s1-pro.png",
    price: "₹ 1,45,974",
    name: "Ola S1 Pro",
    quickSpec: "120 Kmph | 195 Km | 116 kg | 6.5 Hrs"
  },
  {
    image: "/electricscooter/ola/ola-s1-air.png",
    price: "₹ 1,17,179",
    name: "Ola S1 Air",
    quickSpec: "90 Kmph | 151 Km | 108 kg | 5 Hrs"
  },
  {
    image: "/electricscooter/ola/ola-s1-x.png",
    price: "₹ 80,802",
    name: "Ola S1X",
    quickSpec: "85 Kmph | 95 Km | 101 kg | 5 Hrs"
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
