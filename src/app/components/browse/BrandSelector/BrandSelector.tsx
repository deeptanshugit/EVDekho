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
import FeaturedBikeNavigation from "../../tabs/FeaturedBikeNavigationTab/FeaturedBikeNavigation";
import { useState } from "react";

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

const brandTabs = [
  { name: "BRAND", href: "vehicleBrand" },
  { name: "BUDGET", href: "vehicleBudget" },
  { name: "DISPLACEMENT", href: "vehicleDisplacement" },
  { name: "BODY STYLE", href: "vehicleStyle" },
];

const BrandSelector = () => {
  const router = useRouter();

  const handleImageClick = (to: any) => {
    router.push(to);
  };

  const [activeTab, setActiveTab] = useState<string>("vehicleBrand");

  const handleSelectTab = (key: string) => {
    setActiveTab(key);
  };
  return (
    <div>
      <h3> Browse EVs by </h3>
      <div className="mb-2">
        <FeaturedBikeNavigation
          tabs={brandTabs}
          activeTab={activeTab}
          onSelectTab={handleSelectTab}
        />
      </div>
      <div className="pt-2 mb-5">
        {activeTab === "vehicleBrand" && (
          <div>
            <Container>
              <Row>
                <Col lg={3} md={3} sm={2} xs={2} className={styles.imageContainer}>
                  <div>
                    <Image
                      src={"/brands/TVS.png"}
                      alt="image"
                      layout="responsive"
                      width={100}
                      height={100}
                    />
                  </div>
                </Col>
                <Col  lg={3} md={3} sm={2} xs={2} className={styles.imageContainer}>
                  <div>
                    <Image
                      src={"/brands/Ather.png"}
                      alt="image"
                      layout="responsive"
                      width={100}
                      height={100}
                    />
                  </div>
                </Col>
                <Col lg={3} md={3} sm={2} xs={2}  className={styles.imageContainer}>
                  <div >
                    <Image
                      src={"/brands/Ola.png"}
                      alt="image"
                      layout="responsive"
                      width={100}
                      height={100}
                    />
                  </div>
                </Col>
                <Col lg={3} md={3} sm={2} xs={2}  className={styles.imageContainer}>
                  <div>
                    <Image
                      src={"/brands/Gogoro.png"}
                      alt="image"
                      layout="responsive"
                      width={100}
                      height={100}
                    />
                  </div>
                </Col>
                <Col lg={3} md={3} sm={2} xs={2}  className={styles.imageContainer}>
                  <div>
                    <Image
                      src={"/brands/Bajaj.png"}
                      alt="image"
                      layout="responsive"
                      width={100}
                      height={100}
                    />
                  </div>
                </Col>
                <Col lg={3} md={3} sm={2} xs={2} className={styles.imageContainer}>
                  <div>
                    <Image
                      src={"/brands/HeroElectric.png"}
                      alt="image"
                      layout="responsive"
                      width={100}
                      height={100}
                    />
                  </div>
                </Col>
                <Col lg={3} md={3} sm={2} xs={2} className={styles.imageContainer}>
                  <div>
                    <Image
                      src={"/brands/Okaya.png"}
                      alt="image"
                      layout="responsive"
                      width={100}
                      height={100}
                    />
                  </div>
                </Col>
                <Col lg={3} md={3} sm={2} xs={2} className={styles.imageContainer}>
                  <div>
                    <Image
                      src={"/brands/OkinawaLogo.png"}
                      alt="image"
                      layout="responsive"
                      width={100}
                      height={100}
                    />
                  </div>
                </Col>
                <Col lg={3} md={3} sm={2} xs={2} className={styles.imageContainer}>
                  <div >
                    <Image
                      src={"/brands/Vida.png"}
                      alt="image"
                      layout="responsive"
                      width={100}
                      height={100}
                    />
                  </div>
                </Col>
                <Col lg={3} md={3} sm={2} xs={2} className={styles.imageContainer}>
                  <div>
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
          </div>
        )}
        {activeTab === "vehicleBudget" && <div>budget</div>}
        {activeTab === "vehicleDisplacement" && <div>displacement</div>}
        {activeTab === "vehicleStyle" && <div>style</div>}
      </div>
    </div>
  );
};

export default BrandSelector;
