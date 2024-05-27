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

const Root = styled('div')(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(3),
  paddingBottom: theme.spacing(5),
  [theme.breakpoints.up('sm')]: {
    width: '100%'
  },
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(5),
    width: 520
  },
  backgroundColor: colors.background,
  boxShadow: "0px 16px 32px 0px #1E2A3214",
  "& > *:not(:last-child)": {
    marginBottom: theme.spacing(5),
  }
}));

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
  const [monthsCount, setMonthsCount] = useState(1);

  // TODO wkn is first donation is done immediate on submit?
  // so if now is 2024-05 and we set monthUntil: 2024-06 donations count === 2?
  const totalDonation = amount * (monthsCount + 1); // +1 for immediate donation
  const untilDate = addMonths(new Date(), monthsCount);

  const onUntilDateChange = (date: Date) => {
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
      <StyledGivingBlock sx={{ m: {xs: -3, md: -5}, p: {xs: 3, md: 5} }}/>
      <DonationForm amount={amount} date={untilDate} onAmountChange={setAmount} onDateChange={onUntilDateChange}/>
      <DonationSummary amount={amount} monthsCount={monthsCount} totalDonation={totalDonation}/>
      {isMobile && <MobileCancelButton sx={{ m: 1 }} onClick={onCancel}><CloseIcon/></MobileCancelButton>}
      <Grid container columnSpacing={2} justifyContent="center" sx={{ mt: 0 }}>
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
