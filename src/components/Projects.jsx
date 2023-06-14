import React from 'react';
//MUI
import * as Material from '@mui/material';
import theme from '../theme';
import { ThemeProvider } from '@mui/material/styles';
import { blue } from '@mui/material/colors';
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
            avatarColor: blue[500],
            title: 'TasteBuds',
            subheader: 'Project 3',
            image: buds,
            description:
                'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
        },
        {
            avatarColor: blue[500],
            title: 'CheersCheck',
            subheader: 'Project 2',
            image: CC,
            description:
                'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
        },
        {
            avatarColor: blue[500],
            title: 'WearYouWander',
            subheader: 'Project 1',
            image: WYW,
            description:
                'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
        },
        {
            avatarColor: blue[500],
            title: 'TechBlog',
            subheader: 'MVC',
            image: team,
            description:
                'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
        },
        {
            avatarColor: blue[500],
            title: 'Weather',
            subheader: 'FrontEnd',
            image: weather,
            description:
                'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
        },
        {
            avatarColor: blue[500],
            title: 'Work',
            subheader: 'BackEnd',
            image: work,
            description:
                'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
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
