import './App.scss'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider } from "@emotion/react";
import { buildTheme } from "./styles/theme.ts";
import { DonationPage } from "./pages/donationPage/DonationPage.tsx";
import { styled } from "@mui/material/styles";
import { colors } from "./styles/colors.ts";
import { CssBaseline, useMediaQuery, useTheme } from "@mui/material";

const Root = styled('div')(({ theme }) => ({
  position: 'relative',
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: colors.stroke
  },
}));


function App() {

  const { breakpoints } = useTheme();
  const isMobile = useMediaQuery(breakpoints.down('sm'));

  return (
    <ThemeProvider theme={buildTheme(isMobile)}>
      <CssBaseline/>
      <Root>
        <DonationPage/>
      </Root>
    </ThemeProvider>
  )
}

export default App;


