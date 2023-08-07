import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";

const useStyles = makeStyles(() => {
  return {
    dialogContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      padding: useTheme().spacing(4),
      width: "33.25rem",
      height: "15.5rem",
      color: useTheme().palette.text.secondary,
      boxSizing: "border-box",
      textAlign: "center",
      [useTheme().breakpoints.down("sm")]: {
        height: "auto",
        minHeight: "312px",
        width: "100%",
        padding: useTheme().spacing(4),
      },
    },
    btnRow: {
      display: "flex",
      flexDirection: "row",
      alignSelf: "center",
      [useTheme().breakpoints.down("sm")]: {
        width: "100%",
        flexDirection: "column-reverse",
      },
    },
    btnMargin: {
      marginRight: useTheme().spacing(5),
      [useTheme().breakpoints.down("sm")]: {
        marginTop: useTheme().spacing(3),
        width: "100%",
      },
    },
    btn: {
      width: "100px",
      height: "58px",
      borderRadius: "8px",
      display: "flex",
      justifyItems: "center",
      color: useTheme().palette.text.primary,
      [useTheme().breakpoints.down("sm")]: {
        flexDirection: "column",
        width: "100%",
      },
    },
    text: {
      color: useTheme().palette.text.primary,
    },
    rejectBtn: {
      display: "flex",
      width: "90px",
      height: "24px",
      padding: "17px",
      alignItems: "center",
      flexShrink: "0",
      textAlign: "center",
      borderRadius: "8px",
      fontSize: "1rem",
      border: "1px solid",
      justifyContent: "center",
      marginLeft: "auto",
      cursor: "pointer",
      color: useTheme().palette.text.primary,
      fontWeight: useTheme().typography.fontWeightMedium,
      borderColor: useTheme().palette.common.black,
      background: useTheme().palette.primary.contrastText,
      [useTheme().breakpoints.down("sm")]: {
        flexDirection: "column",
        marginLeft: "0",
        width: "93%",
        fontSize: "0.85rem",
      },
    },
    resetBtn: {
      display: "flex",
      width: "140px",
      height: "24px",
      padding: "18px",
      alignItems: "center",
      flexShrink: "0",
      textAlign: "center",
      borderRadius: "8px",
      fontSize: "1rem",
      border: "1px solid",
      justifyContent: "center",
      marginLeft: "auto",
      cursor: "pointer",
      fontWeight: useTheme().typography.fontWeightMedium,
      borderColor: useTheme().palette.primary.light,
      background: useTheme().palette.primary.main,
      color: useTheme().palette.text.secondary,
      [useTheme().breakpoints.down("sm")]: {
        flexDirection: "column",
        marginLeft: "0",
        width: "93%",
        fontSize: "0.85rem",
      },
    },
    quickIcon: {
      marginLeft: "auto",
    },
  };
});
export default useStyles;
