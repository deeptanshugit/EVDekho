/* eslint-disable @next/next/no-html-link-for-pages */
"use client";
import { useState } from "react";
import styles from "./navbar.module.css";
import {
  Button,
  Container,
  Form,
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
import ButtonGroup from "@mui/material/ButtonGroup";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import React from "react";

export default function NavigationBar() {
  const router = useRouter();
  const user = useSelector((state: any) => state.auth.user);
  const anchorRef = React.useRef<HTMLDivElement>(null);
  const [open, setOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const options = ['Logout'];

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

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
                  <Button
                    className={styles.userProfileButton}
                    variant="outline-secondary"
                    onClick={() => {
                      router.push("/login/login");
                    }}
                  >
                    <FontAwesomeIcon icon={faUser} />
                    {user && user?.name ? user?.name : "Login"}
                  </Button>

                  <ButtonGroup variant="contained" ref={anchorRef}>
                    <Button>
                      {options[selectedIndex]}
                    </Button>
                    <Button
                      size="sm"
                      aria-controls={open ? "split-button-menu" : undefined}
                      aria-expanded={open ? "true" : undefined}
                      aria-label="select merge strategy"
                      aria-haspopup="menu"
                      onClick={handleToggle}
                    >
                      <ArrowDropDownIcon />
                    </Button>
                  </ButtonGroup>
                </div>
              </Form>
            </div>
          </div>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
}
