'use client'
import Image from "next/image";
import { Row, Container, Col } from "react-bootstrap";
import styles from "./brandselector.module.css";
import { useRouter } from "next/navigation";

const brandLogos = [
  {
    name: "Ather",
    logo: "/brands/Ather.png",
    to: "/ather/scooters"
  },
  {
    name: "Ola",
    logo: "/brands/Ola.png",
    to: "/ola/scooters",
  },
];

// const brandLogos2 = [
//   {
//     name: "Ampere",
//     logo: "/brands/Ampere.png",
//     to: "/ampere/scooters"
//   },
//   {
//     name: "Bajaj",
//     logo: "/brands/Bajaj.png",
//     to: "/bajaj/scooters"
//   },
//   {
//     name: "TVS",
//     logo: "/brands/TVS.png",
//     to: "/tvs/scooters"
//   },
// ];

const BrandSelector = () => {
  const router = useRouter();

  const handleImageClick = (to: any) => {
    router.push(to);
  };
  return (
    <Container>
      <Row>
        <div>
          <h2> Choose Brand </h2>
        </div>
        {brandLogos.map((brand, index) => (
          <Col key={index}>
            <div className={styles.imageContainer} onClick={() => handleImageClick(brand.to)}>
              <Image src={brand.logo} alt="image" height={100} width={280} />
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BrandSelector;
