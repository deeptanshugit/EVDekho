"use client"

import { fontSize } from "@/app/components/theme/fontsize";
import { Box, Container, Tab, Tabs, Typography } from "@mui/material";
import styles from "./gallery.module.css";
import { useState } from "react";
import withLayout from "@/app/components/WithLayout";
import { fontWeight } from "@/app/components/theme/fontWeight";
import { ThemeColor } from "@/app/components/theme/color";
import { inter } from "@/app/components/theme/fontfamily";
import ProductGallery from "@/app/components/carousel/ProductGallery/ProductGallery";
import GalleryImg from "@/app/components/imagelist/Gallery/GalleryImg";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Gallery = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Container className={styles.main}>
      <Typography fontSize={fontSize.h2.medium}>
        OLA S1 Air Rear Wheel Image
      </Typography>
      <Typography
        fontSize={fontSize.h3.small}
        fontWeight={fontWeight.W400}
        component="span"
      >
        Image provided below highlights the Rear Wheel of OLA S1 Air.Watch 136
        OLA S1 Air images to know how S1 Air really looks. Checkout S1 Air
        pictures in different angles and in great details. Also, checkout 6 OLA
        S1 Air colour images. You can also download your favourite OLA S1 Air
        pictures.
      </Typography>

      <Box sx={{ borderBottom: 1, borderColor: "divider", pt: 4 }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{
            "& .MuiTabs-indicator": {
              backgroundColor: ThemeColor.GREEN, // Change the color of the indicator
              height: "4px", // Increase the thickness of the bottom border
              color: ThemeColor.GREEN,
            },
            "& .MuiTab-root": {
              minWidth: "auto", // Optional: Adjust tab width
              fontWeight: fontWeight.W600,
              textAlign: "left",
              p: 2,

              "&.Mui-selected": {
                color: ThemeColor.GREEN, // Change color of selected tab text
                fontFamily: inter,
              },
            },
          }}
        >
          <Tab label="ALL IMAGES" {...a11yProps(0)} />
          <Tab label="COLOURS" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div>
          <ProductGallery />
        </div>
        <div className="mt-5">
          <GalleryImg />
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        colors
      </CustomTabPanel>
    </Container>
  );
}

export default withLayout(Gallery);
