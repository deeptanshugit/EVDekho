/* eslint-disable @next/next/no-html-link-for-pages */
"use client";
import { useState } from "react";
import styles from "./navbar.module.css";
import {
  Button,
  Container,
  Form,
  FormControl,
  InputGroup,
  Nav,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot";
import VehicleSearch from "../search/vehicle/VehicleSearch";

export default function NavigationBar() {
  // adding the states
  const [isActive, setIsActive] = useState(false);
  //add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };
  //clean up function to remove the active class
  const removeActive = () => {
    setIsActive(false);
  };
  return (
    <Navbar sticky="top" expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <NavbarBrand href="/"> EVDekho </NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse className="justify-content-end">
          <div className="d-flex">
            <div>
              {/* <Nav>
                <NavLink href="/electricscooter/ather450s">Ather 450s</NavLink>
              </Nav> */}
            </div>
            <div>
              <Form className="d-flex">
                <div className="p-2">
                <VehicleSearch></VehicleSearch>
                </div>
                {/* <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                */}
                <div className="p-2">
                <Button
                  className={styles.locationButton}
                  variant="outine-secondary"
                >
                  <FontAwesomeIcon icon={faLocationDot} />
                </Button> 
                </div>
              </Form>
            </div>
          </div>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
}
