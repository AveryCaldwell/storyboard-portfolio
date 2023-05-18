import * as React from 'react';
import * as Material from '@mui/material';
// MUI theme
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';

//  Function to render About component
function About(props) {
    // Media query for sizing
    const mediaSize = Material.useMediaQuery('(min-width:900px)');
    return (
        <React.Fragment>
            {props.currentPage === 'About' && (
                <ThemeProvider theme={theme}>
                    {/* FIXME : theming */}

                    {/* <Material.Card>About</Material.Card> */}

                    <Material.Stack
                        marginTop='10%'
                        position='relative'
                        direction='row'
                        justifyContent='center'
                        alignItems='center'
                        spacing={2}
                    >
                        <h1>About</h1>
                        <p>
                            Welcome to my React portfolio! I'm a full-stack
                            developer with a marketing degree, blending design
                            and coding skills. Freshly graduated from a
                            bootcamp, I'm ready to conquer the digital realm.
                            When I'm not coding, you'll find me live streaming
                            on Twitch, sharing my experiences and cracking
                            jokes. With a marketer's eye, I create visually
                            stunning and user-friendly applications. Explore my
                            projects and let's build something amazing together!
                            🚀
                        </p>
                        <p>
                            Combining marketing with coding offers numerous
                            benefits that can enhance your effectiveness and
                            impact in the digital landscape. Here are some key
                            advantages:
                        </p>
                        <p>
                            Enhanced Design Skills: A solid understanding of
                            marketing principles allows you to leverage your
                            coding skills to create visually appealing and
                            user-friendly digital experiences. You can optimize
                            the user interface and user experience (UI/UX) to
                            effectively communicate your brand message and drive
                            conversions.
                        </p>
                        <p>
                            Data-Driven Decision Making: As a marketer with
                            coding knowledge, you can leverage data analytics
                            and tracking tools to gain insights into user
                            behavior, campaign performance, and customer
                            preferences. This data-driven approach empowers you
                            to make informed decisions and refine marketing
                            strategies for maximum impact.
                        </p>
                        <p>
                            Automation and Efficiency: Coding enables you to
                            automate repetitive marketing tasks, such as data
                            collection, analysis, and campaign management. By
                            building custom tools or utilizing existing ones,
                            you can streamline workflows, save time, and
                            increase overall efficiency.
                        </p>
                        <p>
                            Personalized and Dynamic Marketing: With coding
                            skills, you can create dynamic and personalized
                            marketing campaigns. By leveraging technologies like
                            APIs, databases, and user segmentation, you can
                            deliver tailored content and experiences to your
                            target audience, increasing engagement and
                            conversion rates.
                        </p>
                        <p>
                            Adaptability in the Digital Age: The ability to code
                            provides you with a competitive edge in a rapidly
                            evolving digital landscape. You can stay ahead by
                            quickly adapting to new technologies, exploring
                            emerging platforms, and implementing innovative
                            marketing strategies that leverage the latest
                            trends.
                        </p>
                        <p>
                            Cross-Collaboration: Being proficient in both
                            marketing and coding allows you to bridge the gap
                            between marketing teams and technical teams. You can
                            effectively communicate with developers, understand
                            technical constraints, and translate marketing
                            objectives into actionable code, fostering seamless
                            collaboration and efficient project execution.
                        </p>
                    </Material.Stack>
                </ThemeProvider>
            )}
        </React.Fragment>
    );
}

export default About;
