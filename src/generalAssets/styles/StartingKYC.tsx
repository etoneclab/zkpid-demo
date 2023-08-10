import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";

const useStyles = makeStyles((theme) => {
  return {
    kyc: {
      display: "flex",
      width: "534px",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",

      marginTop: "71px",

      textAlign: "left",

      boxSizing: "border-box",

      padding: useTheme().spacing(4),
      gap: "30px",
      color: useTheme().palette.text.secondary,
      [useTheme().breakpoints.down("sm")]: {
        height: "auto",
        minHeight: "312px",
        width: "100%",
        padding: useTheme().spacing(4),
      },
    },
    title: {
      width: "534px",

      display: "flex",
      textAlign: "center",
      alignItems: "center",
      flexDirection: "column",
      boxSizing: "border-box",
      justifyContent: "space-between",
      padding: useTheme().spacing(4),
      color: useTheme().palette.text.secondary,
    },
    subTitles: {
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: "600",
      lineHeight: "32px" /* 177.778% */,
      letterSpacing: "0.15px",
      color: " var(--00-on-surface-high-emphasis, #08141E)",
    },
    list: { color: "black" },
    btnRow: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      alignSelf: "center",
      marginTop: "100px",
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
      width: "100%",
      height: "38px",
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
      color: useTheme().palette.text.primary,
      width: "100%",
      height: "48px",
      display: "flex",

      textAlign: "center",
      borderRadius: "15px",
      fontSize: "1rem",
      border: "1px solid",
      flexDirection: "column",
      justifyContent: "center",
      marginLeft: "auto",
      cursor: "pointer",
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
      width: "100%",
      height: "48px",
      display: "flex",
      textAlign: "center",
      borderRadius: "15px",
      fontSize: "1rem",
      border: "1px solid",
      flexDirection: "column",
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
    iframe: {
      width: "100%",
      height: "100%"
    }
  };
});
export default useStyles;
