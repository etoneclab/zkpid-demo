import * as React from "react";
import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  TableSortLabel,
  Collapse,
} from "@mui/material";
import { makeStyles } from "@mui/material/styles";
import { FC, Fragment, ReactElement, useEffect, useState } from "react";
import orderBy from "lodash/orderBy";

import clsx from "clsx";
import useStyles from "../../generalAssets/styles/table";

import TCell from "./TCellContent";

interface SmallTableProps {
  columns: any;
  rows: any;
  tableCells?: { [name: string]: (item: any) => ReactElement };
  handleCellClick?: (row: any) => any | void;
  disabled?: boolean;
  expandable?: boolean;
  checkExpandableValue?: any;
  collapseElement?: (item: any, items?: any) => ReactElement;
  rowAction?: (item: any) => ReactElement;
  color?: boolean;
  selected?: number;
}

function createData(
  exchange: string,
  price: string,
  fees: string,

  youGet: string
) {
  return { exchange, price, fees, youGet };
}

const rows = [
  createData("Pool 01", "176 ETH", "-4,08$", "176 ETH"),
  createData("Pool 02", "0.186 ETH", "-4,12§", "0.186 ETH"),
  createData("Pool 03", "193 ETH", "-3,19§", "193 ETH"),
  createData("Pool 04", "193 ETH", "-3,19§", "193 ETH"),
  createData("Pool 05", "193 ETH", "-3,19§", "193 ETH"),
];

export default function BasicTable() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div>
        <div className={classes.rowsTable}>
          <Typography
            variant="subtitle2"
            align="left"
            className={classes.title}
          >
            Exchange
          </Typography>
          <Typography
            variant="subtitle2"
            align="left"
            className={classes.title}
          >
            Price
          </Typography>
          <Typography
            variant="subtitle2"
            align="left"
            className={classes.title}
          >
            Fees
          </Typography>
          <Typography
            variant="subtitle2"
            align="left"
            className={classes.title}
          >
            You get
          </Typography>
        </div>
        <div>
          {rows.map((row) => (
            <div key={row.exchange} className={classes.rows}>
              <Typography
                variant="body1"
                align="left"
                className={classes.cellTable}
              >
                {row.exchange}
              </Typography>

              <Typography
                variant="body1"
                align="left"
                className={classes.cellTable}
              >
                {row.price}
              </Typography>
              <Typography
                variant="body1"
                align="left"
                className={classes.cellTable}
              >
                {row.fees}
              </Typography>
              <Typography
                variant="body1"
                align="left"
                className={classes.cellTable}
              >
                {row.youGet}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
