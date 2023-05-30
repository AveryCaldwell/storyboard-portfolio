import * as React from 'react';
import * as Material from '@mui/material';
import avesEmote from '../assets/aves_peace.png';
// MUI theme
import { boxStyle } from './Styles';

export function Card(props) {
    // Array of About card content
    const aboutData = [
        {
            title: 'About',
            image: avesEmote,
            subtitle:
                'I am Avery, a full-stack developer with a marketing degree.',
            description: ' I make blending design and coding skills look EZ.',
        },
    ];
    const aboutCardData = aboutData[0]; // Extracting the first item as an example
    const { image, title, description } = aboutData;
    return (
        <Material.Box className='aboutBox' sx={boxStyle}>
            <Material.CardHeader
                title={aboutCardData.title || title}
                className='cardTitle'
                variant='h1'
                component='h2'
                sx={{
                    padding: '5px',
                    margin: '0',
                    textAlign: 'center',
                    position: 'absolute',
                }}
            >
                {aboutCardData.title || title}
            </Material.CardHeader>
            <br />
            <Material.Box
                className='cardContent'
                sx={{
                    //   position: 'fixed',
                    display: 'flex',
                    border: '1px solid black',
                    borderRadius: '12px',
                    alignItems: 'center',
                    flexDirection: 'column',
                    marginTop: '150px',
                    //   width: "780px",
                    width: '500px',
                }}
            >
                <img
                    src={aboutCardData.image || image}
                    style={{
                        height: '125px',
                        width: '125px',
                        borderRadius: '300px',
                        border: '2px solid #e9f4e9',
                        boxShadow: 5,
                        cursor: 'pointer',
                        position: 'sticky',
                        // FIXME: theming
                        backgroundColor: 'black',
                        marginRight: '500px',
                        marginTop: '-55px',
                    }}
                    alt='Aves Emote'
                />

                <Material.Grid container spacing={3}>
                    <Material.Grid item>
                        <Material.Typography
                            variant='subtitle'
                            gutterBottom
                            className='cardSubtitle'
                            description={aboutCardData.subtitle || subtitle}
                        >
                            {aboutCardData.subtitle || subtitle}
                        </Material.Typography>
                    </Material.Grid>
                    <br />
                    <Material.Grid item m>
                        <Material.Typography
                            variant='body1'
                            gutterBottom
                            className='cardDescription'
                            description={
                                aboutCardData.description || description
                            }
                        >
                            {aboutCardData.description || description}
                        </Material.Typography>
                    </Material.Grid>
                </Material.Grid>
                <Material.Typography variant='caption' gutterBottom>
                    Explore my projects and let's build something amazing
                    together! 🚀
                </Material.Typography>
            </Material.Box>
        </Material.Box>
    );
}

export default Card;
