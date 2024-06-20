import withLayout from "@/app/components/WithLayout";
import { ThemeColor } from "@/app/components/theme/color";
import { inter } from "@/app/components/theme/fontfamily";
import { fontSize } from "@/app/components/theme/fontsize";
import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Link,
  List,
  ListItem,
  ListItemText,
  Box,
  Grow,
  Collapse,
} from "@mui/material";
import React, { ReactNode, useState } from "react";
import styles from "./browse.module.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "@/app/components/footer/footer";
import { Table } from "react-bootstrap";

interface ReadMoreProps {
  summary: string;
  children: ReactNode;
  maxChar?: number;
}

const ReadMore:React.FC<ReadMoreProps> = ({ summary, children, maxChar = 150 }) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  const isTextLong = summary.length > maxChar;

  return (
    <div>
      <Typography variant="body1" component="span">
        {isTextLong ? (
          <>
            {expanded ? summary : `${summary.substring(0, maxChar)}...`}
            <Collapse
              in={expanded}
              timeout={{ enter: 1000, exit: 1000 }}
              easing={{
                enter: "cubic-bezier(0.4, 0, 0.2, 1)",
                exit: "cubic-bezier(0.4, 0, 0.2, 1)",
              }}
              // timeout="auto"
              unmountOnExit
            >
              <Box mt={2}>{children}</Box>
            </Collapse>
            <Link
              component="button"
              variant="body2"
              onClick={handleToggle}
              sx={{
                color: "primary.main",
                cursor: "pointer",
                display: "flex",
                justifyContent: "flex-end",
                width: "100%",
                textDecoration: "none",
                fontSize: `${fontSize.h3.small}px`,
                marginTop:5
              }}
            >
              {expanded ? "Collapse" : "Read More"}
            </Link>
          </>
        ) : (
          summary
        )}
      </Typography>
    </div>
  );
};

function browse() {
  const summary = `
  Planning to buy an electric bike or electric scooter? Well, we know that fuel type is one of the most crucial things while buying a two wheeler and with so many options available out there, it gets really difficult to find a good option which suits your requirement. Hence, we have put together a complete list of best electric bikes in India. These are all practical runabouts whose performance isn't quite on par with their fossil-fuel-powered counterparts, but they are ideal for someone with a short commute or a run to the market. OLA S1 X, OLA S1 Pro and Bajaj Chetak are the 3 most popular EV at the moment. View the complete list of electric bike with information regarding price, images, colours, reviews, driving range, charging time, other specifications and features and much more for each of these EVs so that you get to choose the best electric bike of your choice.

`;
  return (
    <Container className={styles.main}>
      <Typography fontSize={fontSize.h2.medium}>Elctric bike</Typography>

      <ReadMore summary={summary} maxChar={300}>
        <Typography fontSize={fontSize.h2.medium}>
          Best Electric Bikes Price in India 2024
        </Typography>

        <div
          className={`d-flex justify-content-center ${styles.tableResponsive}`}
        >
          <Table
            striped
            bordered
            hover
            variant="light"
            className={` ${styles.stickyTable}`}
            size="lg"
          >
            <thead>
              <tr>
                <th>MODEL</th>
                <th>On-Road Prices</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ather 450X</td>
                <td>₹ 1,37,803 *</td>
              </tr>
              <tr>
                <td>Revolt RV 400</td>
                <td>₹ 1,37,950 *</td>
              </tr>
              <tr>
                <td>Ather 450X</td>
                <td>₹ 1,37,803 *</td>
              </tr>
              <tr>
                <td>Revolt RV 400</td>
                <td>₹ 1,37,950 *</td>
              </tr>
              <tr>
                <td>Ather 450X</td>
                <td>₹ 1,37,803 *</td>
              </tr>
              <tr>
                <td>Revolt RV 400</td>
                <td>₹ 1,37,950 *</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </ReadMore>
    </Container>
  );
}

export default withLayout(browse);
