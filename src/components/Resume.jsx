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
            {/* FIXME - MAKE RESUME DOWNLOADABLE */}
            <Material.Button
                className='downloadBtn'
                sx={cardButtonStyle}
                // onClick={props.handleClick}
                variant='contained'
            >
                <a href='../../public/files/resume.pdf' download>
                    Click to download
                </a>
            </Material.Button>
            <Material.Button
                className='toContactBtn'
                sx={cardButtonStyle}
                onClick={props.handleClick}
                variant='contained'
            >
                Contact Me!
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
        info: [
            {
                title: 'Avery Caldwell',
                image: avesCreate,
                subtitle: 'Seattle, Washington',
                description: [
                    'Phone: 601-506-1057 |',
                    'Email: averycaldwell7@gmail.com',
                    'Github: https://github.com/AveryCaldwelll |',
                    'Portfolio: https://github.com/AveryCaldwell/postgrad-portfolio',
                ],
            },
        ],
        // TODO project links
        projects: [
            {
                title: 'Projects ',
                image: avesCreate,
                subtitle: ['Wear You Wander', 'Cheers Check', 'TasteBuds'],
                description: [
                    ' Wear You Wander is an application that uses 2 server-side APIs with client-side storage to analyze historical weather conditions to suggest accommodating outerwear.| As Team Lead for this project, I assigned tasks, created the concept of the application, worked with both APIs, and integrated the team’s work. | HTML, CSS, Foundation Framework, JavaScript, and jQuery',
                    'A new liquor inventory application - the perfect tool for anyone who enjoys keeping track of their favorite spirits! You can easily organize your liquor collection, keep track of what you have on hand. | As Team Lead for this project, I assigned tasks, created the concept of the application, worked with both APIs, and integrated the team’s work.| HTML, CSS, Bootstrap, JavaScript, MySQL, Sequelize, Handlebars.js. Node, Express, Heroku, and Anime.js jQuery',
                    'A social media app that allows users to never dine alone again! This app allows the user to create a profile, see other users posts, create posts and comments, and join other events! | As a Team Member, I ensured app functionality and that acceptance criteria was met, as well as, created the concept of the application and integrated the front to the backend. | HTML, CSS, Javascript, Tailwind, Express, Node, Heroku, MongoDB, Mongoose, MongoCompass, Apollo, GraphQL, React',
                ],
            },
        ],
        technical: [
            {
                title: 'Technical Skills ',
                image: avesCreate,
                subtitle: ['Technologies:', 'Frameworks and Libraries'],
                description: [
                    'JavaScript, HTML, CSS,, React, MERN, MySQL, NoSQL, GraphQL, Apollo, MongoDB, Insomnia, Heroku, Postman, OAth, Restful APIs, Jest, Git, Github, Gitlab, JSON Web Tokens, Wordpress, Passport.js',
                ],
            },
        ],
        experience: [
            {
                title: 'Experience ',
                image: avesFront,
                subtitle:
                    'Suspicious Activity Investigator - BSA/AML | June 2018 - Aug 2023 | BankPlus',
                description: [
                    "Streamlined operations by developing and implementing compliance procedures and guidelines for cross-functional operations teams, resulting in an increase in process efficiency and improved collaboration among departments. | Utilized critical thinking skills to evaluate risk levels of customer behavior, including transactional trends and historical statistics, effectively preventing money laundering and ensuring regulatory compliance. | Protected the company's reputation and financial well-being by leading investigations into systemwide suspicious activities | Key Accomplishments: Played a pivotal role as a liaison to newly acquired banks, driving successful training and transition processes. Selected as a distinguished representative to attend the esteemed BSA/AML Conference, showcasing the Bank's commitment to regulatory compliance and industry best practices.",
                ],
            },
        ],
        education: [
            {
                title: 'Education',
                image: avesBack,
                subtitle: [
                    'Certificate in Full Stack Development:',
                    'Bachelors of Science in Marketing',
                    'Business Program Certificate',
                ],
                description: [
                    ' University of Washington, Seattle, WA | May 2023 | A 24 week intensive program focused on gaining skills in front end and back end technologies.',
                    'Mississippi College, Clinton, MS | 2012-2016 |',
                    'Chung Yuan Christian University, Taipei, Taiwan | Summer 2015 | A two month program focused on gaining international business skills and adapting to new environments.',
                ],
            },
        ],
    };
    return (
        <React.Fragment>
            {props.currentPage === 'Resume' && (
                <ThemeProvider theme={theme}>
                    <Material.Grid
                        container
                        spacing={4}
                        sx={{
                            display: 'flex',
                            maxWidth: '1200px',
                            flexWrap: 'wrap',
                            justifyContent: 'space-evenly',
                            height: '100vh',
                            overflow: 'scroll',
                        }}
                    >
                        <Material.Typography
                            variant='h1'
                            sx={{
                                textAlign: 'center',
                                padding: 1,
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                alignItems: 'center',
                            }}
                        >
                            Resume
                        </Material.Typography>
                        {/* INFO */}
                        {resumeData.info.map((data, index) => (
                            <Card key={index} data={data}>
                                {/* <Content /> */}
                            </Card>
                        ))}
                        {/* TECHNICAL */}
                        {resumeData.technical.map((data, index) => (
                            <Card key={index} data={data}>
                                {/* <Content /> */}
                            </Card>
                        ))}
                        {/* PROJECTS */}
                        {resumeData.projects.map((data, index) => (
                            <Card key={index} data={data}>
                                {/* <Content /> */}
                            </Card>
                        ))}
                        {/* EXPERIENCE */}
                        {resumeData.experience.map((data, index) => (
                            <Card key={index} data={data}>
                                {/* <Content /> */}
                            </Card>
                        ))}
                        {/* EDUCATION */}
                        {resumeData.education.map((data, index) => (
                            <Card key={index} data={data}>
                                {/* <Content /> */}
                            </Card>
                        ))}
                        <Content handleClick={() => handleClick('Contact')} />
                    </Material.Grid>
                </ThemeProvider>
            )}
        </React.Fragment>
    );
}

export default Resume;
