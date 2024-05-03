"use client";
import Image from "next/image";
import {
  Row,
  Container,
  Col,
  TabContainer,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from "react-bootstrap";
import styles from "./brandselector.module.css";
import { useRouter } from "next/navigation";
import BudgetSelector from "../BudgetSelector/BudgetSelector";
import RangeSelector from "../RangeSelector/RangeSelector";

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

const BrandSelector = () => {
  const router = useRouter();

  const handleImageClick = (to: any) => {
    router.push(to);
  };
  return (
    <TabContainer id="browse-evs" defaultActiveKey="brands">
      <Row className="p-5">
        <div>
          <h3> Browse EVs by </h3>
        </div>
        <Nav variant="tabs">
          <NavItem>
            <NavLink eventKey="brands"> Brands </NavLink>
          </NavItem>
          <NavItem>
            <NavLink eventKey="budget"> Budget </NavLink>
          </NavItem>
          <NavItem>
            <NavLink eventKey="range"> Range </NavLink>
          </NavItem>
        </Nav>
        <TabContent>
          <TabPane eventKey="brands">
            <Container>
              <Row>
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
                  <div className={styles.imageContainer}>
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
                  <div className={styles.imageContainer}>
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
            </Container>
          </TabPane>
          <TabPane eventKey="budget">
            <BudgetSelector></BudgetSelector>
          </TabPane>
          <TabPane eventKey="range">
            <RangeSelector></RangeSelector>
          </TabPane>
        </TabContent>
      </Row>
    </TabContainer>
  );
};

export default BrandSelector;
