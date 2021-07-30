import React from "react";
import { Box } from "@material-ui/core";
import Text from "./Text";

const Logo = (props) => {
  return (
    <div data-aos={"fade-up"}>
      <Box display="flex" justifyContent="center" p={2}>
        <Box>
          <span
            style={{ fontSize: "50px" }}
            className="iconify"
            data-icon={props.logo}
            data-inline="false"
          ></span>
        </Box>
      </Box>
      <Text
        varPc="subtitle1"
        varMobile="subtitle1"
        algPc="center"
        algMobile="center"
        color="primary"
      >
        {props.text}
      </Text>
    </div>
  );
};

export default Logo;
