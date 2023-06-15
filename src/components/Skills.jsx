import * as React from 'react';
import * as Material from '@mui/material';
// STYLING
import { Card } from './Card';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import { cardButtonStyle } from './Styles';
// IMAGE
import avesCreate from '../assets/avesCreate.png';
import avesFront from '../assets/avesFront.png';
import avesBack from '../assets/avesBack.png';

function Content(props) {
    //This is where you add content for the card.
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

//  Function to render Skills component
function Skills(props) {
    const handleClick = (targetPage) => {
        props.setCurrentPage(targetPage);
    };

    const skillsData = {
        creator: [
            {
                title: 'Creator',
                image: avesCreate,
                subtitle: 'Content Creation & Marketing Expertise',
                description: [
                    'Content Creation',
                    'Video Production/Editing',
                    'Social Media Marketing',
                    'Brand and Identity',
                    'Audience Engagement',
                ],
            },
        ],
        frontend: [
            {
                title: 'Frontend',
                image: avesFront,
                subtitle:
                    'Crafting Engaging User Interfaces with Modern Web Technologies',
                description: [
                    'HTML',
                    'CSS',
                    'Javascript',
                    'Responsive Web Design',
                    'UX Design',
                    'React',
                    'Vue.js',
                    'Anime.js',
                    'Material UI',
                    'Angular',
                    'jQuery',
                    'Bootstrap',
                ],
            },
        ],
        backend: [
            {
                title: 'Backend',
                image: avesBack,
                subtitle:
                    'Building Robust Server-Side Solutions and Database Integration',
                description: [
                    'Node.js',
                    'Express',
                    'Restful APIs',
                    'MongoDB',
                    'bycrypt',
                    'JSON Web Tokens',
                    'OATH',
                    'Apollo',
                    'GraphQL',
                    'MySQL',
                    'NoSQL',
                ],
            },
        ],
    };
    // Check if skillsData is populated correctly
    // console.log(skillsData);
    // TODO: make images lead to examples, whether that be github repos, or projects filtered?
    return (
        <React.Fragment>
            {props.currentPage === 'Skills' && (
                <ThemeProvider theme={theme}>
                    {skillsData.creator.map((data, index) => (
                        <Card key={index} data={data}>
                            <Content />
                        </Card>
                    ))}
                    {skillsData.frontend.map((data, index) => (
                        <Card key={index} data={data}>
                            <Content />
                        </Card>
                    ))}
                    {skillsData.backend.map((data, index) => (
                        <Card key={index} data={data}>
                            <Content />
                        </Card>
                    ))}
                    <Content handleClick={() => handleClick('Resume')} />
                </ThemeProvider>
            )}
        </React.Fragment>
    );
}

export default Skills;
