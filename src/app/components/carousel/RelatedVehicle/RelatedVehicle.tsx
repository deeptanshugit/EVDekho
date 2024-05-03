import Image from "next/image";
import styles from "./RelatedVehicle.module.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Button, Col, Container, Row } from "react-bootstrap";

export default function RelatedVehicle() {
  return (
    <Row>
      <Col>
        <div>
          <h4> Scooters similar to Ather 450S</h4>
        </div>
        <div>
          <Swiper
            slidesPerView={2}
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
              360: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              960: {
                slidesPerView: 3,
                spaceBetween: 0,
              },
              1008: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
          >
            <Container>
              <SwiperSlide className={styles.swiperSlide}>
                <div className="card w-100">
                  <div className={styles.cardImageContainer}>
                    <Image
                      src="/ather/ather-450x.png"
                      alt=""
                      height={500}
                      width={500}
                    ></Image>
                  </div>
                  <div className="card-content d-flex p-3 flex-column justify-content-start align-items-start">
                    <h5> Ather 450X</h5>
                    <p className={styles.cardContentP}>
                      {" "}
                      90 Kmph | 111 Km | 108 kg | 8 Hrs
                    </p>
                    <h5> ₹ 1,51,095 </h5>
                    <p className={styles.cardContentP}> On road price, Delhi</p>
                    <Button> View more </Button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.swiperSlide}>
                <div className="card w-100">
                  <Image
                    src="/ather/ather-apex.png"
                    alt=""
                    layout="responsive"
                    height={500}
                    width={500}
                  ></Image>
                  <div className="card-content d-flex p-3 flex-column justify-content-start align-items-start">
                    <h5> Ather Apex</h5>
                    <p className={styles.cardContentP}>
                      {" "}
                      100 Kmph | 157 Km | 111 kg | 5 Hrs
                    </p>
                    <h5> ₹ 2,04,033 </h5>
                    <p className={styles.cardContentP}> On road price, Delhi</p>
                    <Button> View more </Button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.swiperSlide}>
                <div className="card w-100">
                  <div className="image-section">
                    <Image
                      src="/electricscooter/ola/ola-s1-pro.png"
                      alt=""
                      height={400}
                      width={400}
                    ></Image>
                  </div>
                  <div className="card-content d-flex p-3 flex-column justify-content-start align-items-start">
                    <h5> Ola S1 Pro</h5>
                    <p className={styles.cardContentP}>
                      {" "}
                      120 Kmph | 195 Km | 116 kg | 6 Hrs
                    </p>
                    <h5> ₹ 1,45,974 </h5>
                    <p className={styles.cardContentP}> On road price, Delhi</p>
                    <Button> View more </Button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.swiperSlide}>
                <div className="card w-100">
                  <div className="image-section">
                    <Image
                      src="/electricscooter/ola/ola-s1-air.png"
                      alt=""
                      height={400}
                      width={400}
                    ></Image>
                  </div>
                  <div className="card-content d-flex p-3 flex-column justify-content-start align-items-start">
                    <h5> Ola S1 Air</h5>
                    <p className={styles.cardContentP}>
                      {" "}
                      90 Kmph | 151 Km | 108 kg | 5 Hrs
                    </p>
                    <h5> ₹ 1,17,179 </h5>
                    <p className={styles.cardContentP}> On road price, Delhi</p>
                    <Button> View more </Button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.swiperSlide}>
                <div className="card w-100">
                  <div className="image-section">
                    <Image
                      src="/electricscooter/ola/ola-s1-x.png"
                      alt=""
                      height={400}
                      width={400}
                    ></Image>
                  </div>
                  <div className="card-content d-flex p-3 flex-column justify-content-start align-items-start">
                    <h5> Ola S1X</h5>
                    <p className={styles.cardContentP}>
                      {" "}
                      85 Kmph | 95 Km | 101 kg | 5 Hrs
                    </p>
                    <h5> ₹ 90,802 </h5>
                    <p className={styles.cardContentP}> On road price, Delhi</p>
                    <Button> View more </Button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.swiperSlide}>
                <div className="card w-100">
                  <div className="image-section">
                    <Image
                      src="/electricscooter/ola/ola-s1-x-plus.png"
                      alt=""
                      height={400}
                      width={400}
                    ></Image>
                  </div>
                  <div className="card-content d-flex p-3 flex-column justify-content-start align-items-start">
                    <h5> Ola S1X Plus</h5>
                    <p className={styles.cardContentP}>
                      {" "}
                      90 Kmph | 151 Km | 101 kg | 5 Hrs
                    </p>
                    <h5> ₹ 96,616 </h5>
                    <p className={styles.cardContentP}> On road price, Delhi</p>
                    <Button> View more </Button>
                  </div>
                </div>
              </SwiperSlide>
            </Container>
            <div className={`${styles.swiperNavBtn} swiper-button-next`}></div>
            <div className={`${styles.swiperNavBtn} swiper-button-prev`}></div>
          </Swiper>
        </div>
      </Col>
    </Row>
  );
}
