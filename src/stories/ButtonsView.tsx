import { Button as MuiButton } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { defaultTheme } from "../styles/theme.ts";
import styles from "./storyBook.module.scss";

export const ButtonsView = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div className={styles.flex}>
        <div className={styles.column}>
          Default:
          <MuiButton color='primary'>Continue</MuiButton>
          <MuiButton variant='outlined'>Cancel</MuiButton>
          <MuiButton color='secondary' variant='text'>Continue</MuiButton>
        </div>
        <div className={styles.column}>
          Hover:
          <MuiButton className='hover'>Submit</MuiButton>
          <MuiButton className='hover' variant='outlined'>cancel</MuiButton>
          <MuiButton color='secondary' variant='text' className='hover'>Submit</MuiButton>
        </div>
        <div className={styles.column}>
          Pressed:
          <MuiButton className='active'>Submit</MuiButton>
          <MuiButton className='active' variant='outlined'>cancel</MuiButton>
          <MuiButton color='secondary' variant='text' className='active'>Submit</MuiButton>
        </div>
      </div>
    </ThemeProvider>
  );
};
