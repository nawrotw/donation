import { styled } from "@mui/material/styles";
import { colors } from "../styles/colors.ts";
import { Typography } from "@mui/material";
import { TypographyProps } from "@mui/material/Typography/Typography";
import { format } from "date-fns";
import { calcMonthsCount } from "../pages/utils/monthCalculations.ts";

const borderRadius = 4;
const Root = styled('div')(({ theme }) => ({
  border: `1px solid ${colors.stroke}`,
  borderRadius,
  [theme.breakpoints.up('sm')]: {
    border: 'none'
  },
}));

const TotalRow = styled('div')`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${({ theme }) => theme.spacing(3, 2, 3, 2)};
`;

const InfoTypography = styled(({ children, ...rest }: TypographyProps) =>
  <Typography variant='subtitle1' {...rest}>{children}</Typography>
)(({ theme }) => ({
  backgroundColor: colors.background2,
  padding: theme.spacing(3, 2, 3, 2),
  borderBottomRightRadius: borderRadius - 1, // to make smoother transition between container border and Info element
  borderBottomLeftRadius: borderRadius - 1,
}));

interface DonationSummaryProps {
  amount: number;
  untilDate: Date;
}

export const DonationSummary = ({ amount, untilDate }: DonationSummaryProps) => {
  const monthsCount = calcMonthsCount(untilDate);
  const total = amount * monthsCount;

  return (
    <Root>
      <TotalRow>
        <Typography variant='body1'>Total amount</Typography>
        <Typography variant='body2'>{total}</Typography>
      </TotalRow>
      <InfoTypography>
        You will be sending <b>{amount}</b> every month,
        until <b>{format(untilDate, 'MMMM yyyy')}</b>. Thank you!
      </InfoTypography>
    </Root>
  )
}
