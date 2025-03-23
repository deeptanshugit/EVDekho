import React, { useState } from "react";
import styles from "./specification.module.css";
import { title } from "process";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { fontSize } from "../../theme/fontsize";
import { fontWeight } from "../../theme/fontWeight";

interface PhoneSpecification {
  specsdata: Array<any>;
  searchQuery: string;
}
function SpecificationPhone(props: PhoneSpecification) {
  const [searchQuery, setSearchQuery] = useState("");
  const [expanded, setExpanded] = useState<string | false>(false);

  return (
    <div className={styles.container}>
      <div className={`${styles.title} p-3`}>
        <Typography fontSize={fontSize.h3.large}>Specification</Typography>
      </div>
      {props.specsdata?.map((specs) => {
        return (
          <Accordion key={specs.id}>
            <AccordionSummary
              className="p-2"
              sx={{ borderBottom: "1px solid grey" }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography
                component="span"
                fontSize={fontSize.h3.medium}
                fontWeight={fontWeight.W300}
              >
                {specs.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>{specs.component}</AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}

export default SpecificationPhone;
