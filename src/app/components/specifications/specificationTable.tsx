"use client";
import { Fragment } from "react";
import { useState } from "react";
import {
  Card,
  Col,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContainer,
  TabContent,
  TabPane,
} from "react-bootstrap";
import styles from './specificationTable.module.css'

interface VehicleData {
  [key: string]: {
    [key: string]: string;
  };
}

interface Props {
  data: VehicleData;
}

export default function SpecificationTable(props: Props) {
  const [showAllRows, setShowAllRows] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  const renderFeatures = () => {
    const features = props.data.Features || {}; // Ensure Features object exists
    return Object.entries(features).map(([key, value]) => (
      <tr key={key}>
        <td>
          <strong>{key}:</strong>
        </td>
        <td>{value}</td>
      </tr>
    ));
  };

  const renderRows = () => {
    return Object.entries(props.data)
      .filter(([key]) => !["_id", "brand", "model", "Features", "vehicleId"].includes(key))
      .map(([category, properties]) => (
        <Fragment key={category}>
          <tr>
            <td colSpan={2}>
              <h5>{category}</h5>
            </td>
          </tr>
          {renderProperties(properties, category)}
          <tr>
            <td colSpan={2}>
              {Object.keys(properties).length > 5 && (
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => toggleShowCategory(category)}
                >
                  {expandedCategories.includes(category)
                    ? "Collapse"
                    : "See More"}
                </button>
              )}
            </td>
          </tr>
        </Fragment>
      ));
  };

  const renderProperties = (
    properties: { [key: string]: string },
    category: string
  ) => {
    return Object.entries(properties)
      .map(([key, value], index) => (
        <tr key={index}>
          <td>
            <strong>{key}:</strong>
          </td>
          <td>{value}</td>
        </tr>
      ))
      .slice(
        0,
        showAllRows || expandedCategories.includes(category) ? undefined : 5
      );
  };

  const toggleShowCategory = (category: string) => {
    if (expandedCategories.includes(category)) {
      setExpandedCategories(expandedCategories.filter((c) => c !== category));
    } else {
      setExpandedCategories([...expandedCategories, category]);
    }
  };

  return (
    <TabContainer id="specification-and-features" defaultActiveKey="specifications">
      <Row>
        <Col xs={12} md={12} lg={12}>
          <h4 className="mb-4"> Ather 450S Specifications and Features</h4>
          <Nav className={styles.nav} variant="underline">
            <NavItem className={styles.navItem}>
              <NavLink className={styles.navLink} eventKey="specifications"> Specifications </NavLink>
            </NavItem>
            <NavItem className={styles.navItem} >
              <NavLink eventKey="features"  className={styles.navLink}> Features </NavLink>
            </NavItem>
          </Nav>
          <TabContent>
            <TabPane eventKey="specifications">
              <Card>
                <table className="table">
                  <tbody>{renderRows()}</tbody>
                </table>
              </Card>
            </TabPane>
            <TabPane eventKey="features">
              <Card>
              <table className="table">
                <tbody>
                {renderFeatures()}
                </tbody>
              </table>
              </Card>
            </TabPane>
          </TabContent>
        </Col>
      </Row>
    </TabContainer>
  );
}
