import Carousel from "react-bootstrap/Carousel";
import  CarouselItem from "react-bootstrap/CarouselItem";
import Image from "next/image";
import Related from "../cards/related";

export default function CarouselImages() {
  return (
    <Carousel>
        <CarouselItem>
          <Related />
        </CarouselItem>
        <CarouselItem>
           <Related />
        </CarouselItem>
    </Carousel>
  );
}
