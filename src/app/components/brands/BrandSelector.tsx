"use client";
import Image from "next/image";
import { Row, Container, Col } from "react-bootstrap";
import styles from "./brandselector.module.css";
import { useRouter } from "next/navigation";

const brandLogos = [
  {
    name: "Ather",
    logo: "/brands/Ather.png",
    to: "/ather/scooters",
  },
  {
    name: "Ola",
    logo: "/brands/Ola.png",
    to: "/ola/scooters",
  },
  {
    name: "Ampere",
    logo: "/brands/Ampere.png",
    to: "/ampere/scooters",
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
    <div>
      <Row className="p-5">
        <div>
          <h3> Browse EVs by brand </h3>
        </div>
        <Col>
          <div className={styles.imageContainer}>
            <Image
              src={"/brands/TVS.png"}
              alt="image"
              layout="responsive"
              width={100}
              height={100}
            />
          </div>
        </Col>
        <Col>
          <div className={styles.imageContainer} onClick={() => handleImageClick('/ather/scooters')}>
            <Image
              src={"/brands/Ather.png"}
              alt="image"
              layout="responsive"
              width={100}
              height={100}
            />
          </div>
        </Col>
        <Col>
          <div className={styles.imageContainer} onClick={() => handleImageClick('/ola/scooters')}>
            <Image
              src={"/brands/Ola.png"}
              alt="image"
              layout="responsive"
              width={100}
              height={100}
            />
          </div>
        </Col>
        <Col>
          <div className={styles.imageContainer}>
            <Image
              src={"/brands/Gogoro.png"}
              alt="image"
              layout="responsive"
              width={100}
              height={100}
            />
          </div>
        </Col>
        <Col>
          <div className={styles.imageContainer}>
            <Image
              src={"/brands/Bajaj.png"}
              alt="image"
              layout="responsive"
              width={100}
              height={100}
            />
          </div>
        </Col>
      </Row>

      <Row className="p-5">
        <Col>
          <div className={styles.imageContainer}>
            <Image
              src={"/brands/HeroElectric.png"}
              alt="image"
              layout="responsive"
              width={100}
              height={100}
            />
          </div>
        </Col>
        <Col>
          <div className={styles.imageContainer}>
            <Image
              src={"/brands/Okaya.png"}
              alt="image"
              layout="responsive"
              width={100}
              height={100}
            />
          </div>
        </Col>
        <Col>
          <div className={styles.imageContainer}>
            <Image
              src={"/brands/OkinawaLogo.png"}
              alt="image"
              layout="responsive"
              width={100}
              height={100}
            />
          </div>
        </Col>
        <Col>
          <div className={styles.imageContainer}>
            <Image
              src={"/brands/Vida.png"}
              alt="image"
              layout="responsive"
              width={100}
              height={100}
            />
          </div>
        </Col>
        <Col>
          <div className={styles.imageContainer}>
            <Image
              src={"/brands/JoyeBike.jpeg"}
              alt="image"
              layout="responsive"
              width={100}
              height={100}
            />
          </div>
        </Col>
      </Row>
    </div>
    // <Container>
    //   <Row>
    //     <div>
    //       <h2> Choose Brand </h2>
    //     </div>
    //     {brandLogos.map((brand, index) => (
    //       <Col key={index}>
    //         <div className={styles.imageContainer} onClick={() => handleImageClick(brand.to)}>
    //           <Image src={brand.logo} alt="image" layout="responsive" width={100} height={100}/>
    //         </div>
    //       </Col>
    //     ))}
    //   </Row>
    // </Container>
  );
};

export default BrandSelector;
