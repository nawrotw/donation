import { ThemeProvider } from "@emotion/react";
import { defaultTheme } from "../styles/theme.ts";
import styles from "./buttonsView.module.scss";
import { MoneyInput } from "../components/form/MoneyInput.tsx";
import { useState } from "react";
import { FormControl } from "@mui/material";
import { StyledLabel } from "../components/form/StyledLabel.tsx";

export const MoneyInputView = () => {
  const [amount, setAmount] = useState<number>(25000)

  return (
    <ThemeProvider theme={defaultTheme}>
      <div className={styles.flex}>
        <div className={styles.column}>
          Default:
          <FormControl>
            {/*htmlFor="outlined-adornment-password"*/}
            <StyledLabel>I can donate</StyledLabel>
            <MoneyInput amount={undefined} onAmountChange={setAmount}/>
          </FormControl>

        </div>
        <div className={styles.column}>
          Active:
          <FormControl>
            <StyledLabel>I can donate</StyledLabel>
            <MoneyInput autoFocus className='focus' amount={amount} onAmountChange={setAmount}/>
          </FormControl>
        </div>
        <div className={styles.column}>
          Filled:
          <FormControl>
            <StyledLabel>I can donate</StyledLabel>
            <MoneyInput amount={amount} onAmountChange={setAmount}/>
          </FormControl>
        </div>
      </div>
    </ThemeProvider>
  );
};
