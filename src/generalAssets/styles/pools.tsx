import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
type styleProps = {
  tertiary: boolean;
  width?: string;
};
const useStyles = makeStyles(() => ({
  title: {},
  root: {},
  pools: {},
  section1: {},
  section2: {},
  convertSection: {},
  subTitle: {},
  fromSection: {},
  toSection: {},
  connectBtn: {},
}));
export default useStyles;
