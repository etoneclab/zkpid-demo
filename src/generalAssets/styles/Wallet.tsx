import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";

const useStyles = makeStyles(() => ({
  wallet: {
    display: "flex",
    width: "347px",
    height: "664px",
    padding: "24px 16px",
    flexDirection: "column",
    alignItems: "center",
    gap: "24px",
    borderRadius: "16px",
    border: "1px solid var(--primary-20, rgba(222, 225, 248, 0.20))",
    background: "var(--primary-20, rgba(222, 225, 248, 0.20))",
    boxShadow: "4px 4px 4px 0px rgba(0, 0, 0, 0.05)",
  },
  title: {},
  icones: {
    display: "flex",
    justifyContent: "space-between",
  },
  icone: {
    margin: useTheme().spacing(0, 5),
    background: useTheme().palette.primary.main,
    display: "flex",
    flexDirection: "column",
    width: "40px",
    height: "40px",
    padding: "16px",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    borderRadius: "16px",
  },
}));
export default useStyles;
