import React from "react";
import {
  Toolbar,
  Box,
  Tab,
  Tabs,
  AppBar,
  CssBaseline,
} from "@material-ui/core";
import NavbarLink from "../atom/NavbarLink";

const Navbar = () => {
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <CssBaseline />
      <AppBar color="secondary">
        <Toolbar>
          <div style={{ width: "100%" }}>
            <Box display="flex" justifyContent="center">
              <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                aria-label="disabled tabs example"
                selectionFollowsFocus
              >
                <NavbarLink to="/">
                  <Tab label="Home" />
                </NavbarLink>
                <NavbarLink to="/coding">
                  <Tab label="coding" />
                </NavbarLink>
              </Tabs>
            </Box>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
