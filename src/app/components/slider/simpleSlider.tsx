"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./simpleslider.module.css";
import { Button, Card, CardBody, CardImg, CardText, CardTitle } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft, faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

function NextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div className={styles.sliderarrow}>
      <Button className={styles.arrowbtnnext} onClick = {onClick}>
        <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
      </Button>
    </div>
  );
}

function PrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div className={styles.sliderarrow}>
      <Button className={styles.arrowbtnprev} onClick = {onClick}>
        <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
      </Button>
    </div>
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
            <Card style={{ width: "13rem", padding: "15px" }} className="mt-5">
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
