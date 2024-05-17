import Image from "next/image";
import styles from "./vehicleprice.module.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Col, Row } from "react-bootstrap";

const prices = [
  {
    city: "Mumbai",
    image: "/cities/mumbai.png",
    price: "₹ 1,25,095",
  },
  {
    city: "Bangalore",
    image: "/cities/bangalore.png",
    price: "₹ 1,33,766",
  },
  {
    city: "Delhi",
    image: "/cities/delhi.png",
    price: "₹ 1,25,211",
  },
  {
    city: "Pune",
    image: "/cities/pune.png",
    price: "₹ 1,25,854",
  },
  {
    city: "Hyderabad",
    image: "/cities/hyderabad.png",
    price: "₹ 1,33,534",
  },
  {
    city: "Chennai",
    image: "/cities/chennai.png",
    price: "₹ 1,33,306",
  },
  {
    city: "Kolkata",
    image: "/cities/kolkata.png",
    price: "₹ 1,30,995",
  },
];

interface pricesProps {
  pricesInTopCities: []
}

export default function VehiclePrice(props: pricesProps) {
  return (
    <Row>
      <Col>
        <div>
          <h4> Prices in India </h4>
        </div>
        <div>
          <Swiper
            slidesPerView={6}
            spaceBetween={10}
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
                slidesPerView: 1,
                spaceBetween: 0,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 0,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 10,
              },
            }}
          >
            {props.pricesInTopCities.map((price: any, index) => (
              <SwiperSlide key={index} className={styles.swiperSlide}>
                <div className="card">
                  <div className={styles.cardImageContainer}>
                    <Image
                      src={price.imagePath}
                      alt=""
                      height={400}
                      width={400}
                    ></Image>
                  </div>
                  <div className="card-content d-flex p-3 flex-column justify-content-start align-items-start">
                    <h5> {price.cityName}</h5>
                    <p className={styles.cardContentP}>{price.formattedPrice}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className={`${styles.swiperNavBtn} swiper-button-next`}></div>
            <div className={`${styles.swiperNavBtn} swiper-button-prev`}></div>
          </Swiper>
        </div>
      </Col>
    </Row>
  );
}
