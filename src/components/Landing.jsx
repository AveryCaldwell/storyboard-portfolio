import React from "react";
import averyLogo from "../assets/aves_peace.png";
//MUI
import * as Material from "@mui/material";
import theme from "../theme";
import { ThemeProvider } from "@mui/material/styles";

//  Function to render Landing component
function Landing(props) {
  // function that handles the on click event of the button and renders About component
  function handleClick() {
    console.log("handler");
    props.setCurrentPage("About");
  }

  // ========================STYLING============================
  const mediaSize = Material.useMediaQuery("(min-width:900px)");
  const mediaSmall = Material.useMediaQuery("(min-width:600px)");
  const boxStyle = [
    {
      width: "calc(100% - 200px)",
      display: "flex",
      justifyContent: "center",
      marginLeft: "auto",
      marginRight: "auto",
    },
  ];
  const cardStyle = [
    {
      display: mediaSize ? "flex" : "block",
      mt: "150px",
      p: 5,
      maxWidth: "900px",
      minWidth: "400px",
      flexWrap: "no-wrap",
      fontSize: "30px",
      flexDirection: "column",
    },
  ];
  const cardMediaStyle = [
    {
      marginLeft: "calc(100 % - 120px)",
      height: "250px",
      width: "250px",
      // FIXME theme
      backgroundColor: "gray",
      boxShadow: 2,
      cursor: "pointer",
      borderRadius: "16px",
      border: "1px solid rgba(255, 255, 255, 0.3)",
      display: mediaSize ? "flex" : "none",
      mx: "auto",
    },
  ];
    const cardContentStyle = [
        {
                    textAlign: "center",
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "center",
                    overflow: "hidden",
                    flexDirection: "column",
                    wordWrap: "break-word", 
        }
    ]

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        {props.currentPage === "Landing" && (
          <>
            <Material.Box sx={boxStyle}>
              <Material.Card className="landingCard" sx={cardStyle}>
                {/* =======================LOGO IMAGE=======================*/}
                <Material.CardMedia
                  src={averyLogo}
                  component="img"
                  sx={cardMediaStyle}
                  title="Aves Logo"
                  onClick={() => props.setCurrentPage("About")}
                />
                <Material.CardContent
                  sx={cardContentStyle}
                >
                  <Material.Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    {/* FIXME add some type of color or animation to name */}
                    Hi, I'm Avery
                  </Material.Typography>
                  <Material.Typography variant="body2" color="text.secondary">
                    Creative Thinker + Full Stack Web Developer
                  </Material.Typography>
                <br />
                                  
                  <Material.CardActions>
                    {/* =======================Button======================= */}
                    <Material.Button
                      variant="contained"
                      onClick={() => handleClick()}
                    >
                      Show more{" "}
                    </Material.Button>
                  </Material.CardActions>
                </Material.CardContent>
              </Material.Card>
            </Material.Box>
          </>
        )}
      </ThemeProvider>
    </React.Fragment>
  );
}

export default Landing;
