import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@material-ui/core/styles";
import { jumbotron } from "../assets";

import { Home, Experience, Expertice, Footer } from "../";
import {
  Toolbar,
  Typography,
  Box,
  Tab,
  Tabs,
  AppBar,
  CssBaseline,
} from "@material-ui/core";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
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
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="scrollable"
              >
                <Tab label="Home" {...a11yProps(0)} />
                <Tab label="Coding" {...a11yProps(1)} />
                <Tab label="Photoraphic" {...a11yProps(2)} />
                <Tab label="Achievments" {...a11yProps(3)} />
                <Tab label="Social" {...a11yProps(4)} />
              </Tabs>
            </Box>
          </div>
        </Toolbar>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Home
            heading="pudyasta satria"
            subHeading="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro reprehenderit obcaecati corporis natus sapiente a!"
            background={jumbotron}
          />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Home
            heading="Become a Programmer"
            subHeading="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro reprehenderit obcaecati corporis natus sapiente a!"
            background={jumbotron}
          />
          <Experience />
          <Expertice />
          <Footer />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Home
            heading="Photographer"
            subHeading="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro reprehenderit obcaecati corporis natus sapiente a!"
          />
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <Home
            heading="Miles stone"
            subHeading="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro reprehenderit obcaecati corporis natus sapiente a!"
          />
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
          <Home
            heading="Social"
            subHeading="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro reprehenderit obcaecati corporis natus sapiente a!"
          />
        </TabPanel>
      </SwipeableViews>
    </>
  );
}
