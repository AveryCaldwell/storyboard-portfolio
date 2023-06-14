import * as React from 'react';
import * as Material from '@mui/material';
import { Card } from './Card';
import { cardButtonStyle } from './Styles';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import avesEmote from '../assets/aves_peace.png';

// TODO:
// about extends card and then feed in the data you want into the card
//  Function to render About component
function Content(props) {
    const handleClick = () => {
        // console.log('About handler');
        props.setCurrentPage('Projects');
    };
    //This is where you add content for the card.
    return (
        <>
            <Material.Typography variant='caption' gutterBottom>
                Explore my projects and let's build something amazing together!
                🚀
            </Material.Typography>
            <Material.Button
                sx={cardButtonStyle}
                onClick={() => handleClick()}
                variant='contained'
            >
                See my projects!
            </Material.Button>
        </>
    );
}
function About(props) {
    // Media query for sizing
    const mediaSize = Material.useMediaQuery('(min-width:900px)');
    const aboutData = {
        title: 'About',
        image: avesEmote,
        subtitle:
            'Hi there! I am Avery. I grew up in the South but recently moved to Seattle, WA last October to attend the University of Washington coding bootcamp. After working 5 years in the banking industry, I wanted a change. So I threw comfort out the window, moved across the country, and dove into something I never thought I could do, programming! ',
        description:
            'Thanks to my marketing degree, I make blending design and coding skills look EZ. But when I am not coding, I am creating content, watching trash reality tv, exploring and gaming. Another passion of mine is mental health. For the past 2 years, I have raised over $3,000 for the American Foundation for Suicide Prevention with the help of the online community that I created.',
    };

    return (
        <React.Fragment>
            {props.currentPage === 'About' && (
                <ThemeProvider theme={theme}>
                    <Material.Box className='aboutBox'>
                        <Card data={aboutData}>
                            <Content setCurrentPage={props.setCurrentPage} />
                        </Card>
                    </Material.Box>
                </ThemeProvider>
            )}
        </React.Fragment>
    );
}

export default About;
