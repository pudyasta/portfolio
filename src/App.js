import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Main, Coding, Navbar } from "./container";

import { ThemeProvider } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";

import AOS from "aos";
import "aos/dist/aos.css";

const theme = createMuiTheme({
  typography: {
    fontFamily: "Arial",
  },
  palette: {
    primary: {
      main: "#000",
    },
    secondary: {
      main: "#fff",
    },
  },
  shadows: ["none"],
});

const App = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact>
              <Main />
            </Route>
            <Route path="/coding">
              <Coding />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
