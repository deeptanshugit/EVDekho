"use client";
import { Col, Container, FormControl, InputGroup, Row } from "react-bootstrap";
import { useCallback, useEffect, useState } from "react";
import styles from "./costcalculator.module.css";

interface vehicleSpec {
  battery_capacity_kwh: any;
  range_km: any;
  vehicleName: String
}

export default function CostCalculator(props: vehicleSpec) {
  const [dailyKM, setDailyKM] = useState("");
  const [electricity_price, setElectricityPrice] = useState("")
  const [monthlyCost, setMonthlyCost] = useState(Number)

  const calculateRunningCost = useCallback(() => {
    if (dailyKM && electricity_price) {
      const energyConsumption = props.battery_capacity_kwh / props.range_km;
      const costPerDay = +dailyKM * +electricity_price * energyConsumption;
      // Assuming 30 days in a month for simplicity
      const costPerMonth = costPerDay * 30;
      setMonthlyCost(costPerMonth);
    } else {
      // Clear the cost if inputs are empty
      setMonthlyCost(0);
    }
  }, [dailyKM, electricity_price, props.battery_capacity_kwh, props.range_km]);

  const handleDailyKmChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDailyKM(e.target.value);
  };

  const handleElectricityPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setElectricityPrice(e.target.value)
  }

  useEffect(() => {
    if(dailyKM && electricity_price) {
        calculateRunningCost()
    }
  }, [dailyKM, electricity_price, props.battery_capacity_kwh, props.range_km, calculateRunningCost])

//   useEffect(() => {
//     if (dailyKM && electricity_price) {
//       const energyConsumption = props.battery_capacity_kwh / props.range_km;
//       const costPerDay = +dailyKM * +electricity_price * energyConsumption;
//       // Assuming 30 days in a month for simplicity
//       const costPerMonth = costPerDay * 30;
//       console.log(costPerMonth, 'costpermonth');
      
//       setMonthlyCost(costPerMonth as any);
//     } else {
//       // Clear the cost if inputs are empty
//       setMonthlyCost(0);
//     }
//   }, [dailyKM, electricity_price, props.battery_capacity_kwh, props.range_km]);

  return (
    <Row>
      <Col>
        <div className={styles.container}>
          <h4> Running Cost Calculator</h4>
          <p>We help you calculate fuel expenses which you will incur by using {props.vehicleName}. To check your monthly fuel expenses you just have to enter distance in kms you travel in a day and fuel price in your area.</p>
          <Row className="mt-4">
            <Col>
              <div className={styles.monthlyCost}>

                <p>Your average monthly cost for running {props.vehicleName} is  </p>
                <h4> ₹{monthlyCost.toFixed(2)}</h4><p>per month</p>
                </div>
            </Col>
          </Row>

          <Row className="mt-3">
            <Col sm={12} md={6} lg={6}>
              <div>
                <p> Enter KMs driven per day</p>
              </div>
              <InputGroup>
                <FormControl placeholder="KM driven/day" value={dailyKM} onChange={handleDailyKmChange}></FormControl>
              </InputGroup>
            </Col>

            <Col sm={12} md={6} lg={6}>
              <div>
                <p> Enter average per unit electricity price</p>
              </div>
              <InputGroup>
                <FormControl placeholder="per unit electricity price" value={electricity_price} onChange={handleElectricityPriceChange}></FormControl>
              </InputGroup>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  );
}
