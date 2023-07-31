import { makeStyles } from "@mui/styles";
type styleProps = {
  tertiary: boolean;
  width?: string;
};
const useStyles = makeStyles((theme?: any) => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
    margin: theme.spacing(5, 10, 5, 9),
  },
  column: {},
  connectBtn: {
    display: "flex",
    width: "164px",
    height: "38px",
    padding: theme.spacing(0, 2),
    textAlign: "center",
    borderRadius: "10px",
    fontSize: "0.87rem",
    border: "1px solid",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: theme.spacing(5),
    cursor: "pointer",
    fontWeight: theme.typography.fontWeightMediums,
    borderColor: theme.palette.primary.maine,
    background: theme.palette.primary[200],
    color: theme.palette.text.secondary,
    [theme.breakpoints.down("sm")]: {
      marginRight: theme.spacing(0),
    },
  },
}));
export default useStyles;
