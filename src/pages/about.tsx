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
import menuIcone from "../generalAssets/img/menu.svg";

const Wallet = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className={classes.wallet}>
          <div>
            <Image src={menuIcone} alt="menu" />
            <Typography variant="body1" className={classes.menu}>
              acount 14
            </Typography>
          </div>
          <Typography variant="h5" className={classes.title}>
            15 Lumina
          </Typography>
          <div className={classes.section2}>
            <div className={classes.icones}>
              <div className={classes.wrape}>
                <div className={classes.icone}>
                  <Image src={sendIcone} alt="send" />
                </div>
                <Typography variant="body1" className={classes.title}>
                  send
                </Typography>
              </div>

              <div className={classes.wrape}>
                <div className={classes.icone}>
                  <Image src={sendIcone} alt="send" />
                </div>
                <Typography variant="body1" className={classes.title}>
                  receive
                </Typography>
              </div>

              <div className={classes.wrape}>
                <div className={classes.icone}>
                  <Image src={sendIcone} alt="send" />
                </div>
                <Typography variant="body1" className={classes.title}>
                  swap
                </Typography>
              </div>
            </div>
            <div className={classes.history}>
              <Typography variant="body1" className={classes.title}>
                Transactions history
              </Typography>
              <Typography variant="body1" className={classes.title}>
                Lumin
              </Typography>
              <Typography variant="body1" className={classes.title}>
                Lumina
              </Typography>
              <Typography variant="body1" className={classes.title}>
                Lumina
              </Typography>
              <Typography variant="body1" className={classes.title}>
                Lumina
              </Typography>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
};
export default Wallet;
//
