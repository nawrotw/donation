import { ThemeProvider } from "@emotion/react";
import { defaultTheme } from "../styles/theme.ts";
import { useState } from "react";
import { DonationForm } from "../components/DonationForm.tsx";

export const DonationFormView = () => {
  const [amount, setAmount] = useState<number>(25000)
  const [date, setDate] = useState<Date>(new Date())

  return (
    <ThemeProvider theme={defaultTheme}>
      <DonationForm amount={amount} date={date} onAmountChange={setAmount} onDateChange={setDate}/>
    </ThemeProvider>
  );
};
