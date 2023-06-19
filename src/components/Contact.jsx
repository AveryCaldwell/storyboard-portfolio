import * as React from 'react';
import * as Material from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import {
    formStyle,
    cardStyle,
    formHeaderStyle,
    cardHeaderStyle,
    boxStyle,
    cardListStyle,
    cardButtonStyle,
    formTextFieldStyle,
} from './Styles';
import theme from '../theme';

function ContactForm({ setCurrentPage }) {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform form submission logic here
        const name = event.target.elements.name.value;
        const email = event.target.elements.email.value;
        const message = event.target.elements.message.value;

        const mailtoURL = `mailto:averycaldwell7@gmail.com: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;

        window.location.href = mailtoURL;
        setCurrentPage('About');
    };
    return React.createElement(
        'form',
        { onSubmit: handleSubmit },
        React.createElement(Material.TextField, {
            id: 'name',
            label: 'Name',
            variant: 'outlined',
            required: true,
            margin: 'normal',
        }),

        React.createElement('br'),
        React.createElement(Material.TextField, {
            id: 'email',
            label: 'Email',
            type: 'email',
            variant: 'outlined',
            required: true,
            margin: 'normal',
            sx: { formTextFieldStyle },
        }),
        React.createElement('br'),
        React.createElement(Material.TextField, {
            id: 'message',
            label: 'Message',
            multiline: true,
            rows: 4,
            variant: 'outlined',
            required: true,
            margin: 'normal',
            sx: { formTextFieldStyle },
        }),
        React.createElement('br'),

        React.createElement(
            Material.Button,
            {
                type: 'submit',
                variant: 'contained',
                sx: { cardButtonStyle },
            },
            'Submit'
        )
    );
}

function Contact({ currentPage, setCurrentPage }) {
    return (
        <React.Fragment>
            {currentPage === 'Contact' && (
                <ThemeProvider theme={theme}>
                    <Material.Box className='contactBox' sx={formStyle}>
                        <Material.Typography
                            variant='h3'
                            component='h1'
                            sx={formHeaderStyle}
                        >
                            Contact Me
                        </Material.Typography>
                        <Material.FormHelperText id='my-helper-text'>
                            Your info will not be shared.
                        </Material.FormHelperText>
                        <ContactForm setCurrentPage={setCurrentPage} />
                    </Material.Box>
                </ThemeProvider>
            )}
        </React.Fragment>
    );
}

export default Contact;
