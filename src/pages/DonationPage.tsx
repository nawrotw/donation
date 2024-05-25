import { GivingBlock } from "../components/GivingBlock.tsx";
import { Button, Grid, useMediaQuery, useTheme, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import { colors } from "../styles/colors.ts";
import CloseIcon from "../assets/CloseIcon.tsx";
import { useState } from "react";
import { DonationSummary } from "../components/DonationSummary.tsx";
import { DonationForm } from "../components/DonationForm.tsx";
import { addMonths } from "date-fns";
import { calcMonthsCount } from "./utils/monthCalculations.ts";

const Root = styled('div')`
    position: relative;
    max-width: 600px;
    background-color: ${colors.background};

    box-shadow: 0px 16px 32px 0px #1E2A3214;

    padding: ${({ theme }) => theme.spacing(3)};

    & > *:not(:last-child) {
        margin-bottom: ${({ theme }) => theme.spacing(3)};
    }
`;

const StyledGivingBlock = styled(GivingBlock)``;

export const MobileCancelButton = styled((IconButton))`
    position: absolute;
    top: 0;
    right: 0;
`;
export const DonationPage = () => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [amount, setAmount] = useState<number>(25000);

  const [untilDate, setUntilDate] = useState<Date>(addMonths(new Date(), 1));
  const [monthsCount, setMonthsCount] = useState(calcMonthsCount(untilDate));

  const onUntilDateChange = (date: Date) => {
    setUntilDate(date);
    setMonthsCount(calcMonthsCount(date));
  }

  const onContinue = () => {
    console.log('Continue');
  }
  const onCancel = () => {
    console.log('Cancel');
  }
  return (
    <Root>
      <StyledGivingBlock sx={{ m: -3, p: 3 }}/>
      <DonationForm amount={amount} date={untilDate} onAmountChange={setAmount} onDateChange={onUntilDateChange}/>
      <DonationSummary amount={amount} monthsCount={monthsCount}/>
      {isMobile && <MobileCancelButton sx={{ m: 1 }} onClick={onCancel}><CloseIcon/></MobileCancelButton>}
      <Grid container columnSpacing={2} justifyContent="center">
        {!isMobile && <Grid item xs>
          <Button variant='outlined' fullWidth onClick={onCancel}>Cancel</Button>
        </Grid>}
        <Grid item xs>
          <Button fullWidth onClick={onContinue}>Continue</Button>
        </Grid>
      </Grid>
    </Root>
  )
}
