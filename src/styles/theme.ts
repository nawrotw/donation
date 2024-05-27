import { alpha, ThemeOptions, createTheme } from "@mui/material";
import { colors } from "./colors.ts";
import { TypographyOptions } from "@mui/material/styles/createTypography";

export const defaultTheme: ThemeOptions = {
  spacing: 8,
  palette: {
    primary: {
      main: colors.midnightPurple,
      light: "#645D93", // lighten(colors.midnightPurple, 0.2)
      dark: "#241E47", // darken(colors.midnightPurple, 0.2)
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: colors.midnightGray,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 450,
      md: 600,
      lg: 900,
      xl: 1200,
    },
  },
  components: {
    //MuiButtonBase
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        disableRipple: true,
      },
      styleOverrides: {
        containedPrimary: {
          "&:hover": {
            boxShadow: 'none',
            backgroundColor: "#645D93"
          },
          "&:active": {
            boxShadow: 'none',
            backgroundColor: "#241E47",
          },
        },

        outlined: {
          color: colors.purpleGray,
          borderColor: alpha(colors.purpleGray, 1),
          "&:hover": {
            borderColor: colors.purpleGray,
            backgroundColor: alpha(colors.lightPurple, 0.1),
          },
          "&:active": {
            borderColor: colors.purpleGray,
            backgroundColor: alpha(colors.lightPurple, 0.25),
          },
        },

        // colorSecondary: { // this should work and take care for all of the variants
        //   main: '#FF5733',
        //   light: lighten("#FF5733", 0.5),
        //   dark: lighten("#FF5733", 0.5),
        // },
        textSecondary: {
          "&:hover": { backgroundColor: "#F3F5FE" },
          "&:active": { backgroundColor: "#E8EAF2" },
        },
      },
    },
  },
};

export const typographyMobile: TypographyOptions = {
  body1: {
    // fontFamily: "Work Sans",
    fontSize: 16,
    fontWeight: 500,
    color: colors.body1
  },
  body2: {
    // fontFamily: "Inter",
    fontSize: 24,
    fontWeight: 700,
    color: colors.purpleGray
  },
  subtitle1: {
    // fontFamily: "Work Sans",
    fontSize: 12,
    fontWeight: 400,
    color: colors.body1,
  }
};

export const typographyDesktop: TypographyOptions = {
  body1: {
    // fontFamily: "Work Sans",
    fontSize: 36,
    fontWeight: 500,
    color: colors.body1
  },
  body2: {
    // fontFamily: "Inter",
    fontSize: 24,
    fontWeight: 700,
    color: colors.purpleGray
  },
  subtitle1: {
    // fontFamily: "Work Sans",
    fontSize: 12,
    fontWeight: 400,
    color: colors.body1,
  }
};

export const buildTheme = (isMobile: boolean) => createTheme({
  ...defaultTheme,
  typography: isMobile ? typographyMobile : typographyDesktop
});
