import PeopleWithHeartIcon from "../../../assets/PeopleWithHeartIcon.tsx";
import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { colors } from "../../../styles/colors.ts";

const Root = styled('div')(({ theme }) => ({
  textAlign: 'center',
  backgroundColor: colors.salomon,
  color: theme.palette.primary.main,
  [theme.breakpoints.up('sm')]: {
    textAlign: 'left',
  },
}));

const StyledPeopleWithHeartIcon = styled(PeopleWithHeartIcon)(({ theme }) => ({
  width: 72,
  marginTop: theme.spacing(1),
}));

export interface GivingBlockProps {
  className?: string;
}

export const GivingBlock = (props: GivingBlockProps) => {
  return (
    <Root {...props}>
      <Grid container spacing={2.5}>
        <Grid item xs={12} sm='auto'>
          <StyledPeopleWithHeartIcon/>
        </Grid>
        <Grid item xs={12} sm sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <Typography variant='h3'>The giving block</Typography>
          <Typography variant='h6'>Set up your donation goal!</Typography>
        </Grid>
      </Grid>
    </Root>
  )
}
