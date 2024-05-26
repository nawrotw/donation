import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { ReactElement } from "react";
import { defaultTheme } from "../../styles/theme.ts";

export const themeWrapper = <T, >(ComponentFn: (props: T) => ReactElement) => (props: T) => (
  <ThemeProvider theme={defaultTheme}>
    <CssBaseline/>
    {ComponentFn(props)}
  </ThemeProvider>
);

