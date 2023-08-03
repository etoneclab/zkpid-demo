import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
type styleProps = {
  tertiary: boolean;
  width?: string;
};
const useStyles = makeStyles(() => ({
  root: {},
  pools: {},
}));
export default useStyles;
