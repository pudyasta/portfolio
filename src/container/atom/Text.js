import React from "react";
import { useTheme } from "@material-ui/core/styles";
import { useMediaQuery, Typography } from "@material-ui/core";

const Text = (props) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <div data-aos={"fade-up"}>
      <Typography
        variant={matches ? props.varPc : props.varMobile}
        align={matches ? props.algPc : props.algMobile}
        className={props.className}
        color={props.color || "secondary"}
        style={{ textTransform: "none", paddingBottom: "3vh" }}
      >
        {props.children}
      </Typography>
    </div>
  );
};

export default Text;
