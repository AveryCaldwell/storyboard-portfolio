import * as React from 'react';
import * as Material from '@mui/material';
// MUI theme
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';

//  Function to render About component
function About(props) {
    // Media query for sizing
    const mediaSize = Material.useMediaQuery('(min-width:900px)');
    return (
        <React.Fragment>
            {props.currentPage === 'About' && (
                <ThemeProvider theme={theme}>
                    {/* FIXME : theming */}
                    <Material.Card>About</Material.Card>
                </ThemeProvider>
            )}
        </React.Fragment>
    );
}

export default About;
