import React from "react";
import { useTheme } from "@material-ui/core/styles";
import { useMediaQuery, Typography } from "@material-ui/core";

const Text = (props) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <>
      <Typography
        variant={matches ? props.varPc : props.varMobile}
        align={matches ? props.algPc : props.algMobile}
        className={props.className}
      >
        {props.children}
      </Typography>
    </>
  );
};

export default Text;
