import React from "react";
import { Container, CssBaseline, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    margin: 0,
    padding: 0,
    color: (props) => props.color,
  },
  jumbotron: {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    display: "flex",
    overflowY: "hidden",
  },

  vMax: {
    height: "100%",
  },
});

const Wrapper = (props) => {
  const classes = useStyles(props);

  return (
    <>
      <CssBaseline />

      <div
        className={classes.jumbotron}
        style={{
          backgroundImage: `url(${props.background})`,
          minHeight: props.height || "100vh",
        }}
      >
        <Container>
          <Box
            display="flex"
            alignItems={props.alignItems}
            className={classes.vMax}
          >
            {props.children}
          </Box>
        </Container>
      </div>
    </>
  );
};

export default Wrapper;
