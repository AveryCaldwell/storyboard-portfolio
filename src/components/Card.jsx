import * as React from 'react';
import * as Material from '@mui/material';
// MUI theme
import {
    cardStyle,
    cardHeaderStyle,
    cardMediaStyle,
    cardListStyle,
} from './Styles';

// function that generates card component
export function Card(props) {
    const data = {
        title: 'Card Title',
        image: 'path/to/image.png',
        subtitle: 'Card Subtitle',
        description: ['Description 1', 'Description 2', 'Description 3'],
    };

    // function that inserts data into card component
    return (
        <Material.Card className='card' sx={cardStyle} data={data}>
            <Material.CardHeader
                titleTypographyProps={{ variant: 'h2' }} //changes font size
                title={props.data.title}
                className='cardTitle'
                sx={cardHeaderStyle}
            ></Material.CardHeader>
            <br />
            <Material.CardMedia className='cardContent' sx={cardMediaStyle}>
                <img
                    src={props.data.image}
                    style={{
                        height: '150px',
                        width: '150px',
                        borderRadius: '300px',
                        border: '2px solid #e9f4e9',
                        boxShadow: 5,
                        cursor: 'pointer',
                        // FIXME: theming
                        backgroundColor: 'black',
                    }}
                    alt='Aves Emote'
                />
            </Material.CardMedia>

            <Material.CardContent>
                <Material.Typography
                    variant='body1'
                    gutterBottom
                    className='cardSubtitle'
                    title={props.data.subtitle}
                >
                    {props.data.subtitle}
                </Material.Typography>
                <br />
                <Material.Typography
                    sx={cardListStyle}
                    variant='body1'
                    gutterBottom
                    className='cardDescription'
                >
                    {props.data.description.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                    {props.children} {/* Render children */}
                </Material.Typography>
            </Material.CardContent>
        </Material.Card>
    );
}

export default Card;
