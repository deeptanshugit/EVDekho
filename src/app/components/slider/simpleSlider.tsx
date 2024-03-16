"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./simpleslider.module.css";
import { Card, CardBody, CardImg, CardText, CardTitle } from "react-bootstrap";

function NextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

export default function SimpleSlider() {
  const prices = [
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
      city: "Chennai",
      image: "/chennai.png",
      price: "1,19,524",
    },
  ];
  var settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
  return (
    <div className={styles.container}>
      <h3> Ather 450X Prices In India </h3>
      <Slider {...settings}>
        {prices.map((price, index) => (
          <div key={index}>
            <Card style={{ width: "18rem" }} className="mt-5">
              <CardImg src={price.image}></CardImg>
              <CardBody>
                <CardTitle>{price.city}</CardTitle>
                <CardText>₹{price.price}</CardText>
              </CardBody>
            </Card>
          </div>
        ))}
      </Slider>
    </div>
  );
}
