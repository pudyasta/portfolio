import React from "react";
import Wrapper from "../atom/Wrapper";
import Text from "../atom/Text";
import { Grid, Button } from "@material-ui/core";

const Footer = (props) => {
  return (
    <>
      <Wrapper height="30vh">
        <Grid container direction="column">
          <Grid container items directon="row" style={{ paddingTop: "10vh" }}>
            <Grid item xs={12} sm={3}></Grid>
            <Grid item xs={12} sm={6}>
              <Text
                varPc="subtitle1"
                varMobile="subtitle1"
                algPc="center"
                algMobile="center"
                color="primary"
              >
                {props.text}
              </Text>
            </Grid>
          </Grid>
          <Grid container items directon="row">
            <Grid item xs={12} sm={3}></Grid>
            <Grid item xs={12} sm={6} alignItems="center">
              <div
                data-aos={"fade-up"}
                data-aos-anchor-placement="bottom-bottom"
              >
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  href={"http://" + props.to}
                >
                  {props.buttonText}
                </Button>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Wrapper>
    </>
  );
};

export default Footer;
