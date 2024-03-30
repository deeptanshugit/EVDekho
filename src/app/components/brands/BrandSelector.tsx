import Image from "next/image";
import { Row, Container, Col } from "react-bootstrap";
import styles from './brandselector.module.css'

const brandLogos = [
  {
    name: "Ather",
    logo: "/brands/Ather.png",
  },
  {
    name: "Gogoro",
    logo: "/brands/Gogoro.png",
  },
  {
    name: "Ola",
    logo: "/brands/Ola.png",
  }
];

const brandLogos2 = [
    {
      name: "Ampere",
      logo: "/brands/Ampere.png",
    },
    {
      name: "Bajaj",
      logo: "/brands/Bajaj.png",
    },
    {
      name: "TVS",
      logo: "/brands/TVS.png",
    }
  ];

const BrandSelector = () => {
  return (
    <Container>
      <Row>
        {brandLogos.map((brand, index) => (
          <Col key={index}>
            <div className={styles.imageContainer}>
                <Image src={brand.logo} alt="image" height={100} width={280} />
            </div>
          </Col>
        ))}
      </Row>
      <Row>
        {brandLogos2.map((brand, index) => (
          <Col key={index}>
            <div className={styles.imageContainer}>
                <Image src={brand.logo} alt="image" height={100} width={280} />
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BrandSelector;
