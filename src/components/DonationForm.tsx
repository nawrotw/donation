import { MoneyInput } from "./form/MoneyInput/MoneyInput.tsx";
import { FormControl, Grid } from "@mui/material";
import { StyledLabel } from "./form/StyledLabel.tsx";
import { DateInput } from "./form/DateInput/DateInput.tsx";

export interface DonationFormProps {
  amount: number;
  onAmountChange: (amount: number) => void;
  date: Date;
  onDateChange: (date: Date) => void;
}

export const DonationForm = (props: DonationFormProps) => {
  const { amount, date, onAmountChange, onDateChange } = props;

  return (
    <Grid container columnSpacing={2} justifyContent="center">
      <Grid item xs={12} sm>
        <FormControl fullWidth>
          <StyledLabel htmlFor="donationAmount">I can donate</StyledLabel>
          <MoneyInput id="donationAmount" autoFocus amount={amount} onAmountChange={onAmountChange}/>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm>
        <FormControl fullWidth>
          <StyledLabel htmlFor="donationDate">Every month until</StyledLabel>
          <DateInput id="donationDate" date={date} onDateChange={onDateChange}/>
        </FormControl>
      </Grid>
    </Grid>
  )
}
