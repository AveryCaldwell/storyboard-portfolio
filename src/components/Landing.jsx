import React from 'react';
import avesLogo from '../assets/aves-pizza.png';
//MUI
import * as Material from '@mui/material';
import theme from '../theme';
import { ThemeProvider } from '@mui/material/styles';

//  Function to render Landing component
function Landing(props) {
    // function that handles the on click event of the button and renders About component
    function handleClick() {
        console.log('handler');
        props.setCurrentPage('About');
    }
    const mediaSize = Material.useMediaQuery('(min-width:900px)');
    const mediaSmall = Material.useMediaQuery('(min-width:400px)');
    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                {props.currentPage === 'Landing' && (
                    <>
                        <Material.Card
                            className='landingCard'
                            sx={{
                                display: mediaSize ? 'flex' : 'inline-block',
                                mt: '150px',
                                mx: 'auto',
                                p: 5,
                                maxWidth: '75%',
                                height: '50vh',
                                flexWrap: 'wrap',
                                fontSize: '2rem',
                                flexDirection: 'column',
                            }}
                        >
                            {/* LOGO IMAGE*/}
                            <Material.CardMedia
                                sx={{
                                    display: mediaSize ? 'flex' : 'none',
                                    flexDirection: 'column',
                                    mt: 'auto',
                                    mb: 'auto',
                                }}
                                src={avesLogo}
                                component='img'
                                style={{
                                    mt: '150px',
                                    p: 5,
                                    height: '250px',
                                    width: '250px',
                                    borderRadius: 300,
                                    border: '2px solid #e9f4e9',
                                    boxShadow: 2,
                                    marginRight: 10,
                                    cursor: 'pointer',
                                }}
                                title='Aves Logo'
                                onClick={() => props.setCurrentPage('About')}
                            />
                            {/* FIXME : theming */}
                            <Material.CardContent
                                sx={{
                                    mt: '150px',
                                    textAlign: 'center',
                                    alignItems: 'center',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    overflow: 'hidden',
                                    flexDirection: 'column',
                                    whiteSpace: 'pre',
                                }}
                            >
                                <Material.Typography
                                    gutterBottom
                                    variant='h5'
                                    component='div'
                                >
                                    {/* FIXME add some type of color or animation to name */}
                                    Hi, I'm Avery
                                </Material.Typography>
                                <Material.Typography
                                    variant='body2'
                                    color='text.secondary'
                                >
                                    Creative Thinker + Full Stack Web Developer
                                </Material.Typography>
                                <br />
                                <Material.CardActions>
                                    {/* FIXME : theming */}
                                    {/* Button */}
                                    <Material.Button
                                        variant='contained'
                                        onClick={() => handleClick()}
                                    >
                                        Show more{' '}
                                    </Material.Button>
                                </Material.CardActions>
                            </Material.CardContent>
                        </Material.Card>
                        {/* </Material.Box> */}
                    </>
                )}
            </ThemeProvider>
        </React.Fragment>
    );
}

export default Landing;
