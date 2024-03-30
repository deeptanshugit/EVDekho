"use client";
import { Fragment } from "react";
import styles from "./specificationTable.module.css";
import { useState } from "react";

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

  const renderRows = () => {
    return Object.entries(props.data)
      .filter(([key]) => !["_id", "brand", "model"].includes(key))
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
    <div className={styles.table}>
      <h3>Specifications & Features</h3>
      <div className={styles.tableContainer}>
        <table className="table">
          <tbody>{renderRows()}</tbody>
        </table>
      </div>
    </div>
  );
}
