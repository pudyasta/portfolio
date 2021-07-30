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
          <Grid item container style={{ paddingTop: "10vh" }}>
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
                      <Grid item xs={12} sm={1}></Grid>
                      <Grid item xs={12} sm={10}>
                        <Typography color="secondary" variant="h5" gutterBottom>
                          Yesterday is history, tomorrow is mystery, but today
                          is a gift thats why it is called present
                        </Typography>
                        <Typography variant="body2" color="secondary">
                          -Anonim
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
          <Grid item container spacing={3}>
            <Grid item xs={12} sm={1}></Grid>
            <Grid item xs={12} sm={5}>
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
            <Grid item xs={12} sm={5}>
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
            <Grid item xs={12} sm={1}></Grid>
          </Grid>
        </Grid>
      </Wrapper>
    </>
  );
};

export default About;
