import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";

const useStyles = makeStyles(() => ({
  wallet: {
    display: "flex",
    width: "347px",
    height: "664px",
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
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  menu: { textAlign: "center" },
  title: { textAlign: "center" },
  icones: {
    display: "flex",
    justifyContent: "space-around",
    width: "349px",
    alignItems: "flex-start",
  },
  wrape: { display: "flex", flexDirection: "column" },
  icone: {
    margin: useTheme().spacing(0, 5),
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
  history: {
    display: "flex",
    width: "350px",
    height: "410px",
    padding: "10px 20px",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "32px",
    flexShrink: "0",
    borderRadius: "30px 30px 16px 16px",
    background: "var(--primary-20, rgba(222, 225, 248, 0.20))",
    marginTop: useTheme().spacing(10),
  },
}));
export default useStyles;
