import React from 'react';
import avesEmote from '../assets/question.png';
//MUI
import * as Material from '@mui/material';
import theme from '../theme';
import { ThemeProvider } from '@mui/material/styles';

//  Function to render Landing component
function Contact(props) {
    const mediaSize = Material.useMediaQuery('(min-width:900px)');
    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Form Submitted');
    };
    // function that handles the on click event of the button and renders About component
    const handleClick = () => {
        console.log('Contact handler');
        props.setCurrentPage('About');
    };

    const boxStyle = [
        {
            width: 'calc(100% - 200px)',
            display: 'flex',
            justifyContent: 'center',
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    ];
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
    const cardMediaStyle = [
        {
            marginLeft: 'calc(100 % - 120px)',
            height: '250px',
            width: '250px',
            // FIXME theme
            backgroundColor: 'gray',
            boxShadow: 2,
            cursor: 'pointer',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            display: mediaSize ? 'flex' : 'none',
            mx: 'auto',
        },
    ];
    const cardContentStyle = [
        {
            textAlign: 'center',
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
            overflow: 'hidden',
            flexDirection: 'column',
            wordWrap: 'break-word',
        },
    ];
    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                {props.currentPage === 'Contact' && (
                    <>
                        <Material.Box sx={boxStyle}>
                            <Material.Card
                                className='landingCard'
                                sx={cardStyle}
                            >
                                <Material.CardMedia
                                    src={avesEmote}
                                    component='img'
                                    sx={cardMediaStyle}
                                    title='Aves Logo'
                                    onClick={() =>
                                        props.setCurrentPage('About')
                                    }
                                />
                                <Material.CardContent
                                    sx={cardContentStyle}
                                ></Material.CardContent>
                                Contact Me
                                <Material.FormControl>
                                    <Material.FormLabel>
                                        Enter Name
                                    </Material.FormLabel>
                                    <Material.TextField
                                        type='text'
                                        variant='outlined'
                                        defaultValue='Name'
                                    />

                                    <form onSubmit={handleSubmit}>
                                        <Material.TextField label='Your message' />
                                    </form>
                                    <Material.Button
                                        variant='contained'
                                        onClick={() => handleClick()}
                                    >
                                        {' '}
                                        Send Message
                                    </Material.Button>
                                    {/* FIXME: add a popup like breadcrumb or something that says message sent */}
                                    <Material.FormGroup>
                                        Did you like this portfolio?
                                        <Material.Checkbox color='primary' />{' '}
                                        Yes
                                        <Material.Checkbox color='error' /> No
                                    </Material.FormGroup>
                                </Material.FormControl>
                            </Material.Card>
                        </Material.Box>
                    </>
                )}
            </ThemeProvider>
        </React.Fragment>
    );
}

export default Contact;
