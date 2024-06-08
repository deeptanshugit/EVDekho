import React from "react";
import { ThemeColor } from "../theme/color";
import styles from "./footer.module.css";
import { Divider, Grid, Typography } from "@mui/material";
import { fontSize } from "../theme/fontsize";
import { ClassNames } from "@emotion/react";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import AppleIcon from "@mui/icons-material/Apple";
import AndroidIcon from "@mui/icons-material/Android";
import { Container } from "react-bootstrap";

function Footer() {
  return (
    <div style={{ background: ThemeColor.BLUE }} className={styles.footer}>
         <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            lg={12}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <img
              src="/Ev_Dekho__1_-removebg-preview.png"
              className={styles.footerLogo}
            />
          </Grid>
        </Grid>

        <Divider sx={{ background: ThemeColor.WhHITESMOKE }} className="my-4" />

        <div className="d-flex justify-content-center px-5 w-100">
          <Grid container spacing={2}>
            <Grid
              item
              xs={6}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Typography
                fontSize={fontSize.h3.medium}
                color={ThemeColor.WHITEOPACITY}
              >
                About Us
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Typography
                fontSize={fontSize.h3.medium}
                color={ThemeColor.WHITEOPACITY}
              >
                Contact Us
              </Typography>
            </Grid>
          </Grid>
        </div>

        <Divider sx={{ background: ThemeColor.WhHITESMOKE }} className="my-4" />

        <div className="row w-100">
          <div className="col">
            <div className="d-flex align-items-center justify-content-center">
              <div className="px-2">
                <FacebookIcon className={styles.footerIcon} />
              </div>
              <div className="px-2">
                <XIcon className={styles.footerIcon} />
              </div>
              <div className="px-2">
                <LinkedInIcon className={styles.footerIcon} />
              </div>
              <div className="px-2">
                <YouTubeIcon className={styles.footerIcon} />
              </div>
              <div className="px-2">
                <InstagramIcon className={styles.footerIcon} />
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Footer;
