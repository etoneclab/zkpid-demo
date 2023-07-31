import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme?: any) => ({
  dialogContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(6),
    width: "33.25rem",
    height: "15.5rem",
    color: theme.palette.text.secondary,
    boxSizing: "border-box",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      height: "auto",
      minHeight: "312px",
      width: "100%",
      padding: theme.spacing(4, 4, 7, 4),
    },
  },
  btnRow: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      flexDirection: "column-reverse",
    },
  },
  btnMargin: {
    marginRight: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(3),
      width: "100%",
    },
  },
  btn: {
    width: "180px",
    height: "38px",
    borderRadius: "8px",
    display: "flex",
    justifyItems: "center",
    color: theme.palette.text.primary,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      width: "100%",
    },
  },
  text: {
    color: theme.palette.text.primary,
  },
  rejectBtn: {
    color: theme.palette.text.primary,
    width: "180px",
    height: "38px",
    display: "flex",

    textAlign: "center",
    borderRadius: "8px",
    fontSize: "1rem",
    border: "1px solid",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: "auto",
    cursor: "pointer",
    fontWeight: theme.typography.fontWeightMediums,
    borderColor: theme.palette.common.black,
    background: theme.palette.contrastText,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      marginLeft: "0",
      width: "93%",
      fontSize: "0.85rem",
    },
  },
  resetBtn: {
    width: "180px",
    height: "38px",
    display: "flex",

    textAlign: "center",
    borderRadius: "8px",
    fontSize: "1rem",
    border: "1px solid",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: "auto",
    cursor: "pointer",
    fontWeight: theme.typography.fontWeightMediums,
    borderColor: theme.palette.primary.light,
    background: theme.palette.primary[200],
    color: theme.palette.text.secondary,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      marginLeft: "0",
      width: "93%",
      fontSize: "0.85rem",
    },
  },
  quickIcon: {
    marginLeft: "auto",
  },
}));
export default useStyles;
