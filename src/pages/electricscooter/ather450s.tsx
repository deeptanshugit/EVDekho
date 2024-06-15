import { useEffect, useState } from "react";
import Featured from "@/app/components/featured/featured";
import SpecificationTable from "@/app/components/specifications/specificationTable";
import FAQS from "@/app/components/faqs/faqs";
import withLayout from "@/app/components/WithLayout";
import RelatedVehicle from "@/app/components/carousel/RelatedVehicle/RelatedVehicle";
import VehiclePrice from "@/app/components/carousel/VehiclePrice/vehicleprice";
import VehicleName from "@/app/components/vehiclename/VehicleName";
import CostCalculator from "@/app/components/costcalculator/CostCalculator";
import styles from "./ather450s.module.css";

// import "bootstrap/dist/css/bootstrap.min.css";
import VehicleNavigationTab from "@/app/components/tabs/VehicleNavigationTab/VehicleNavigationTab";
import KeySpecs from "@/app/components/specifications/keySpecifications/KeySpecs";
import { useCallback } from "react";

const Ather450S = () => {
  const [vehicleData, setVehicleData] = useState([]);
  const [prices, setPrices] = useState({} as any);
  const [defaultVariantId, setDefaultVariantId] = useState(null);
  const [pricesInTopCities, setpricesInTopCities] = useState({} as any);
  const [keySpecs, setKeySpecs] = useState({} as any);
  const [vehcleVariants, setVehicleVariants] = useState(null);

  const fetchSpecifications = useCallback(async (variantId: any) => {
    await fetch(
      `https://evdekho-backend-7f6f8ecf5616.herokuapp.com/api/v1/specifications/search/vehicle?variantId=${variantId}&vehicleId=66387bb104fa76d91a3b868d`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setVehicleData(data.specifications);
        setPrices(data.prices);
        setpricesInTopCities(data.prices.pricesInTopCities);
        setKeySpecs(data.specifications.keySpecifications);
      });
  }, []);

  const fetchDefaultVariantId = useCallback(async () => {
    try {
      const response = await fetch(
        `https://evdekho-backend-7f6f8ecf5616.herokuapp.com/api/v1/variants/search/vehicle?vehicleId=66387bb104fa76d91a3b868d`
      );
      const data = await response.json();
      if (data) {
        // setVehicleVariants(data)
        // console.log(vehcleVariants, 'variants');
        const defaultVariant = data.find(
          (variant: { isDefault: boolean }) => variant.isDefault === true
        );

        if (defaultVariant) {
          fetchSpecifications(defaultVariant._id);
        }

        setVehicleVariants(data)
      }
    } catch (error) {
      console.error("Error fetching variants:", error);
    }
  }, [fetchSpecifications]);

  useEffect(() => {
    fetchDefaultVariantId();
  }, [fetchDefaultVariantId]);

  return (
    <div className={styles.bodyContainer}>
      <div className="p-1 mt-2">
        <VehicleName name="Ather 450s"></VehicleName>
      </div>

      <div className="p-1 mt-2" id="vehicleOverview">
        <div className="mb-2">
          <VehicleNavigationTab />
        </div>
        <div>
          <Featured
            imageURL="/electricscooter/ather/ather450s.png"
            prices={(prices as any) || {}}
          />
        </div>
      </div>

      <div className="p-1 mt-5">
        <KeySpecs keySpecs={keySpecs}></KeySpecs>
      </div>

      <div className="p-1 mt-5" id="vehicleSpecificationTable">
        {vehicleData && <SpecificationTable data={vehicleData as any} />}
      </div>

      <div className="p-1 mt-5" id="relatedVehicle">
        <RelatedVehicle></RelatedVehicle>
      </div>

      <div className="p-1 mt-5" id="vehiclePrice">
        {pricesInTopCities && pricesInTopCities.length > 0 && (
          <VehiclePrice pricesInTopCities={pricesInTopCities} />
        )}
      </div>

      <div className="p-1 mt-5" id="vehicleCostCalculator">
        <CostCalculator
          battery_capacity_kwh={2.9}
          range_km={100}
          vehicleName={"Ather 450S"}
        ></CostCalculator>
      </div>

      <div className="p-1 mt-5" id="vehicleFAQ">
        <FAQS></FAQS>
      </div>
    </div>
  );
};

export default withLayout(Ather450S);
