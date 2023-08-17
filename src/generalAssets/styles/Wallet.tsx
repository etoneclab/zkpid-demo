import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";

const useStyles = makeStyles((theme) => ({
  wallet: {
    display: "flex",
    width: "347px",
    height: "674px",
    padding: useTheme().spacing(5, 5, 1, 5),
    flexDirection: "column",
    // alignItems: "center",
    gap: "24px",
    borderRadius: "16px",
    border: "1px solid var(--primary-20, rgba(222, 225, 248, 0.20))",
    background: "var(--primary-20, rgba(222, 225, 248, 0.20))",
    boxShadow: "4px 4px 4px 0px rgba(0, 0, 0, 0.05)",
    flexShrink: "0",
  },
  section2: {
    gap: "24px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  menu: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    gap: "6px",
    textAlign: "center",
  },
  btn: {
    height: "38px",
    borderRadius: "8px",
    padding: "10px",
    display: "flex",
    justifyItems: "center",
    cursor: "pointer",
    color: useTheme().palette.text.primary,
    background: useTheme().palette.secondary.main
  },
  title: { textAlign: "center" },
  elipsTitle: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    alignSelf: "stretch",
  },
  justify: {
    display: "flex",
    flexDirection: "row",
    gap: "10px",
  },
  icones: {
    display: "flex",
    justifyContent: "space-around",
    width: "349px",
    alignItems: "flex-start",
  },
  wrape: { display: "flex", flexDirection: "column" },
  wraph: { display: "flex", flexDirection: "row" },
  icone: {
    margin: useTheme().spacing(2, 5),
    background: useTheme().palette.primary.main,
    display: "flex",
    width: "40px",
    height: "40px",
    padding: "16px",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    borderRadius: "16px",
  },
  credIcone: {
    margin: useTheme().spacing(2, 5),
    background: useTheme().palette.secondary.light,
    display: "flex",
    width: "40px",
    height: "40px",
    padding: "16px",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    borderRadius: "16px",
  },
  history: {
    display: "flex",
    width: "350px",
    height: "420px",
    padding: "10px 20px",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "32px",
    flexShrink: "0",
    borderRadius: "30px 30px 16px 16px",
    background: "var(--primary-20, rgba(222, 225, 248, 0.20))",
  },
}));
export default useStyles;
