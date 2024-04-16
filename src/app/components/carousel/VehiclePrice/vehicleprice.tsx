import Image from "next/image";
import styles from "./vehicleprice.module.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

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

export default function VehiclePrice() {
  return (
    <div className="container">
      <div>
        <h4> Prices in India </h4>
      </div>
      <div>
        <Swiper
          slidesPerView={5}
          spaceBetween={0}
          pagination={{
            clickable: true,
          }}
          modules={[ Navigation]}
          className="mySwiper"
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        >
          {prices.map((price, index) => (
            <SwiperSlide key={index} className={styles.swiperSlide}>
              <div className={styles.cardContainer}>
                <div className="card">
                  <div className={styles.cardImageContainer}>
                    <Image
                      src={price.image}
                      alt=""
                      height={200}
                      width={200}
                    ></Image>
                  </div>
                  <div className="card-content d-flex p-3 flex-column justify-content-start align-items-start">
                    <h5> {price.city}</h5>
                    <p className={styles.cardContentP}>{price.price}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className={`${styles.swiperNavBtn} swiper-button-next`}></div>
          <div className={`${styles.swiperNavBtn} swiper-button-prev`}></div>
        </Swiper>
      </div>
    </div>
  );
}
