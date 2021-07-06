import React from "react";
import { Grid } from "@material-ui/core";
import Text from "../atom/Text";
import Wrapper from "../atom/Wrapper";

const Home = (props) => {
  return (
    <>
      <Wrapper background={props.background} alignItems="center">
        <Grid container>
          <Grid item xs={12} sm={3}></Grid>
          <Grid item xs={12} sm={6}>
            <Text varPc="h4" varMobile="h6" algPc="center" algMobile="center">
              {props.heading}
            </Text>
            <Text
              varPc="subtitle1"
              varMobile="body2"
              algPc="center"
              algMobile="center"
            >
              {props.subHeading}
            </Text>
          </Grid>
          <Grid item xs={12} sm={3}></Grid>
        </Grid>
      </Wrapper>
    </>
  );
};

export default Home;
