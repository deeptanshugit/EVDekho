import {
  Col,
  Row,
} from "react-bootstrap";
import {
  Collapse,
  Typography,
} from "@mui/material";
import styles from "./basicDetailAccordian.module.css";
import { fontSize } from "../theme/fontsize";
import { useEffect, useState } from "react";
import { fontWeight } from "../theme/fontWeight";
import KeySpecsComparison from "../specifications/keySpecifications/KeySpecsComparison";

interface basicDetail {
  description: string;
  keySpecs1: any;
  keySpecs2: any;
}

const ReadMore = (
  { children, keySpecs1, keySpecs2 }: any,
  description: string
) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  const showbasicComparison = () => {
    return (
      <div>
        <KeySpecsComparison
          keySpecs1={keySpecs1}
          keySpecs2={keySpecs2}
        ></KeySpecsComparison>
      </div>
    );
  };
  return (
    <div className="text">
      <Collapse
        in={!isReadMore}
        timeout={{ enter: 1500, exit: 1500 }}
        collapsedSize={50}
      >
        <Typography
          sx={{
            wordWrap: "break-word", // Same as above for consistency
            overflowWrap: "break-word",
          }}
          fontSize={fontSize.h3.small}
          fontWeight={fontWeight.W400}
          component="span"
        >
          {isReadMore ? text.slice(0, 200) + "..." : text}
        </Typography>
        {!isReadMore && showbasicComparison()}
      </Collapse>

      <div
        onClick={toggleReadMore}
        className="read-or-hide d-flex justify-content-end"
        style={{ color: "rgb(0,136,209)",cursor:"pointer" }}
      >
        {isReadMore ? "Read More" : "Read Less"}
      </div>
    </div>
  );
};

export default function BasicDetailsAccordian(props: basicDetail) {
  return (
    <Row>
      <Col>
        <ReadMore keySpecs1={props?.keySpecs1} keySpecs2={props?.keySpecs2}>
          {props?.description}
        </ReadMore>
      </Col>
    </Row>
  );
}
