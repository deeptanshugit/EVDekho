import styles from "./ather450s.module.css";
import Featured from "@/app/components/featured/featured";
import SpecificationTable from "@/app/components/specifications/specificationTable";
import FAQS from "@/app/components/faqs/faqs";
import { useEffect, useState } from "react";
import withLayout from "@/app/components/WithLayout";

import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RelatedVehicle from "@/app/components/carousel/RelatedVehicle/RelatedVehicle";
import VehiclePrice from "@/app/components/carousel/VehiclePrice/vehicleprice";
import { Col, Row } from "react-bootstrap";
import VehicleName from "@/app/components/vehiclename/VehicleName";
import CostCalculator from "@/app/components/costcalculator/CostCalculator";
import TrendingVehicle from "@/app/components/carousel/TrendingVehicle/TrendingVehicle";

const Ather450S = () => {
  const [vehicleData, setVehicleData] = useState([]);

  useEffect(() => {
    // Fetch vehicle data from your backend API
    fetch(
      "https://evdekho-backend-7f6f8ecf5616.herokuapp.com/api/v1/vehicles/6616255497bf58c85bf40d8b"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setVehicleData(data);
      })
      .catch((error) => console.error("Error fetching vehicle data:", error));
  }, []);

  return (
    <div>
      <div className="p-5 mt-0">
        <VehicleName name="Ather 450s"></VehicleName>
      </div>

      <div className="p-5 mt-0">
        <Featured imageURL="/electricscooter/ather/ather450s.png" />
      </div>

      <div className="p-5">
        {vehicleData && <SpecificationTable data={vehicleData as any} />}
      </div>

      <div className="p-5 mt-2">
        <RelatedVehicle></RelatedVehicle>
      </div>

      <div className="p-5 mt-2">
        <VehiclePrice></VehiclePrice>
      </div>

      <div className="p-5 mt-2">
        <CostCalculator battery_capacity_kwh={2.9} range_km={100} vehicleName={"Ather 450S"}></CostCalculator>
      </div>

      <div className="p-5 mt-2">
        <FAQS></FAQS>
      </div>
    </div>
  );
};

export default withLayout(Ather450S);
