import React from 'react';
//MUI
import * as Material from '@mui/material';
import theme from '../theme';
import { ThemeProvider } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
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
    const cardStyle = [
        {
            display: mediaSize ? 'flex' : 'block',
            mt: '150px',
            p: 5,
            maxWidth: '900px',
            minWidth: '400px',
            flexWrap: 'no-wrap',
            fontSize: '30px',
            flexDirection: 'column',
        },
    ];
    // const boxStyle = [
    //     {
    //         width: 'calc(100% - 120px)',
    //         display: 'flex',
    //         justifyContent: 'center',
    //         marginLeft: '120px',
    //         padding: 10,
    //         position: 'absolute',
    //         borderRadius: '12px',
    //         minWidth: '400px',
    //         maxWidth: '1200px',
    //     },
    // ];
    // Array of projects
    const projects = [
        {
            avatarColor: blue[500],
            title: 'TasteBuds',
            subheader: 'Project 3',
            image: { buds },
            description:
                'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
        },
        {
            avatarColor: blue[500],
            title: 'CheersCheck',
            subheader: 'Project 2',
            image: { CC },
            description:
                'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
        },
        {
            avatarColor: blue[500],
            title: 'WearYouWander',
            subheader: 'Project 1',
            image: { WYW },
            description:
                'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
        },
        {
            avatarColor: blue[500],
            title: 'TechBlog',
            subheader: 'MVC',
            image: { team },
            description:
                'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
        },
        {
            avatarColor: blue[500],
            title: 'Weather',
            subheader: 'FrontEnd',
            image: { weather },
            description:
                'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
        },
        {
            avatarColor: blue[500],
            title: 'Work',
            subheader: 'BackEnd',
            image: { work },
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
