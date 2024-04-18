import { Card, CardBody, CardImg, CardText, CardTitle } from "react-bootstrap";
import Slider from 'react-slick'


export default function PriceCard() {
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      {prices.map((p) => (
        <Card key={p.city} style={{ width: "200px" }} className="mt-5">
          <CardImg src={p.image}></CardImg>
          <CardBody>
            <CardTitle>{p.city}</CardTitle>
            <CardText>₹{p.price}</CardText>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}
