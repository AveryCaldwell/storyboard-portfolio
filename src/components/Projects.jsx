import React from 'react';
//MUI
import * as Material from '@mui/material';
import theme from '../theme';
import { ThemeProvider } from '@mui/material/styles';
// STYLING
//  Function to render Landing component
function Projects(props) {
    const handleClick = () => {
        console.log('Projects I handler');
        props.setCurrentPage('Skills');
    };
    const mediaSize = Material.useMediaQuery('(min-width:900px)');
    const cardStyle = [
        {
            display: mediaSize ? 'flex' : 'block',
            mt: '150px',
            p: 5,
            maxWidth: '900px',
            minWidth: '400px',
            flexWrap: 'no-wrap',
            fontSize: '30px',
            flexDirection: 'column',
        },
    ];
    const boxStyle = [
        {
            width: 'calc(100% - 120px)',
            display: 'flex',
            justifyContent: 'center',
            marginLeft: '120px',
            padding: 10,
            position: 'absolute',
            borderRadius: '12px',
            minWidth: '400px',
            maxWidth: '1200px',
            overflow: 'scroll',
        },
    ];
    // function that handles the on click event of the button and renders Projects component
    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                {props.currentPage === 'Projects' && (
                    <>
                        <Material.Grid sx={boxStyle}>
                            <Material.Card sx={cardStyle}>
                                Projects
                            </Material.Card>
                            <Material.Button
                                onClick={() => handleClick()}
                                variant='contained'
                            >
                                See my Skills!
                            </Material.Button>
                        </Material.Grid>
                    </>
                )}
            </ThemeProvider>
        </React.Fragment>
    );
}

export default Projects;
