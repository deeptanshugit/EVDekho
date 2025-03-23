"use client";
import React, { useState } from "react";
import {
  Container,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContainer,
  TabContent,
  TabPane,
} from "react-bootstrap";
import FeaturedBikeNavigation from "../../tabs/FeaturedBikeNavigationTab/FeaturedBikeNavigation";
import TredningBikeGallery from "../../carousel/TredningBike/TredningBikeGallery";
const vehicleTabs = [
  { name: "TRENDING", href: "vehicleTrending" },
  { name: "POPULAR", href: "vehiclePopular" },
  { name: "ELECTRIC", href: "vehicleElectric" },
  { name: "UPCOMING", href: "vehicleUpcoming" },
];

function Featurebike() {
  const [activeTab, setActiveTab] = useState<string>("vehicleTrending");

  const handleSelectTab = (key: string) => {
    setActiveTab(key);

  };
  return (
    <div>
      <h3> Featured Bikes </h3>
      <div className="mb-2">
        <FeaturedBikeNavigation
          tabs={vehicleTabs}
          activeTab={activeTab}
          onSelectTab={(key) => handleSelectTab(key as string)}
        />
      </div>
      <div className="pt-2 mb-5">
        {activeTab === "vehicleTrending" && (
          <div>
            <Container>
              <TredningBikeGallery />
            </Container>
          </div>
        )}
        {activeTab === "vehiclePopular" && (
          <div>
            <Container>
              <TredningBikeGallery />
            </Container>
          </div>
        )}
        {activeTab === "vehicleElectric" && (
          <div>These are electric vehicle.</div>
        )}
        {activeTab === "vehicleUpcoming" && (
          <div>These are lsiting of upcoming vehicle.</div>
        )}
      </div>
    </div>
  );
}

export default Featurebike;
