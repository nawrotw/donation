import PeopleWithHeartIcon from "../assets/PeopleWithHeartIcon.tsx";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { colors } from "../styles/colors.ts";

const Root = styled('div')(({ theme }) => ({
  textAlign: 'center',
  backgroundColor: colors.salomon,
  color: theme.palette.primary.main,
  [theme.breakpoints.up('sm')]: {
    textAlign: 'left',
    padding: theme.spacing(3, 4, 3),
  },
}));

const StyledPeopleWithHeartIcon = styled(PeopleWithHeartIcon)(({ theme }) => ({
  width: 72,
  // paddingTop: theme.spacing(1),
  // paddingBottom: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    paddingBottom: theme.spacing(0),
  },
}));

// TODO wkn typography
export const Title = styled('div')`
    //font-family: Work Sans;
    font-size: 24px;
    font-weight: 600;
    line-height: 28px;
`;

// TODO wkn typography
export const Subtitle = styled('div')`
    //font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
`;


export interface GivingBlockProps {
  className?: string;
}

export const GivingBlock = (props: GivingBlockProps) => {
  return (
    <Root {...props}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm='auto'>
          <StyledPeopleWithHeartIcon/>
        </Grid>
        <Grid item xs={12} sm sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <Title>The giving block</Title>
          <Subtitle>Set up your donation goal!</Subtitle>
        </Grid>
      </Grid>
    </Root>
  )
}
