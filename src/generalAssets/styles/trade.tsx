import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
type styleProps = {
  tertiary: boolean;
  width?: string;
};
const useStyles = makeStyles(() => ({
  root: {
    borderWidth: 1,
  },
  trade: {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    marginLeft: useTheme().spacing(5),
  },
  border1: {
    width: "716px",
    height: "224px",
    flexShrink: 0,
    border: `1px solid ${useTheme().palette.grey.A100}`,
    borderRadius: useTheme().shape.borderRadius,
    marginBottom: useTheme().spacing(5),
  },
  border2: {
    padding: useTheme().spacing(4),
    display: "flex",
    flexDirection: "column",
    width: "716px",
    height: "224px",
    flexShrink: 0,
    border: `1px solid ${useTheme().palette.grey.A100}`,
    borderRadius: useTheme().shape.borderRadius,
  },
  title: {},
  subTitle: {},
  convertSection: {
    display: "flex",
    justifyContent: "space-between",
    margin: useTheme().spacing(3),
  },
  fromSection: {
    width: "100px",
    height: "39px",
    padding: useTheme().spacing(2),
    borderRadius: useTheme().shape.borderRadius,
    background: useTheme().palette.grey[100],
  },
  toSection: {
    width: "100px",
    height: "39px",
    padding: useTheme().spacing(2),
    borderRadius: useTheme().shape.borderRadius,
    background: useTheme().palette.grey[100],
  },
  connectBtn: {
    display: "flex",
    width: "164px",
    height: "38px",
    padding: useTheme().spacing(2),
    textAlign: "center",
    borderRadius: "10px",
    fontSize: "0.87rem",
    border: "1px solid",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: useTheme().spacing(5),
    cursor: "pointer",
    fontWeight: useTheme().typography.fontWeightMedium,
    borderColor: useTheme().palette.primary.main,
    //@ts-ignore
    background: useTheme().palette.primary.main,
    color: useTheme().palette.text.secondary,
    [useTheme().breakpoints.down("sm")]: {
      marginRight: useTheme().spacing(0),
    },
  },
}));
export default useStyles;
