import { styled } from "@mui/material/styles";
import { colors } from "../../../styles/colors.ts";
import { Typography } from "@mui/material";
import { TypographyProps } from "@mui/material/Typography/Typography";
import { format, addMonths } from "date-fns";
import { formatMoney } from "../../../common/utils/money/moneyUtils.ts";

const borderRadius = 4;
const Root = styled('div')(({ theme }) => ({
  border: `1px solid ${colors.stroke}`,
  borderRadius,
  [theme.breakpoints.up('sm')]: {
    border: 'none'
  },
}));

const TotalRow = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(3, 2),
  [theme.breakpoints.up('md')]: {
    paddingTop: 0,  // this seems to me like kind of a hack - and it is needed because of design - in mobile there is a frame in desktop isn't.
  },
}));

const InfoTypography = styled(({ children, ...rest }: TypographyProps) =>
  <Typography variant='subtitle1' {...rest}>{children}</Typography>
)(({ theme }) => ({
  backgroundColor: colors.background2,
  padding: theme.spacing(3, 2, 3, 2),
  borderBottomRightRadius: borderRadius - 1, // to make smoother transition between container border and Info element
  borderBottomLeftRadius: borderRadius - 1,
}));

export interface DonationSummaryProps {
  amount: number;
  monthsCount: number;
  totalDonation: number;
}

export const DonationSummary = ({ amount, monthsCount, totalDonation }: DonationSummaryProps) => {

  return (
    <Root>
      <TotalRow>
        <Typography variant='body1'>Total amount</Typography>
        <Typography variant='body2'>{formatMoney(totalDonation)}</Typography>
      </TotalRow>
      <InfoTypography>
        You will be sending <b>{formatMoney(amount)}</b> every month,
        until <b>{format(addMonths(new Date(), monthsCount), 'MMMM yyyy')}</b>. Thank you!
      </InfoTypography>
    </Root>
  )
}
