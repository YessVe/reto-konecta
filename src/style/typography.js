import { createTheme } from '@material-ui/core/styles';

export const themeTittle = createTheme({
    typography: {
      fontFamily: [
        'Nunito',
        'sans-serif',
      ].join(','),
    },});

export const themeGeneral = createTheme({
    typography: {
        fontFamily: [
        'Nunito Sans',
        'sans-serif',
        ].join(','),
    },});