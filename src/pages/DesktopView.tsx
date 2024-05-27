import { Header } from "../common/Header.tsx";
import { DonationPage } from "./donationPage/DonationPage.tsx";
import { styled } from "@mui/material/styles";
import { colors } from "../styles/colors.ts";

const Root = styled('div')(({ theme }) => ({
  position: 'relative',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.up('md')]: {
    backgroundColor: colors.stroke
  },
}));

const ViewContainer = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'auto'
  },
}));

const VerticalAlignSpacer = styled('div')`
    flex: 1;
`

export const DesktopView = () => {

  return (
    <Root>
      <Header/>
      <ViewContainer>
        <VerticalAlignSpacer/> {/*this small complication is to address scrolling issue*/}
        <DonationPage/>
        <VerticalAlignSpacer/>
      </ViewContainer>
    </Root>

  )
}
