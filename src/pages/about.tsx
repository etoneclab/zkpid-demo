"use client";
import Image from "next/image";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { connected, request } from "@/store/reducers/root";
import { useTranslation } from "next-i18next";
import { MenuItem, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import useStyles from "../generalAssets/styles/Wallet";
import { ConnectionModal } from "../components/common/ConnectionModal";
import { theme } from "../generalAssets/Themes/Theme";
import sendIcone from "../generalAssets/img/sendIcon.svg";

const Wallet = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <>
      {console.log(classes.wallet)}
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className={classes.wallet}>
          <Typography variant="h5" className={classes.title}>
            15 Lumina
          </Typography>
          <div className={classes.icones}>
            <div className={classes.icone}>
              <Image src={sendIcone} alt="send" />
            </div>
            <Typography variant="body1" className={classes.title}>
              send
            </Typography>

            <div className={classes.icone}>
              <Image src={sendIcone} alt="send" />
            </div>
            <Typography variant="body1" className={classes.title}>
              receive
            </Typography>

            <div className={classes.icone}>
              <Image src={sendIcone} alt="send" />
            </div>
            <Typography variant="body1" className={classes.title}>
              swape
            </Typography>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
};
export default Wallet;
//
