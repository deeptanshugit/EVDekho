import { Button, Col, Container, Row } from "react-bootstrap";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styles from './featured.module.css'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "bootstrap/dist/css/bootstrap.min.css";

import { Navigation } from "swiper/modules";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

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

export default function Featured() {
  return (
    <Container fluid="xs" className={styles.featuredContainer}>
      <Row>
        <Col sm={12} md={6} lg={6}>
          <Container>
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
              <div className={`swiper-button-next ${styles.swiperNavBtn}`}></div>
              <div className={`swiper-button-prev ${styles.swiperNavBtn}`}></div>
            </Swiper>
          </Container>
        </Col>

        <Col sm={12} md={6} lg={6}>
          <Row className="mt-5 p-3">
            <Col sm={12} md={6} lg={6}>
              <div className={styles.button}>
                <div>
                  <h5> City </h5>
                  <p> Delhi, India </p>
                </div>
                <div>
                  <FontAwesomeIcon width={15} icon={faChevronRight} />
                </div>
              </div>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <div className={styles.button}>
                <div>
                  <h5> Variant </h5>
                  <p> 2.3kW </p>
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
                <h3> ₹ 1,51,095 </h3>
                <p> On road price, Delhi </p>
              </div>
            </Col>
          </Row>
          <Row  className=" p-3">
            <Col>
            <Button> See more details </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
