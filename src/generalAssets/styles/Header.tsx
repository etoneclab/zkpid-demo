import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
type styleProps = {
  tertiary: boolean;
  width?: string;
};
const useStyles = makeStyles((theme) => {
  console.log(">>>", useTheme());
  return {
    header: {
      display: "flex",
      width: "874px",
      position: "relative",
      alignItems: "flex-start",
      justifyContent: "space-between",
      margin: useTheme().spacing(5),
    },
    connectBtnWrapper: {
      //   display: "flex",
      //   alignItems: "flex-start;", // Adjust as needed
      //   order: 1, // Set a lower order value to make it appear first
    },
    column: {},
    active: {
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: "700",
      lineHeight: "24px" /* 150% */,
      letterSpacing: "0.15px",
    },
    connectBtn: {
      display: "flex",
      width: "164px",
      height: "38px",
      padding: useTheme().spacing(0),
      textAlign: "center",
      borderRadius: "10px",

      border: "1px solid",
      flexDirection: "column",
      justifyContent: "center",
      marginLeft: "auto",
      marginRight: useTheme().spacing(5),
      cursor: "pointer",
      fontWeight: useTheme().typography.fontWeightMedium,
      borderColor: useTheme().palette.primary.main,

      background: useTheme().palette.primary.main,

      color: useTheme().palette.text.secondary,
      [useTheme().breakpoints.down("sm")]: {
        marginRight: useTheme().spacing(0),
      },
    },
    main: { display: "flex", justifyContent: "space-between" },
    testWrapper: {
      //   position: "relative",
      //   height: "600px",
      //   marginLeft: useTheme().spacing(2), // Adjust the spacing as needed
      //   order: 2, // Set a higher order value to make it appear after the button
    },
    test: {
      position: "absolute",
      height: "100%",
      marginTop: "30px",
      top: "10%",
    },
  };
});
export default useStyles;
