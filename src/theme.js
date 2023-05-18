import { createTheme } from '@mui/material/styles';
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
    typography: {
        fontFamily: 'Montserrat',
    },
    shape: {
        borderRadius: 4,
    },
    overrides: {
        MuiSwitch: {
            root: {
                width: 42,
                height: 26,
                padding: 0,
                margin: 8,
            },
            switchBase: {
                padding: 1,
                '&$checked, &$colorPrimary$checked, &$colorSecondary$checked': {
                    transform: 'translateX(16px)',
                    color: '#fff',
                    '& + $track': {
                        opacity: 1,
                        border: 'none',
                    },
                },
            },
            thumb: {
                width: 24,
                height: 24,
            },
            track: {
                borderRadius: 13,
                border: '1px solid #bdbdbd',
                backgroundColor: '#fafafa',
                opacity: 1,
                transition:
                    'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
            },
        },
        MuiButton: {
            root: {
                background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                border: 0,
                borderRadius: 3,
                boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
                color: 'white',
                height: 48,
                padding: '0 30px',
            },
        },
    },
    props: {
        MuiList: {
            dense: true,
        },
        MuiMenuItem: {
            dense: true,
        },
        MuiTable: {
            size: 'small',
        },
    },
    spacing: 8,
    // mode: 'light',
    // primary: {
    //     main: '#3f51b5',
    // },
    // secondary: {
    //     main: '#ff4081',
    // },
});

export default theme;
