import React from "react";
import Text from "../atom/Text";
import Wrapper from "../atom/Wrapper";
import Logo from "../atom/Logo";
import { Grid } from "@material-ui/core";

const Expertice = () => {
  return (
    <>
      <Wrapper alignItems="flex-start" height="80vh">
        <Grid container directon="column">
          <Grid container item directon="row" style={{ paddingTop: "10vh" }}>
            <Grid item xs={12} sm={3}></Grid>
            <Grid item xs={12} sm={6}>
              <Text
                varPc="h4"
                varMobile="h6"
                algPc="center"
                algMobile="center"
                color="primary"
              >
                Expertice
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
          <Grid item container directon="row" style={{ paddingTop: "0vh" }}>
            <Grid item xs={6} sm={2}>
              <Logo logo="logos:laravel" text="Laravel" />
            </Grid>
            <Grid item xs={6} sm={2}>
              <Logo logo="logos:nodejs" text="Node" />
            </Grid>
            <Grid item xs={6} sm={2}>
              <Logo logo="logos:react" text="React" />
            </Grid>
            <Grid item xs={6} sm={2}>
              <Logo logo="simple-icons:express" text="Express" />
            </Grid>
            <Grid item xs={6} sm={2}>
              <Logo logo="logos:docker-icon" text="Docker" />
            </Grid>
            <Grid item xs={6} sm={2}>
              <Logo logo="vscode-icons:file-type-mongo" text="MongoDB" />
            </Grid>
            <Grid item xs={6} sm={2}>
              <Logo logo="vscode-icons:file-type-mysql" text="MySQL" />
            </Grid>
            <Grid item xs={6} sm={2}>
              <Logo logo="logos:firebase" text="Firebase" />
            </Grid>
            <Grid item xs={6} sm={2}>
              <Logo logo="logos:redis" text="Redis" />
            </Grid>
            <Grid item xs={6} sm={2}>
              <Logo logo="logos:git-icon" text="Git" />
            </Grid>
          </Grid>
        </Grid>
      </Wrapper>
    </>
  );
};

export default Expertice;
