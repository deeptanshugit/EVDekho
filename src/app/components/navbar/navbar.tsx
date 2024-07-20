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
import { useSelector } from "react-redux";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

export default function NavigationBar() {
  const router= useRouter()
  const user = useSelector((state: any) => state.auth.user);

  return (
    <Navbar sticky="top" expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <NavbarBrand href="/">
          {" "}
          <img
            src="/Ev_Dekho__1_-removebg-preview.png"
            className={styles.logo}
          />{" "}
        </NavbarBrand>
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
                <div className="p-2">
                  <Button
                    className={styles.locationButton}
                    variant="outine-secondary"
                  >
                    <FontAwesomeIcon icon={faLocationDot} />
                  </Button>
                </div>
                <div className="p-2">
                  <Button className={styles.userProfileButton} variant="outline-secondary" onClick={() => {router.push('/login/login')}}>
                  <FontAwesomeIcon icon={faUser} />
                  { user && user?.name ? user?.name : 'Login'}
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
