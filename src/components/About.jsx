import * as React from 'react';
import * as Material from '@mui/material';
// import * as Icons from '@mui/icons-material';
import SettingsIcon from '@mui/icons-material/Settings';
import CreateIcon from '@mui/icons-material/Create';
import ColorLensIcon from '@mui/icons-material/ColorLens';
// MUI theme
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
// IMAGE
import avesEmote from '../assets/aves_peace.png';

//  Function to render About component
function About(props) {
    // Media query for sizing
    const mediaSize = Material.useMediaQuery('(min-width:900px)');
    return (
        <React.Fragment>
            {props.currentPage === 'About' && (
                <ThemeProvider theme={theme}>
                    {/* FIXME : theming */}
                    <Material.Box
                        sx={{
                            ml: 'auto',
                            mr: 'auto',
                            mt: '150px',
                        }}
                    >
                        <Material.Typography variant='h1' component='h2'>
                            About
                            <img
                                src={avesEmote}
                                style={{
                                    height: '250px',
                                    width: '250px',
                                    // FIXME: theming
                                    backgroundColor: 'black',
                                    borderRadius: 300,
                                    border: '2px solid #e9f4e9',
                                    boxShadow: 5,
                                    cursor: 'pointer',
                                }}
                                alt='Aves Emote'
                                // onClick={() => props.setCurrentPage('Contact')}
                            />
                        </Material.Typography>
                        <Material.Grid container spacing={3}>
                            <Material.Grid item xl>
                                <Material.Typography
                                    variant='body1'
                                    gutterBottom
                                >
                                    I'm Avery. A full-stack developer with a
                                    marketing degree, blending design and coding
                                    skills.
                                </Material.Typography>
                            </Material.Grid>
                            <br />
                            <Material.Grid item m>
                                {/* FIXME do a .map to cycle through the list of items? */}
                                <CreateIcon></CreateIcon>
                                <Material.Typography variant='h5' gutterBottom>
                                    Designer/Creator
                                </Material.Typography>
                                <Material.Typography variant='h6' gutterBottom>
                                    Frameworks
                                </Material.Typography>
                                <Material.Typography variant='h6' gutterBottom>
                                    Design Tools:
                                </Material.Typography>
                            </Material.Grid>
                            <Material.Grid item m>
                                <ColorLensIcon></ColorLensIcon>
                                <Material.Typography variant='h5' gutterBottom>
                                    Frontend Developer
                                </Material.Typography>
                                <Material.Typography variant='h6' gutterBottom>
                                    Languages:
                                </Material.Typography>
                                <Material.Typography variant='h6' gutterBottom>
                                    Dev Tools:
                                </Material.Typography>
                            </Material.Grid>
                            <Material.Grid item m>
                                <SettingsIcon></SettingsIcon>
                                <Material.Typography variant='h5' gutterBottom>
                                    Backend Developer
                                </Material.Typography>
                                <Material.Typography variant='h6' gutterBottom>
                                    Languages:
                                </Material.Typography>

                                <Material.Typography variant='h6' gutterBottom>
                                    Dev Tools:
                                    <Material.Typography
                                        variant='body1'
                                        gutterBottom
                                    >
                                        Apollo
                                    </Material.Typography>
                                </Material.Typography>
                            </Material.Grid>
                        </Material.Grid>
                        <Material.Typography variant='caption' gutterBottom>
                            Explore my projects and let's build something
                            amazing together! 🚀
                        </Material.Typography>
                    </Material.Box>
                </ThemeProvider>
            )}
        </React.Fragment>
    );
}

export default About;
