import './App.scss'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider } from "@emotion/react";
import { buildTheme } from "./styles/theme.ts";
import { CssBaseline, useMediaQuery, useTheme } from "@mui/material";
import { MobileView } from "./pages/MobileView.tsx";
import { DesktopView } from "./pages/DesktopView.tsx";

function App() {

  const { breakpoints } = useTheme();
  const isMobile = useMediaQuery(breakpoints.down('sm'));

  return (
    <ThemeProvider theme={buildTheme(isMobile)}>
      <CssBaseline/>
      {isMobile && <MobileView/>}
      {!isMobile && <DesktopView/>}
    </ThemeProvider>
  )
}

export default App;


