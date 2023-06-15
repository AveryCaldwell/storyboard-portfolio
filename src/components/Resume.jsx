import * as React from 'react';
import * as Material from '@mui/material';
//STYLING
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import { Card } from './Card';
import { boxStyle, cardButtonStyle } from './Styles';
// IMAGE
import avesCreate from '../assets/avesCreate.png';
import avesFront from '../assets/avesFront.png';
import avesBack from '../assets/avesBack.png';

//This is where you add content for the card.
function Content(props) {
    return (
        <>
            <Material.Button
                className=''
                sx={cardButtonStyle}
                onClick={props.handleClick}
                variant='contained'
            >
                Show Me More!
            </Material.Button>
        </>
    );
}
//  Function to render Resume component
function Resume(props) {
    function handleClick() {
        console.log('Resume handler');
        props.setCurrentPage('Contact');
    }
    const resumeData = {
        creator: [
            {
                title: ' ',
                image: avesCreate,
                subtitle: '',
                description: [],
            },
        ],
        frontend: [
            {
                title: ' ',
                image: avesFront,
                subtitle: '',
                description: [],
            },
        ],
        backend: [
            {
                title: ' ',
                image: avesBack,
                subtitle: '',
                description: [],
            },
        ],
    };
    return (
        <React.Fragment>
            {props.currentPage === 'Resume' && (
                <ThemeProvider theme={theme}>
                    {resumeData.creator.map((data, index) => (
                        <Card key={index} data={data}>
                            <Content />
                        </Card>
                    ))}
                    <Content handleClick={() => handleClick('Contact')} />
                </ThemeProvider>
            )}
        </React.Fragment>
    );
}

export default Resume;
