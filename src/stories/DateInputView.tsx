import { ThemeProvider } from "@emotion/react";
import { defaultTheme } from "../styles/theme.ts";
import styles from "./storyBook.module.scss";
import { useState } from "react";
import { FormControl } from "@mui/material";
import { StyledLabel } from "../components/form/StyledLabel.tsx";
import { DateInput, ArrowButton } from "../components/form/DateInput.tsx";
import RightIcon from "../assets/RightIcon.tsx";
import { colors } from "../styles/colors.ts";
import LeftIcon from "../assets/LeftIcon.tsx";

export const DateInputView = () => {
  const [date, setDate] = useState<Date>(new Date())

  return (
    <ThemeProvider theme={defaultTheme}>
      <h3>Date input</h3>
      <FormControl sx={{ width: '250px' }}>
        <StyledLabel htmlFor="donationDate">Every month until</StyledLabel>
        <DateInput id="donationDate" date={date} onDateChange={setDate}/>
      </FormControl>

      <h4>Navigation arrows</h4>
      <div className={styles.flex}>
        <div className={styles.columnInline}>
          Default:<br/>
          <ArrowButton><LeftIcon color={colors.midnightGray}/></ArrowButton>
          <ArrowButton><RightIcon color={colors.midnightGray}/></ArrowButton>
        </div>
        <div className={styles.columnInline}>
          Hover:<br/>
          <ArrowButton className='hover'><LeftIcon color={colors.midnightGray}/></ArrowButton>
          <ArrowButton className='hover'><RightIcon color={colors.midnightGray}/></ArrowButton>
        </div>
        <div className={styles.columnInline}>
          Pressed:<br/>
          <ArrowButton className='active'><LeftIcon color={colors.midnightGray}/></ArrowButton>
          <ArrowButton className='active'><RightIcon color={colors.midnightGray}/></ArrowButton>
        </div>
      </div>

    </ThemeProvider>
  );
};
