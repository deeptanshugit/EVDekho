import { Col, Nav, NavItem, NavLink, Row, TabContainer } from "react-bootstrap";
import styles from './vehiclenavigationtab.module.css'

export default function VehicleNavigationTab() {
  return (
    <TabContainer>
      <Row>
        <Col>
          <Nav fill variant="underline" className={styles.nav}>
            <NavItem className={styles.navItem}>
              <NavLink className={styles.navLink} href="#vehicleOverview"> Overview </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={styles.navLink} href="#vehicleSpecificationTable"> Specifications </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={styles.navLink} href="#relatedVehicle"> Similar Scooters </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={styles.navLink} href="#vehiclePrice"> Price </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={styles.navLink} href="#vehicleCostCalculator"> Running Cost Calculator </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={styles.navLink} href="#vehicleFAQ"> FAQs </NavLink>
            </NavItem>
          </Nav>
        </Col>
      </Row>
    </TabContainer>
  );
}
