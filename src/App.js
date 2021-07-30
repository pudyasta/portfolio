import React, { useEffect, useReducer } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Main, Coding, Navbar, Achievement } from "./container";

import { ThemeProvider, LinearProgress } from "@material-ui/core";
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
});

function reducer(state, action) {
  switch (action.type) {
    case "set-loading":
      return { loading: !state.loading };
    default:
      throw new Error();
  }
}

export const UserContext = React.createContext({
  dispatch: () => null,
});

const App = () => {
  const [state, dispatch] = useReducer(reducer, { loading: true });
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <UserContext.Provider value={(state, dispatch)}>
        <ThemeProvider theme={theme}>
          <Router>
            <Navbar />
            {/* {state.loading ? <LinearProgress color="primary" /> : ""} */}
            <Switch>
              <Route path="/" exact component={Main} />
              <Route path="/coding" component={Coding} />
              <Route path="/achievement" component={Achievement} />
            </Switch>
          </Router>
        </ThemeProvider>
      </UserContext.Provider>
    </>
  );
};

export { App, reducer };
