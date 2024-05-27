import { ThemeProvider } from "@emotion/react";
import { CssBaseline, useTheme, useMediaQuery } from "@mui/material";
import { ReactElement } from "react";
import { buildTheme } from "../../styles/theme.ts";

export const themeWrapper = <T, >(ComponentFn: (props: T) => ReactElement) => (props: T) => {
  const { breakpoints } = useTheme();
  const isMobile = useMediaQuery(breakpoints.down('sm'));

  return (
    <ThemeProvider theme={buildTheme(isMobile)}>
      <CssBaseline/>
      {ComponentFn(props)}
    </ThemeProvider>
  );
};


