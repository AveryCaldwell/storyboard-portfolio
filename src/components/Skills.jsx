import * as React from 'react';
import * as Material from '@mui/material';
// import * as Icons from '@mui/icons-material';
// ICONS
// import SettingsIcon from "@mui/icons-material/Settings";
// import CreateIcon from "@mui/icons-material/Create";
// import ColorLensIcon from "@mui/icons-material/ColorLens";
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
    const handleClick = () => {
        console.log('Skills handler');
        props.setCurrentPage('Resume');
    };
    //This is where you add content for the card.
    return (
        <>
            <Material.Button
                className=''
                sx={cardButtonStyle}
                onClick={() => handleClick()}
                variant='contained'
            >
                Show Me More!
            </Material.Button>
        </>
    );
}

//  Function to render Skills component
function Skills(props) {
    // function handleClick() {
    //     console.log('Skills handler');
    //     props.setCurrentPage('Resume');
    // }
    const skillsData = {
        creator: [
            {
                title: 'Creator',
                image: avesCreate,
                subtitle: 'Frameworks',
                description: 'Material, Tailwind, Bootstrap, Anime.js',
            },
        ],
        frontend: [
            {
                title: 'Frontend',
                image: avesFront,
                subtitle: 'Languages',
                description: 'HTML, CSS, Javascript, React',
            },
        ],
        backend: [
            {
                title: 'Backend',
                image: avesBack,
                subtitle: 'Languages',
                description: 'Apollo, GraphQL, MySQL, NoSQL',
            },
        ],
    };
    console.log(skillsData); // Check if skillsData is populated correctly

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
                </ThemeProvider>
            )}
        </React.Fragment>
    );
}

export default Skills;
