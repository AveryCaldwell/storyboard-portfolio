import React from 'react';
//MUI
import * as Material from '@mui/material';
import theme from '../theme';
import { ThemeProvider } from '@mui/material/styles';
import { blue, green, teal, pink, purple, orange } from '@mui/material/colors';
import { boxStyle } from './Styles';
// IMAGES
import buds from '../assets/buds.png';
import team from '../assets/team.png';
import weather from '../assets/weather.png';
import work from '../assets/work.png';
import WYW from '../assets/WYW.png';
import CC from '../assets/CC.png';

// STYLING
//  Function to render Landing component
function Projects(props) {
    const handleClick = () => {
        console.log('Projects handler');
        props.setCurrentPage('Skills');
    };
    const mediaSize = Material.useMediaQuery('(min-width:900px)');

    // Array of projects
    const projects = [
        {
            avatarColor: blue[100],
            title: 'TasteBuds',
            subheader: 'Project 3',
            image: buds,
            description:
                'A social media app that allows users to never dine alone again! This app allows the user to create a profile, see other users posts, create posts, and join other events!',
        },
        {
            avatarColor: orange[200],
            title: 'CheersCheck',
            subheader: 'Project 2',
            image: CC,
            description:
                'A new liquor inventory application - the perfect tool for anyone who enjoys keeping track of their favorite spirits! You can easily organize your liquor collection, keep track of what you have on hand, and share it with your friends.',
        },
        {
            avatarColor: green[300],
            title: 'WearYouWander',
            subheader: 'Project 1',
            image: WYW,
            description:
                'An application that analyzes the weather and suggests which type of outerwear would be most suitable.',
        },
        {
            avatarColor: pink[400],
            title: 'TechBlog',
            subheader: 'MVC',
            image: team,
            description:
                'CMS-style blog site where developers can publish their blog posts & comment on other developers’ posts as well. Using Handlebars.js as the templating language, Sequelize as the ORM, and express-session npm package for authentication.',
        },
        {
            avatarColor: teal[500],
            title: 'Weather',
            subheader: 'FrontEnd',
            image: weather,
            description:
                'A weather app that includes a search option, a list of cities, and a five-day forecast and current weather conditions for any city.',
        },
        {
            avatarColor: purple[600],
            title: 'Work',
            subheader: 'BackEnd',
            image: work,
            description:
                "A command-line application that manages a company's employee database, using Node.js, Inquirer, and MySQL.",
        },
    ];

    // function that handles the on click event of the button and renders Projects component
    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                {props.currentPage === 'Projects' && (
                    <>
                        <Material.Box sx={boxStyle}>
                            {projects.map((project, index) => (
                                <Material.Card
                                    key={index}
                                    sx={{ maxWidth: 345 }}
                                >
                                    <Material.Button
                                        onClick={() => handleClick()}
                                        variant='contained'
                                    >
                                        See my Skills!
                                    </Material.Button>
                                    <Material.CardHeader
                                        avatar={
                                            <Material.Avatar
                                                sx={{
                                                    bgcolor:
                                                        project.avatarColor,
                                                }}
                                                aria-label='recipe'
                                            >
                                                R
                                            </Material.Avatar>
                                        }
                                        title={project.title}
                                        subheader={project.subheader}
                                    />
                                    <Material.CardMedia
                                        component='img'
                                        height='194'
                                        image={project.image}
                                        alt='Paella dish'
                                    />
                                    <Material.CardContent>
                                        <Material.Typography
                                            variant='body2'
                                            color='text.secondary'
                                        >
                                            {project.description}
                                        </Material.Typography>
                                    </Material.CardContent>
                                    <Material.CardActions
                                        disableSpacing
                                    ></Material.CardActions>
                                </Material.Card>
                            ))}
                            {/* <Material.Button
                                onClick={() => handleClick()}
                                variant='contained'
                            >
                                See my Skills!
                            </Material.Button> */}
                        </Material.Box>
                    </>
                )}
            </ThemeProvider>
        </React.Fragment>
    );
}

export default Projects;
