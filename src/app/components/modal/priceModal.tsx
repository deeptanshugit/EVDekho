"use client";

import {
  Modal,
  ModalBody,
  ModalDialog,
  ModalHeader,
  ModalTitle,
  Container,
  Row,
  Col,
} from "react-bootstrap";

import styles from './variantModal.module.css'
import Image from "next/image";

const popularCities = [
  {
    city: "Mumbai",
    image: "/mumbai.png",
    price: "1,20,453",
  },
  {
    city: "Bangalore",
    image: "/bangalore.png",
    price: "1,25,154",
  },
  {
    city: "Delhi",
    image: "/delhi.png",
    price: "1,22,125",
  },
  {
    city: "Pune",
    image: "/pune.png",
    price: "1,15,753",
  },
  {
    city: "Hyderabad",
    image: "/hyderabad-charminar.png",
    price: "1,18,984",
  },
];

const popularCities2 = [
  {
    city: "Navi Mumbai",
    image: "/Navi-Mumbai.png",
    price: "1,20,453",
  },
  {
    city: "Ahmedabad",
    image: "/Ahmedabad.png",
    price: "1,25,154",
  },
  {
    city: "Chandigarh",
    image: "/Chandigarh.png",
    price: "1,22,125",
  },
  {
    city: "Kolkata",
    image: "/Kolkata.png",
    price: "1,15,753",
  },
  {
    city: "Chennai",
    image: "/Chennai.png",
    price: "1,18,984",
  },
];

interface PriceModalProps {
  showPriceModal: boolean;
  handleClose: () => void;
}

export default function PriceModal(
  { showPriceModal, handleClose }: PriceModalProps,
  props: any
) {
  return (
    <div className="modal show" style={{ position: "initial" }}>
      <Modal {...props} size="lg" show={showPriceModal} onHide={handleClose}>
        <ModalHeader closeButton>
          <ModalTitle> Select your city </ModalTitle>
        </ModalHeader>

        <ModalBody>
          <Container>
            <Row>
            {popularCities.map((price, index) => (
              <Col key={index}>
              <Image src={price.image} alt="city-image" width={100} height={100}></Image>
              <p>{price.city}</p>
              </Col>
              ))}
            </Row>

            <Row>
            {popularCities2.map((price, index) => (
              <Col key={index}>
              <Image src={price.image} alt="city-image" width={100} height={100}></Image>
              <p>{price.city}</p>
              </Col>
              ))}
            </Row>

          </Container>
        </ModalBody>
      </Modal>
    </div>
  );
}
