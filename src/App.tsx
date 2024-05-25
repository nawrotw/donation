import './App.scss'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider } from "@emotion/react";
import { defaultTheme } from "./styles/theme.ts";
import { DonationPage } from "./pages/DonationPage.tsx";
import { styled } from "@mui/material/styles";
import { colors } from "./styles/colors.ts";
import { CssBaseline } from "@mui/material";

const Root = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: ${colors.stroke};
`;

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Root>
        <DonationPage/>
      </Root>
    </ThemeProvider>
  )
}

export default App;

