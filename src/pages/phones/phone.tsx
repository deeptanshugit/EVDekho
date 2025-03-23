"use client";

import { fontSize } from "@/app/components/theme/fontsize";
import {
  Autocomplete,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import styles from "./phone.module.css";
import { useCallback, useEffect, useRef, useState } from "react";
import withLayout from "@/app/components/WithLayout";
import BasicDetailsAccordian from "@/app/components/accordian/basicDetailAccordian";
import BatteryChargingFullIcon from "@mui/icons-material/BatteryChargingFull";
import SdStorageIcon from "@mui/icons-material/SdStorage";
import TabForComparisonNavigation from "@/app/components/tabs/TabForComparisonSection/tabForComparison";
import CustomizedAccordions from "@/app/components/accordian/comprisonAccordian";

const vehicleTabs = [
  { name: "SPECIFICATIONS", href: "specification" },
  { name: "COLOURS", href: "colours" },
  { name: "IMAGES", href: "images" },
  { name: "HARDWARE", href: "hardware" },
  { name: "SOFTWARE", href: "software" },
  { name: "CONNECTIVITY", href: "connectivity" },
];

const Phone = () => {
  const [activeTab, setActiveTab] = useState<string>("vehicleTrending");
  const rowRefs = useRef<{ [key: string]: HTMLTableRowElement | null }>({});

  const [searchQuery, setSearchQuery] = useState("");

  const handleSelectTab = (key: string) => {
    setActiveTab(key);
    const targetElement = document.getElementById(key);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };
  const phoneSpecs = [
    {
      id: "General",
      title: "General",
      data: [
        {
          model: "Samsung",
          display: "6.70 inch",
          display1: "6.70 inch",
          display2: "6.70 inch",
          display3: "6.70 inch",
          display4: "6.70 inch",
          display5: "6.70 inch",
          display6: "6.70 inch",
          display7: "6.70 inch",
          display8: "6.70 inch",
          display9: "6.70 inch",
        },
        {
          model: "Oppo",
          display: "6.70 inch",
          display1: "6.70 inch",
          display2: "6.70 inch",
          display3: "6.70 inch",
          display4: "6.70 inch",
          display5: "6.70 inch",
          display6: "6.70 inch",
          display7: "6.70 inch",
          display8: "6.70 inch",
          display9: "6.70 inch",
        },
      ],
    },
    {
      id: "Display",
      title: "Display",
      data: [
        {
          model: "Samsung",
          oppodisplay: "6.70 inch",
          oppodisplay1: "6.70 inch",
          oppodisplay2: "6.70 inch",
          oppodisplay3: "6.70 inch",
          oppodisplay4: "6.70 inch",
          oppodisplay5: "6.70 inch",
          oppodisplay6: "6.70 inch",
          oppodisplay7: "6.70 inch",
          oppodisplay8: "6.70 inch",
          oppodisplay9: "6.70 inch",
        },
        {
          model: "Oppo",
          oppodisplay: "6.70 inch",
          oppodisplay1: "6.70 inch",
          oppodisplay2: "6.70 inch",
          oppodisplay3: "6.70 inch",
          oppodisplay4: "6.70 inch",
          oppodisplay5: "6.70 inch",
          oppodisplay6: "6.70 inch",
          oppodisplay7: "6.70 inch",
          oppodisplay8: "6.70 inch",
          oppodisplay9: "6.70 inch",
        },
      ],
    },
    {
      id: "Images",
      title: "Images",
      data: [
        {
          model: "Samsung",
          oppoImage: "6.70 inch",
          oppoImage1: "6.70 inch",
          oppoImage2: "6.70 inch",
          oppoImage3: "6.70 inch",
          oppoImage4: "6.70 inch",
          oppoImage5: "6.70 inch",
          oppoImage6: "6.70 inch",
          oppoImage7: "6.70 inch",
          oppoImage8: "6.70 inch",
          oppoImage9: "6.70 inch",
        },
        {
          model: "Oppo",
          oppoImage: "6.70 inch",
          oppoImage1: "6.70 inch",
          oppoImage2: "6.70 inch",
          oppoImage3: "6.70 inch",
          oppoImage4: "6.70 inch",
          oppoImage5: "6.70 inch",
          oppoImage6: "6.70 inch",
          oppoImage7: "6.70 inch",
          oppoImage8: "6.70 inch",
          oppoImage9: "6.70 inch",
        },
      ],
    },
    {
      id: "Colour",
      title: "Colours",
      data: [
        {
          model: "Samsung",
          oppoColour: "6.70 inch",
          oppoColour1: "6.70 inch",
          oppoColour2: "6.70 inch",
          oppoColour3: "6.70 inch",
          oppoColour4: "6.70 inch",
          oppoColour5: "6.70 inch",
          oppoColour6: "6.70 inch",
          oppoColour7: "6.70 inch",
          oppoColour8: "6.70 inch",
          oppoColour9: "6.70 inch",
        },
        {
          model: "Oppo",
          oppoColour: "6.70 inch",
          oppoColour1: "6.70 inch",
          oppoColour2: "6.70 inch",
          oppoColour3: "6.70 inch",
          oppoColour4: "6.70 inch",
          oppoColour5: "6.70 inch",
          oppoColour6: "6.70 inch",
          oppoColour7: "6.70 inch",
          oppoColour8: "6.70 inch",
          oppoColour9: "6.70 inch",
        },
      ],
    },
  ];
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const keySpecs1 = [
    {
      model: "Samsung",
      icon: <BatteryChargingFullIcon />,
      title: "Battery",
      value: "60 mah",
    },
    {
      model: "Samsung",
      icon: <SdStorageIcon />,
      title: "Storage",
      value: "60 mah",
    },
  ];

  const keySpecs2 = [
    {
      model: "oppo",
      icon: <BatteryChargingFullIcon />,
      title: "Battery",
      value: "60 mah",
    },
    {
      model: "oppo",
      icon: <SdStorageIcon />,
      title: "Storage",
      value: "60 mah",
    },
  ];

  const mergedKeys = Array.from(
    new Set(
      phoneSpecs.flatMap((spec) =>
        spec.data.flatMap((item) => Object.keys(item))
      )
    )
  ).filter((key) => key !== "model");

  return (
    <Container className={styles.main}>
      <Typography fontSize={fontSize.h2.medium}>
        Samsung Galaxy S24 FE vs Oppo A3X 5G
      </Typography>

      <BasicDetailsAccordian
        description={`Compare Wale brings you comparison of Samsung Galaxy S24 and Oppo A3X 5G. The
        on-road price of Samsung Galaxy S24 FE is ₹ 1,95,796 and Oppo A3X 5G is ₹
        1,98,324. Samsung Galaxy S24 FE is available in 0 colour and 1 variant and Yamaha
        MT 15 V2 is available in 2 colours and 3 variants. Apart from prices,
        you can also find comparison of these bikes based on displacement,
        mileage, performance, and many more parameters. Comparison between these
        bikes have been carried out to help users make correct buying decision
        between Samsung Galaxy S24 FE and Oppo A3X 5G.Apart from prices,
        you can also find comparison of these bikes based on displacement,
        mileage, performance, and many more parameters. Comparison between these
        bikes have been carried out to help users make correct buying decision
        between Samsung Galaxy S24 FE and Oppo A3X 5G.`}
        keySpecs1={keySpecs1}
        keySpecs2={keySpecs2}
      ></BasicDetailsAccordian>

      <div className="mb-5">
        <Grid container spacing={2} className="mt-3">
          <Grid item lg={9} xs={6}>
            <TabForComparisonNavigation
              onSearch={handleSearch}
              tabs={vehicleTabs}
              activeTab={activeTab}
              onSelectTab={(key) => handleSelectTab(key as string)}
            />
          </Grid>
          <Grid item lg={3} xs={6}>
            <div className="d-flex justify-content-end align-items-center mt-4 w-100">
              <Autocomplete
                fullWidth
                id="autocomplete"
                options={mergedKeys}
                getOptionLabel={(option) => option}
                selectOnFocus
                clearOnBlur
                handleHomeEndKeys
                sx={{ width: 300 }}
                onChange={(event, value) => value && handleSearch(value)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Search input"
                    SelectProps={{
                      input: {
                        ...params.InputProps,
                        type: "search",
                      },
                    }}
                  />
                )}
              />
            </div>
          </Grid>
        </Grid>
      </div>

      <div id="specification">
        <CustomizedAccordions
          phoneSpecs={phoneSpecs?.filter(
            (spec) => spec.id === "General" || spec.id === "Display"
          )}
          searchQuery={searchQuery}
          rowRefs={rowRefs}
          title="Specification"
        />
      </div>
      <div id="colours">
        <CustomizedAccordions
          phoneSpecs={phoneSpecs?.filter((spec) => spec.id === "Colour")}
          searchQuery={searchQuery}
          rowRefs={rowRefs}
          title="Colour"
        />
      </div>
      <div id="images">
        <CustomizedAccordions
          phoneSpecs={phoneSpecs?.filter((spec) => spec.id === "Images")}
          searchQuery={searchQuery}
          rowRefs={rowRefs}
          title="Images"
        />
      </div>
    </Container>
  );
};

export default withLayout(Phone);
