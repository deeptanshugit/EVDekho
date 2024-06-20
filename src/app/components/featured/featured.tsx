"use client";
import Image from "next/image";
import styles from "./featured.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import VariantModal from "../modal/variantModal";
import PriceModal from "../modal/priceModal";
import { Button, Col, Container, Row } from "react-bootstrap";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "bootstrap/dist/css/bootstrap.min.css";

import { Navigation } from "swiper/modules";

const images = [
  {
    url: "/ather/ather450s/ather-450s.jpg",
  },
  {
    url: "/ather/ather450s/ather-450s-black.png",
  },
  {
    url: "/ather/ather450s/ather-450s-dashboard.png",
  },
  {
    url: "/ather/ather450s/ather-450s-side-view.png",
  },
  {
    url: "/ather/ather450s/ather-450s-tail-light.png",
  },
  {
    url: "/ather/ather450s/ather-450s-tyre.png",
  },
];

interface FeaturedProps {
  vehicleId?: string;
  imageURL: string;
  prices?: any;
}

export default function Featured(props: FeaturedProps) {
  const [showVariantModal, setShowVariantModal] = useState(false);
  const [showPriceModal, setShowPriceModal] = useState(false);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [currentVehiclePrice, setCurrentVehiclePrice] = useState<string | null>(
    null
  );
  const [selectedVariant, setSelectedVariant] = useState<string | null>(null);

  const handleVariantModalShow = () => setShowVariantModal(true);
  const handleVariantModalClose = () => setShowVariantModal(false);

  const handlePriceModalShow = () => setShowPriceModal(true);
  const handlePriceModalClose = () => setShowPriceModal(false);

  const handleCitySelect = (city: string) => {
    setSelectedCity(city);
    const vehiclePriceInSelectedCity = props.prices?.pricesInTopCities.find(
      (item: any) => item.cityName === city
    );
    setCurrentVehiclePrice(
      vehiclePriceInSelectedCity
        ? vehiclePriceInSelectedCity.formattedPrice
        : null
    );
  };

  const handleVariantSelect = (variant: string) => {
    setSelectedVariant(variant);
  };

  return (
    <Container fluid="xs" className={styles.featuredContainer}>
      <Row>
        <Col sm={12} md={6} lg={6}>
          <div className="container">
            <Swiper
              slidesPerView={1}
              spaceBetween={0}
              pagination={{
                clickable: true,
              }}
              modules={[Navigation]}
              className="mySwiper"
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
                768: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
                1024: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
              }}
            >
              {images.map((image, index) => (
                <SwiperSlide key={index} className={styles.swiperSlide}>
                  <Container fluid className={styles.imageContainer}>
                    <Image
                      src={image.url}
                      alt="ather"
                      layout="responsive" // Added layout="responsive"
                      width={500}
                      height={500} //
                    ></Image>
                  </Container>
                </SwiperSlide>
              ))}
              <div
                className={`swiper-button-next ${styles.swiperNavigationButton}`}
              ></div>
              <div
                className={`swiper-button-prev ${styles.swiperNavigationButton}`}
              ></div>
            </Swiper>
          </div>
        </Col>

        <Col sm={12} md={6} lg={6}>
          <Row className="mt-5 p-3">
            <Col sm={12} md={6} lg={6}>
              <div className={styles.button} onClick={handlePriceModalShow}>
                <div className={styles.buttonContainer}>
                  <h5> City </h5>
                  <p>
                    {" "}
                    {selectedCity
                      ? `${selectedCity}, India `
                      : "Select your city"}{" "}
                  </p>
                </div>
                <div>
                  <FontAwesomeIcon width={15} icon={faChevronRight} />
                </div>
              </div>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <div className={styles.button} onClick={handleVariantModalShow}>
                <div className={styles.buttonContainer}>
                  <h5> Variant </h5>
                  <p>
                    {" "}
                    {selectedVariant ? selectedVariant : "Select variant"}{" "}
                  </p>
                </div>
                <div>
                  <FontAwesomeIcon width={15} icon={faChevronRight} />
                </div>
              </div>
            </Col>
          </Row>
          <Row className="mt-2 p-3">
            <Col>
              <div className="p-2">
                <h3>
                  {" "}
                  ₹{" "}
                  {currentVehiclePrice && selectedCity
                    ? currentVehiclePrice
                    : props.prices?.exshowroom}{" "}
                </h3>
                <p>
                  {" "}
                  {selectedCity
                    ? `On road price, ${selectedCity}`
                    : "Avg Ex Showroom Price"}{" "}
                </p>
              </div>
            </Col>
          </Row>
          <Row className=" p-3">
            <Col>
              <Button> See more details </Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <VariantModal
        vehicleId={props.vehicleId}
        showVariantModal={showVariantModal}
        handleClose={handleVariantModalClose}
        onVariantSelect={handleVariantSelect}
      ></VariantModal>
      <PriceModal
        showPriceModal={showPriceModal}
        handleClose={handlePriceModalClose}
        onCitySelect={handleCitySelect}
      ></PriceModal>
    </Container>
  );
}
