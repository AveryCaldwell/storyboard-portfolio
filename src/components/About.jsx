import * as React from "react";
import * as Material from "@mui/material";
// import * as Icons from '@mui/icons-material';
import SettingsIcon from "@mui/icons-material/Settings";
import CreateIcon from "@mui/icons-material/Create";
import ColorLensIcon from "@mui/icons-material/ColorLens";
// MUI theme
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
// IMAGE
// import avesEmote from "../assets/banker-aves.jpg";
import avesEmote from "../assets/aves_peace.png";
import { Calculate } from "@mui/icons-material";
// import avesEmote from "../assets/aves_pizza.png";
// import avesEmote from "../assets/avery.jpg";

//  Function to render About component
function About(props) {
  // Media query for sizing
  const mediaSize = Material.useMediaQuery("(min-width:900px)");
  const boxStyle = [
    {
      width: "calc(100% - 120px)",
      display: "flex",
      justifyContent: "center",
      marginLeft: "120px",
      padding: 10,
      position: "absolute",
      borderRadius: "12px",
      minWidth: "400px",
      maxWidth: "1200px",
      overflow: "scroll",
    },
  ];
  // FIXME cant get imageStyle to work on image
  //   const imageStyle = [
  //     {
  //       height: "150px",
  //       width: "150px",
  //       // FIXME: theming
  //       borderRadius: '300px',
  //       border: "2px solid #e9f4e9",
  //       boxShadow: 5,
  //       cursor: "pointer",
  //       position: "relative",
  //     },
  //   ];

  return (
    <React.Fragment>
      {props.currentPage === "About" && (
        <ThemeProvider theme={theme}>
          <Material.Box className="aboutBox" sx={boxStyle}>
            <Material.Typography
              variant="h1"
              component="h2"
              sx={{
                padding: "5px",
                margin: "0",
                textAlign: "center",
                position: "absolute",
              }}
            >
              About
            </Material.Typography>
            <br />

            <Material.Box
              className="aboutContent"
              sx={{
                //   position: 'fixed',
                display: "flex",
                border: "1px solid black",
                borderRadius: "12px",
                alignItems: "center",
                flexDirection: "column",
                marginTop: "150px",
                //   width: "780px",
                width: "500px",
              }}
            >
              <img
                src={avesEmote}
                style={{
                  height: "125px",
                  width: "125px",
                  borderRadius: "300px",
                  border: "2px solid #e9f4e9",
                  boxShadow: 5,
                  cursor: "pointer",
                  position: "sticky",
                  // top: "180px",
                  // left: "10px",
                  // FIXME: theming
                  backgroundColor: "black",
                  marginRight: "500px",
                  marginTop: "-55px",
                }}
                alt="Aves Emote"
                // onClick={() => props.setCurrentPage('Contact')}
              />

              <Material.Grid container spacing={3}>
                <Material.Grid item xl>
                  <Material.Typography variant="body1" gutterBottom>
                    I'm Avery. A full-stack developer with a marketing degree,
                    blending design and coding skills.
                  </Material.Typography>
                </Material.Grid>
                <br />
                <Material.Grid item m>
                  {/* FIXME do a .map to cycle through the list of items? */}
                  <CreateIcon></CreateIcon>
                  <Material.Typography variant="h5" gutterBottom>
                    Designer/Creator
                  </Material.Typography>
                  <Material.Typography variant="h6" gutterBottom>
                    Frameworks
                  </Material.Typography>
                  <Material.Typography variant="h6" gutterBottom>
                    Design Tools:
                  </Material.Typography>
                </Material.Grid>
                <Material.Grid item m>
                  <ColorLensIcon></ColorLensIcon>
                  <Material.Typography variant="h5" gutterBottom>
                    Frontend Developer
                  </Material.Typography>
                  <Material.Typography variant="h6" gutterBottom>
                    Languages:
                  </Material.Typography>
                  <Material.Typography variant="h6" gutterBottom>
                    Dev Tools:
                  </Material.Typography>
                </Material.Grid>
                <Material.Grid item m>
                  <SettingsIcon></SettingsIcon>
                  <Material.Typography variant="h5" gutterBottom>
                    Backend Developer
                  </Material.Typography>
                  <Material.Typography variant="h6" gutterBottom>
                    Languages:
                  </Material.Typography>

                  <Material.Typography variant="h6" gutterBottom>
                    Dev Tools:
                    <Material.Typography variant="body1" gutterBottom>
                      Apollo
                    </Material.Typography>
                  </Material.Typography>
                </Material.Grid>
              </Material.Grid>
              <Material.Typography variant="caption" gutterBottom>
                Explore my projects and let's build something amazing together!
                🚀
              </Material.Typography>
            </Material.Box>
          </Material.Box>
        </ThemeProvider>
      )}
    </React.Fragment>
  );
}

export default About;
