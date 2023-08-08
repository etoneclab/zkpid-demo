import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
type styleProps = {
  tertiary: boolean;
  width?: string;
};
const useStyles = makeStyles((theme) => ({
  root: {},
  title: {
    color: "var(--00-on-surface-high-emphasis, #08141E)",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "30px",
    letterSpacing: "0.18px",
  },
  pools: {
    display: "flex",
    margin: "auto",
    width: "348px",
    padding: "26px 16px",
    flexDirection: "column",
    alignItems: "center",
    gap: "26px",
    marginLeft: "236px",
  },
  section1: {
    display: "flex",
    width: "348px",
    padding: "26px 16px",
    flexDirection: "column",
    alignItems: "center",
    gap: "26px",
    borderRadius: "10px",
    border: "1px solid var(--primary-20, rgba(222, 225, 248, 0.20))",
    background: "var(--primary-20, rgba(222, 225, 248, 0.20))",
  },
  section2: {
    display: "flex",
    width: "348px",
    padding: "26px 16px",
    flexDirection: "column",
    alignItems: "center",
    gap: "26px",
    borderRadius: "10px",
    border: "1px solid var(--primary-20, rgba(222, 225, 248, 0.20))",
    background: "var(--primary-20, rgba(222, 225, 248, 0.20))",
  },
  convertSection: {},
  subTitle: {},
  fromSection: {},
  toSection: {},
  connectBtn: {},
}));
export default useStyles;
