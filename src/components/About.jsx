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
// TODO:
// about extends card and then feed in the data you want into the card
//  Function to render About component
function Content() {
    //This is where you add content for the card.
    return (
        <>
            <Material.Typography variant='caption' gutterBottom>
                Explore my projects and let's build something amazing together!
                🚀
            </Material.Typography>
            <Material.Button
                sx={{
                    position: 'relative',
                    display: 'flex',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                }}
                onClick={() => handleClick()}
                variant='contained'
            >
                See my projects!
            </Material.Button>
        </>
    );
}
function About(props) {
    // TODO: now the about page isnt rendering?
    const handleClick = () => {
        console.log('About handler');
        props.setCurrentPage('Projects');
    };
    // Media query for sizing
    const mediaSize = Material.useMediaQuery('(min-width:900px)');
    const aboutData = {
        title: 'About',
        image: avesEmote,
        subtitle: 'I am Avery, a full-stack developer with a marketing degree.',
        description: ' I make blending design and coding skills look EZ.',
    };

    return (
        <React.Fragment>
            {props.currentPage === 'About' && (
                <ThemeProvider theme={theme}>
                    <Material.Box className='aboutBox'>
                        <Card data={aboutData}>
                            <Content />
                        </Card>
                    </Material.Box>
                </ThemeProvider>
            )}
        </React.Fragment>
    );
}

export default About;
