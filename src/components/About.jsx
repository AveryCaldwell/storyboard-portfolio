import * as React from 'react';
import * as Material from '@mui/material';
import { Card } from './Card';
// import * as Icons from '@mui/icons-material';
// MUI theme
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import { boxStyle } from './Styles';
// IMAGE
import avesEmote from '../assets/aves_peace.png';

//  Function to render About component
function About(props) {
    const handleClick = () => {
        console.log('About handler');
        props.setCurrentPage('Projects');
    };
    // Media query for sizing
    const mediaSize = Material.useMediaQuery('(min-width:900px)');

    return (
        <React.Fragment>
            {props.currentPage === 'About' && (
                <ThemeProvider theme={theme}>
                    <Card />
                    {/* <Material.Box className='aboutBox' sx={boxStyle}>
                        <Material.Typography
                            variant='h1'
                            component='h2'
                            sx={{
                                padding: '5px',
                                margin: '0',
                                textAlign: 'center',
                                position: 'absolute',
                            }}
                        >
                            About
                        </Material.Typography>
                        <br />

                        <Material.Box
                            className='aboutContent'
                            sx={{
                                //   position: 'fixed',
                                display: 'flex',
                                border: '1px solid black',
                                borderRadius: '12px',
                                alignItems: 'center',
                                flexDirection: 'column',
                                marginTop: '150px',
                                //   width: "780px",
                                width: '500px',
                            }}
                        >
                            <img
                                src={avesEmote}
                                style={{
                                    height: '125px',
                                    width: '125px',
                                    borderRadius: '300px',
                                    border: '2px solid #e9f4e9',
                                    boxShadow: 5,
                                    cursor: 'pointer',
                                    position: 'sticky',
                                    // top: "180px",
                                    // left: "10px",
                                    // FIXME: theming
                                    backgroundColor: 'black',
                                    marginRight: '500px',
                                    marginTop: '-55px',
                                }}
                                alt='Aves Emote'
                                // onClick={() => props.setCurrentPage('Contact')}
                            />

                            <Material.Grid container spacing={3}>
                                <Material.Grid item xl>
                                    <Material.Typography
                                        variant='body1'
                                        gutterBottom
                                    >
                                        I'm Avery. A full-stack developer with a
                                        marketing degree, blending design and
                                        coding skills.
                                    </Material.Typography>
                                </Material.Grid>
                                <br />
                                <Material.Grid item m>
                                    <CreateIcon></CreateIcon>
                                    <Material.Typography
                                        variant='h5'
                                        gutterBottom
                                    >
                                        Lorem ipsum dolor sit, amet consectetur
                                        adipisicing elit. Labore rem quis ab
                                        atque modi explicabo expedita aliquid
                                        aperiam aliquam, illum est temporibus
                                        laboriosam enim a optio natus, facere
                                        recusandae sunt.
                                    </Material.Typography>
                                </Material.Grid>
                                <Material.Grid item m></Material.Grid>
                            </Material.Grid> */}

                    <Material.Button
                        onClick={() => handleClick()}
                        variant='contained'
                    >
                        See my projects!
                    </Material.Button>
                    {/* </Material.Box> */}
                    {/* </Material.Box> */}
                </ThemeProvider>
            )}
        </React.Fragment>
    );
}

export default About;
