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
      <div className="p-5 mt-2">
        <Featured imageURL="/electricscooter/ather/ather450s.png" />
      </div>
      <div>
        {vehicleData && <SpecificationTable data={vehicleData as any} />}
      </div>

      <div className="p-5 mt-2">
        <RelatedVehicle></RelatedVehicle>
      </div>
      
      <VehiclePrice></VehiclePrice>

      <div className="p-5 mt-2">
        <FAQS></FAQS>
      </div>
    </div>
  );
};

export default withLayout(Ather450S);
