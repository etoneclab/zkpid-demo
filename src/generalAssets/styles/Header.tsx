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
}));
export default useStyles;
