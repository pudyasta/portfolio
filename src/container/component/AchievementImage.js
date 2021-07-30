import React from "react";
import { Grid, Typography, Button, CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Wrapper from "../atom/Wrapper";

const useStyles = makeStyles({
  marginY: {
    margin: "10px 0",
  },
});

const AchievementImage = (props) => {
  const classes = useStyles();
  return (
    <>
      <Wrapper height="80vh">
        <Grid
          container
          spacing={3}
          alignItems="center"
          direction={props.direction}
        >
          <Grid item sm={1} />
          <Grid item sm={5}>
            <div data-aos={"fade-right"}>
              <CardMedia
                style={{ marginTop: "20px" }}
                component="img"
                alt="Developer on phone"
                image={props.image}
                title="Developer on phone"
              />
            </div>
          </Grid>
          <Grid item sm={5}>
            <div data-aos={"fade-right"}>
              <Typography variant="h6" style={{ fontWeight: "bold" }}>
                {props.heading}
              </Typography>
              <Typography
                variant="body1"
                align="justify"
                className={classes.marginY}
              >
                {props.paragraph}
              </Typography>
              <Button
                className={classes.marginY}
                variant="contained"
                color="primary"
                href={"http://" + props.to}
              >
                Visit Website
              </Button>
            </div>
          </Grid>
        </Grid>
      </Wrapper>
    </>
  );
};

export default AchievementImage;
