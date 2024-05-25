import { styled } from "@mui/material/styles";
import { colors } from "../styles/colors.ts";
import { Typography } from "@mui/material";
import { TypographyProps } from "@mui/material/Typography/Typography";
import { format, addMonths } from "date-fns";

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
  monthsCount: number;
}

export const DonationSummary = ({ amount, monthsCount }: DonationSummaryProps) => {
  // TODO wkn is first donation is done immediate on submit?
  // so if now is 2024-05 and we set monthUntil: 2024-06 donations count === 2?
  const total = amount * (monthsCount + 1); // +1 for immediate donation

  return (
    <Root>
      <TotalRow>
        <Typography variant='body1'>Total amount</Typography>
        <Typography variant='body2'>{total}</Typography>
      </TotalRow>
      <InfoTypography>
        You will be sending <b>{amount}</b> every month,
        until <b>{format(addMonths(new Date(), monthsCount), 'MMMM yyyy')}</b>. Thank you!
      </InfoTypography>
    </Root>
  )
}
