import styles from "./ather450s.module.css";
import Featured from "@/app/components/featured/featured";
import SpecificationTable from "@/app/components/specifications/specificationTable";
import Related from "@/app/components/cards/related";
import FAQS from "@/app/components/faqs/faqs";
import SimpleSlider from "@/app/components/slider/simpleSlider";
import { useEffect, useState } from "react";
import Navbar from "@/app/components/navbar/navbar";
import withLayout from "@/app/components/WithLayout";

import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Ather450S = () => {
  const [vehicleData, setVehicleData] = useState([]);

  useEffect(() => {
    // Fetch vehicle data from your backend API
    fetch('https://evdekho-backend-7f6f8ecf5616.herokuapp.com/api/v1/vehicles/65f334a762b0a534ff44324a')
      .then(response => {
        return response.json();
      })
      .then(data => {
        setVehicleData(data);
      })
      .catch(error => console.error('Error fetching vehicle data:', error));
  }, []);

  return (
    <main className={styles.main}>

      <div className={styles.center}>
        <Featured imageURL="/electricscooter/ather/ather450s.png" />
      </div>

      <div className={styles.left}>
        {vehicleData && <SpecificationTable data={vehicleData as any} />}
      </div>

      <div className="row align-self-start">
        <div className="col-lg-6 col-sm-12 col-md-6 ">
        <Related></Related>
        </div>

        <div className="col-lg-6 col-sm-12 col-md-6">
        <Related></Related>
        </div>
      </div>

      <div className="mt-5">
        <FAQS></FAQS>
      </div>

      <div className={styles.left}>
        <SimpleSlider></SimpleSlider>
      </div>
      
    </main>
  );
}

export default withLayout(Ather450S);