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
  Card,
} from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import { useState } from "react";
import styles from "./pricemodal.module.css";
import CitySearch from "../search/city/CitySearch";

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
    image: "/chennai.png",
    price: "1,18,984",
  },
];

interface PriceModalProps {
  showPriceModal: boolean;
  handleClose: () => void;
  onCitySelect: (city: string) => void
}

export default function PriceModal({ showPriceModal, handleClose, onCitySelect }: PriceModalProps, props: any) {
  const [cities, setCities] = useState([]);

  const handleCitySelect = (city: string) => {
    onCitySelect(city)
    handleClose()
  }

  const fetchCities = async () => {
    const response = await fetch("https://evdekho-backend-7f6f8ecf5616.herokuapp.com/api/v1/cities");
    const cities = await response.json();
    setCities(cities);
  };

  const handleModalShow = () => {
    fetchCities();
  };

  return (
    <Modal
      show={showPriceModal}
      onHide={handleClose}
      onShow={handleModalShow}
      size="lg"
      scrollable
    >
      <ModalHeader closeButton>
        <ModalTitle> Select your city </ModalTitle>
      </ModalHeader>
      <ModalBody>
        <Container>
          <Row>
            <Col>
              <CitySearch onCitySelect={handleCitySelect}></CitySearch>
            </Col>
          </Row>
        </Container>
        <Container className="mt-4">
          <Row>
            <h4 className="mb-4"> Popular Cities </h4>
            {popularCities.map((price, index) => (
              <Col key={index} sm={12} md={3} lg={3} className={styles.popularCities}>
                <div className="d-flex flex-column align-items-center p-2" onClick={() => handleCitySelect(price.city)}>
                  <Image
                    src={price.image}
                    alt="city-image"
                    width={100}
                    height={100}
                  ></Image>
                  <p>{price.city}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>

        <Container>
          <Row>
            <Col sm={12} md={12} lg={12}>
              <h4 className="mb-4"> All Cities </h4>
              {cities.map((city: any, index) => (
                <ul key={index} className={styles.cityList}>
                  <li className="" onClick={() => handleCitySelect(city.name)}>{city.name}</li>
                </ul>
              ))}
            </Col>
          </Row>
        </Container>
      </ModalBody>
    </Modal>
  );
}
