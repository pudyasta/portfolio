import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Main } from "./container";

import { ThemeProvider } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import { yellow } from "@material-ui/core/colors/";

const theme = createMuiTheme({
  typography: {
    fontFamily: "Arial",
  },
  palette: {
    primary: {
      main: yellow[600],
      contrastText: "#000",
    },
    secondary: {
      main: yellow[300],
    },
  },
  shadows: ["none"],
});

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route path="/" exact>
              <Main />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
