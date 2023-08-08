import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";

const useStyles = makeStyles((theme) => {
  return {
    container: {
      width: "100%",
      height: "100%",
      display: "flex",

      padding: "10px",
      alignItems: "flex-start",
      gap: "10px",
    },
    rowsTable: {
      display: "flex",
      flexDirection: "row",
      gap: "12px",
      borderBottom: "0.5px solid  #BCC1E5",
    },
    rows: {
      display: "flex",
      flexDirection: "row",
      gap: "10px",
      color: "#8C8C8C",
    },
    title: {
      width: "151px",
      display: "flex",
      height: "32px",
      padding: "10px",
      justifyContent: "start",
      alignItems: "center",
      gap: "10px",
      alignSelf: "stretch",
      color: " #8C8C8C",
    },
    cellTable: {
      width: "151px",
      color: "s#8C8C8C",

      padding: useTheme().spacing(4, 6, 3, 4),
    },
  };
});
export default useStyles;
