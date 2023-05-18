import React from 'react';
import * as Material from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
//MUI

//  Function to render Landing component
function Landing(props) {
    // function that handles the on click event of the button and renders About component
    function handleClick() {
        console.log('handler');
        props.setCurrentPage('About');
    }
    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                {props.currentPage === 'Landing' && (
                    <>
                        {/*  Landing content section */}
                        {/* FIXME : theming */}
                        <Material.Card
                            mt={2}
                            sx={{
                                border: '1px  grey',
                                '&:hover': {
                                    opacity: [0.9, 0.8, 0.7],
                                },
                            }}
                        >
                            {/* FIXME : theming */}
                            <h1 className='text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold'>
                                "Hi, I'm Avery
                            </h1>
                            {/* FIXME : theming */}
                            <p className='text-base md:text-xl mb-3 font-medium'>
                                Creative Thinker + Full Stack Web Developer"
                            </p>
                            <div>
                                {/* FIXME : theming */}
                                <Material.Button
                                    color='inherit'
                                    onClick={() => handleClick()}
                                >
                                    Show more!
                                </Material.Button>
                            </div>
                        </Material.Card>
                    </>
                )}
            </ThemeProvider>
        </React.Fragment>
    );
}

export default Landing;
