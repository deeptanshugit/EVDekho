import React, { useEffect, useRef } from "react";
import {

  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

interface comparisonData {
  comparisonData: Array<any>;
  searchQuery: any;
  rowRefs: any;
}

function ComparisonTable(props: comparisonData) {
  const keys = Object.keys(props.comparisonData[0]);
  return (
    <div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Specification</TableCell>
              {props.comparisonData.map((item: any, index: number) => (
                <TableCell key={index}>{item.model}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {keys.map(
              (key) =>
                key !== "model" && (
                  <TableRow
                    key={key}
                    ref={(el: any) =>
                      (props.rowRefs.current[key.toLowerCase()] = el)
                    }
                  >
                    <TableCell>{key}</TableCell>
                    {props.comparisonData?.map((item: any, index: number) => (
                      <TableCell key={index}>{item[key]}</TableCell>
                    ))}
                  </TableRow>
                )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default ComparisonTable;
