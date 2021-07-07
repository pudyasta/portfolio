import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Wrapper from "../atom/Wrapper";
import { avatar } from "../assets";

const useStyles = makeStyles({
  cardAbout: {
    backgroundColor: "#000",
    borderRadius: "0",
    height: "280px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});

const About = () => {
  const classes = useStyles();
  return (
    <>
      <Wrapper>
        <Grid container directon="column">
          <Grid items container style={{ paddingTop: "10vh" }}>
            <Grid item xs={12} sm={1}></Grid>
            <Grid item xs={12} sm={3}>
              <div data-aos={"fade-right"}>
                <Card style={{ borderRadius: "0" }}>
                  <CardMedia
                    component="img"
                    alt="Developer on phone"
                    height="280"
                    image={avatar}
                    title="Developer on phone"
                  />
                </Card>
              </div>
            </Grid>
            <Grid item xs={12} sm={7}>
              <div data-aos={"fade-right"}>
                <Card className={classes.cardAbout}>
                  <CardContent>
                    <Grid container>
                      <Grid items xs={12} sm={1}></Grid>
                      <Grid items xs={12} sm={10}>
                        <Typography
                          variant="body2"
                          color="secondary"
                          gutterBottom
                        >
                          Word of the Day
                        </Typography>
                        <Typography color="secondary" variant="h5" gutterBottom>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Aspernatur,
                        </Typography>
                        <Typography variant="body2" color="secondary">
                          Word of the Day
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </div>
            </Grid>
          </Grid>
          <Grid items container>
            <Grid xs={12} sm={1}></Grid>
            <Grid xs={12} sm={5}>
              <div data-aos={"fade-right"}>
                <Card>
                  <CardContent>
                    <Typography
                      className={classes.title}
                      color="textSecondary"
                      gutterBottom
                    >
                      Word of the Day
                    </Typography>

                    <Typography className={classes.pos} color="textSecondary">
                      adjective
                    </Typography>
                    <Typography variant="body2" component="p">
                      well meaning and kindly.
                      {'"a benevolent smile"'}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </div>
            </Grid>
            <Grid xs={12} sm={5}>
              <div data-aos={"fade-right"}>
                <Card>
                  <CardContent>
                    <Typography
                      className={classes.title}
                      color="textSecondary"
                      gutterBottom
                    >
                      Word of the Day
                    </Typography>

                    <Typography className={classes.pos} color="textSecondary">
                      adjective
                    </Typography>
                    <Typography variant="body2" component="p">
                      well meaning and kindly.
                      {'"a benevolent smile"'}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </div>
            </Grid>
            <Grid xs={12} sm={1}></Grid>
          </Grid>
        </Grid>
      </Wrapper>
    </>
  );
};

export default About;
