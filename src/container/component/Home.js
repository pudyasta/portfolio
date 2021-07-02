import React from "react";
import { Container, CssBaseline, Box, Grid } from "@material-ui/core";
import { jumbotron } from "../assets";
import { makeStyles } from "@material-ui/core/styles";
import Text from "../atom/Text";

const useStyles = makeStyles({
  root: {
    margin: 0,
    padding: 0,
    color: (props) => props.color,
  },
  jumbotron: {
    backgroundImage: `url(${jumbotron})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    display: "flex",
  },
  jumbotronHeading: {
    margin: "auto",
  },
  vMax: {
    height: "100vh",
  },
  displayH: {
    textTransform: "uppercase",
  },
});

const Home = (props) => {
  const classes = useStyles(props);

  return (
    <>
      <CssBaseline />

      <div className={classes.jumbotron}>
        <Container>
          <Box display="flex" alignItems="center" className={classes.vMax}>
            <Grid container>
              <Grid item xs={12} sm={2}></Grid>
              <Grid item xs={12} sm={8}>
                <Text
                  varPc="h4"
                  varMobile="h6"
                  algPc="center"
                  algMobile="center"
                  className={classes.displayH}
                >
                  photographer | programmer
                </Text>
                <Text
                  varPc="subtitle1"
                  varMobile="body2"
                  algPc="center"
                  algMobile="center"
                  className={classes.displayH}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Libero, inventore?
                </Text>
              </Grid>
              <Grid item xs={12} sm={2}></Grid>
            </Grid>
          </Box>
        </Container>
      </div>
    </>
  );
};

export default Home;
