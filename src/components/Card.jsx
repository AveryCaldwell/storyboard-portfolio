import * as React from 'react';
import * as Material from '@mui/material';
import avesEmote from '../assets/aves_peace.png';
// MUI theme
import { boxStyle } from './Styles';

export function Card(props) {
    // TODO: need to make button work for all cards?
    const handleClick = () => {
        console.log('Card handler');
        props.setCurrentPage('Projects');
    };

    // TODO: do I need to make a data.js file?
    // Array of About card content

    // const aboutCardData = aboutData;
    // const { image, title, description } = aboutData;
    return (
        <Material.Box className='cardBox' sx={{}}>
            <Material.Card
                className='card'
                sx={{
                    // margin: '50px',
                    minWidth: '375px',
                    padding: 5,
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    width: '750px',
                    display: 'flex',
                    //justifyContent: 'start',
                    alignItems: 'center',
                    borderRadius: '12px',
                    flexDirection: 'column',
                    //position: 'absolute',
                    // for image to show
                    overflow: 'visible',
                    height: 'max-content',
                }}
            >
                <Material.CardHeader
                    title={props.data.title}
                    className='cardTitle'
                    variant='h1'
                    component='h1'
                    sx={{
                        padding: '15px',
                        margin: '0',
                        textAlign: 'center',
                        position: 'absolute',
                        border: '1px solid white',
                    }}
                >
                    {props.data.title}
                </Material.CardHeader>
                <br />
                <Material.Box
                    className='cardContent'
                    sx={{
                        //   position: 'fixed',
                        display: 'flex',
                        borderRadius: '12px',
                        alignItems: 'center',
                        flexDirection: 'column',
                        padding: 5,
                        position: 'relative',
                    }}
                >
                    <img
                        src={props.data.image}
                        style={{
                            height: '125px',
                            width: '125px',
                            borderRadius: '300px',
                            border: '2px solid #e9f4e9',
                            boxShadow: 5,
                            cursor: 'pointer',
                            // FIXME: theming
                            backgroundColor: 'black',
                            position: 'relative',
                            marginLeft: 'auto',
                            left: '150px',
                            bottom: '150px',
                        }}
                        alt='Aves Emote'
                    />

                    <Material.Grid container spacing={3}>
                        <Material.Grid item>
                            <Material.Typography
                                variant='subtitle'
                                gutterBottom
                                className='cardSubtitle'
                                description={props.data.subtitle}
                            >
                                {props.data.subtitle}
                            </Material.Typography>
                        </Material.Grid>
                        <br />
                        <Material.Grid item m>
                            <Material.Typography
                                variant='body1'
                                gutterBottom
                                className='cardDescription'
                                description={props.data.description}
                            >
                                {props.data.description}
                            </Material.Typography>
                        </Material.Grid>
                    </Material.Grid>
                    {props.children}
                </Material.Box>
            </Material.Card>
        </Material.Box>
    );
}

export default Card;
