import { Theme, createTheme, alpha } from "@mui/material";
import { colors } from "./colors.ts";

export const defaultTheme: Theme = createTheme({
  spacing: 8,
  components: {
    //MuiButtonBase
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        disableRipple: true,
      },
      styleOverrides: {
        contained: {
          boxShadow: 'none',
          backgroundColor: colors.midnightPurple,
          "&:hover": {
            boxShadow: 'none',
            backgroundColor: "#645D93"
            // backgroundColor: lighten(colors.midnightPurple, 0.2)
          },
          "&:active": {
            boxShadow: 'none',
            backgroundColor: "#241E47",
            // backgroundColor: darken(colors.midnightPurple, 0.2)
          },
        },
        outlined: {
          // boxShadow: 'none',
          color: colors.purpleGray,
          borderColor: alpha(colors.purpleGray, 1),
          "&:hover": {
            borderColor: colors.purpleGray,
            backgroundColor: alpha(colors.lightPurple, 0.1),
            // backgroundColor: '#B2A7F41A',
          },
          "&:active": {
            borderColor: colors.purpleGray,
            backgroundColor: alpha(colors.lightPurple, 0.25),
          },
        },
      },
    },
  },
});
