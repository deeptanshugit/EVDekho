"use client"
import { useState, Fragment } from "react";
import activaData from "../../../../public/data/hondaactive6g/activa6g";
import styles from "./specificationTable.module.css"

export default function SpecificationTable() {
  const [showAllRows, setShowAllRows] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);


  const renderRows = () => {
    return activaData.map((dataEntry, index) => (
      <Fragment key={index}>
        {renderObjectEntries(dataEntry)}
      </Fragment>
    ));
  };

  const renderObjectEntries = (dataEntry: any) => {
    return Object.entries(dataEntry).map(([category, properties]) => (
      <Fragment key={category}>
        <tr>
          <td colSpan={2}>
            <h5>{category}</h5>
          </td>
        </tr>
        {expandedCategories.includes(category) || showAllRows
          ? Object.entries(properties as { [key: string]: any }).map(([key, value]) => (
              <tr key={key}>
                <td>
                  <strong>{key}:</strong>
                </td>
                <td>{value}</td>
              </tr>
            ))
          : Object.entries(properties as { [key: string]: any }).slice(0, 5).map(([key, value]) => (
              <tr key={key}>
                <td>
                  <strong>{key}:</strong>
                </td>
                <td>{value}</td>
              </tr>
            ))}
        <tr>
          <td colSpan={2}>
            {Object.entries(properties as { [key: string]: any }).length > 5 && (
              <button className="btn btn-primary btn-sm" onClick={() => toggleShowCategory(category)}>
                {expandedCategories.includes(category) ? "Collapse" : "See More"}
              </button>
            )}
          </td>
        </tr>
      </Fragment>
    ));
  };

  const toggleShowCategory = (category: any) => {
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
          <thead></thead>
          <tbody>
            {renderRows()}
            <tr>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
