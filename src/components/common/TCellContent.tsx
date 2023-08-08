import { FC, Fragment, ReactElement } from "react";
import { Typography } from "@mui/material";

interface TCellContentProps {
  row: { [name: string]: string | number };
  column: string;
  tableCells?: { [name: string]: (row: any, item?: any) => ReactElement };
}

const TCellContent: FC<TCellContentProps> = ({ row, column, tableCells }) => {
  // if there is a custom element provided as a prop with the same name as the column name,
  // it renders that element, otherwise renders a string with the value
  const renderCell = () => {
    if (row[column] === "") {
      return (
        <Typography variant="body2" key={row.id}>
          -
        </Typography>
      );
    } else if (tableCells?.[column]) {
      return (
        <Fragment key={row.id}>
          {tableCells?.[column](row) ? tableCells?.[column](row) : "-"}
        </Fragment>
      );
    } else {
      return (
        <Typography variant="body2" key={row.id}>
          {row[column] ? row[column] : "-"}
        </Typography>
      );
    }
  };

  return renderCell();
};

export default TCellContent;
