import React from "react";
import Wrapper from "../atom/Wrapper";
import Text from "../atom/Text";
import { Grid, Card, CardMedia } from "@material-ui/core";
import { exp } from "../assets";

const Experience = (props) => {
  return (
    <>
      <Wrapper height="80vh">
        <Grid container direction="column" justify="space-between">
          <Grid container items directon="row" style={{ paddingTop: "10vh" }}>
            <Grid item xs={12} sm={3}></Grid>
            <Grid item xs={12} sm={6}>
              <Text
                varPc="h4"
                varMobile="h6"
                algPc="center"
                algMobile="center"
                color="primary"
              >
                Experience
              </Text>
              <Text
                varPc="subtitle1"
                varMobile="body2"
                algPc="center"
                algMobile="center"
                color="primary"
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Temporibus molestias, repellat nobis aliquam aliquid eum!
              </Text>
            </Grid>
            <Grid item xs={12} sm={3}></Grid>
          </Grid>
          <Grid container items directon="row">
            <Grid item xs={12} sm={2}></Grid>
            <Grid item xs={12} sm={8}>
              <div data-aos={"fade-up"}>
                <Card>
                  <CardMedia
                    component="img"
                    alt="Developer on phone"
                    height="250"
                    image={exp}
                    title="Developer on phone"
                  />
                </Card>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Wrapper>
    </>
  );
};

export default Experience;
