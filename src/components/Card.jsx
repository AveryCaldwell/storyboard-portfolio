import * as React from 'react';
import * as Material from '@mui/material';
import avesEmote from '../assets/aves_peace.png';
// MUI theme
import { cardStyle, cardHeaderStyle, cardMediaStyle } from './Styles';
export function Card(props) {
    // function that inserts data into card component
    return (
        <Material.Card className='card' sx={cardStyle}>
            <Material.CardHeader
                titleTypographyProps={{ variant: 'h2' }} //changes font size
                title={props.data.title}
                className='cardTitle'
                sx={cardHeaderStyle}
            >
                {props.data.title}
            </Material.CardHeader>
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
            <Material.CardContent
                sx={{
                    lineHeight: '30px',
                }}
            >
                <Material.Typography
                    variant='body1'
                    gutterBottom
                    className='cardSubtitle'
                    description={props.data.subtitle}
                >
                    {props.data.subtitle}
                </Material.Typography>
                <br />
                <Material.Typography
                    variant='body2'
                    gutterBottom
                    className='cardDescription'
                    description={props.data.description}
                >
                    {props.data.description}
                </Material.Typography>
                {props.children}
            </Material.CardContent>
        </Material.Card>
    );
}

export default Card;
