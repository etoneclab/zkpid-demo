import { makeStyles } from "@mui/styles";
type styleProps = {
  tertiary: boolean;
  width?: string;
};
const useStyles = makeStyles((theme?: any) => ({
  root: {
    height: "60px",
    width: (styleProps: styleProps) => styleProps.width,
    minWidth: "300px",
    [theme.breakpoints.down("sm")]: {
      minWidth: "unset",
      width: "inherit",
    },
  },
  contained: {
    background: theme.palette.primary.main,
    color: theme.palette.text.main,
    borderColor: theme.palette.primary.main,
    "&:hover": {
      background: theme.palette.primary[800],
    },
    "&:focus": {
      background: theme.palette.primary[700],
      outline: "none",
    },
    "&:active": {
      background: theme.palette.primary.main,
    },
  },
  // outlined: {
  //   border: (styleProps: styleProps) =>
  //     styleProps.tertiary
  //       ? `2px solid ${theme.palette.borderColor.onSurface}`
  //       : `2px solid ${theme.palette.onSurface.highEmphasis}`,
  //   color: theme.palette.primary.main,
  //   "&:hover": {
  //     borderColor: (styleProps: styleProps) =>
  //       styleProps.tertiary
  //         ? `2px solid ${theme.palette.borderColor.onSurface}`
  //         : theme.palette.primary[800],
  //     color: theme.palette.primary[800],
  //   },
  //   "&:focus": {
  //     borderColor: (styleProps: styleProps) =>
  //       styleProps.tertiary
  //         ? `2px solid ${theme.palette.borderColor.onSurface}`
  //         : theme.palette.primary[700],
  //     color: theme.palette.primary[700],
  //     outline: "none",
  //   },
  //   "&:active": {
  //     borderColor: (styleProps: styleProps) =>
  //       styleProps.tertiary
  //         ? `2px solid ${theme.palette.borderColor.onSurface}`
  //         : theme.palette.onSurface.highEmphasis,
  //     color: theme.palette.primary.main,
  //   },
  //   "&.Mui-disabled": {
  //     background: "transparent!important",
  //   },
  // },
  text: {
    color: theme.palette.primary.main,
    "&:hover": {
      color: theme.palette.primary[800],
    },
    "&:focus": {
      color: theme.palette.primary[700],
      outline: "none",
    },
    "&:active": {
      color: theme.palette.primary.main,
    },
    "&.Mui-disabled": {
      background: "transparent!important",
    },
  },
  sizeLarge: {
    width: "170px",
    height: "58px",
  },
  sizeSmall: {
    width: "300px",
    height: "54px",
  },

  disabled: {
    "&.Mui-disabled": {
      background: theme.palette.primary.contrastText,
      color: theme.palette.primary.main,
    },
  },
}));
export default useStyles;
