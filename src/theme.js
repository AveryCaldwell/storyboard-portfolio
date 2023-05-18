import { createTheme } from '@mui/material/styles';
import { createBox } from '@mui/system';

// A custom theme for this app
const theme = createTheme({
    // FIXME light and dark theme
    palette: {
        mode: 'dark',
        primary: {
            main: '#55828b',
            light: '#c9e4ca',
            dark: '#3b6064',
        },
        secondary: {
            main: '#f50057',
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
        },
    },
});

export default theme;
