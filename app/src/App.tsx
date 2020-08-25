import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "./store";
import Main from "./screens/Main";
import { ThemeProvider } from "@material-ui/core";
import { MAIN, TOPICS, SEARCH, PROFILE } from "./navRoutes";
import theme from "./theme";
import withNavigation from "./hocs/withNavigation";
import Search from "./screens/Search";
import Topics from "./screens/Topic";
import Profile from "./screens/Profile";

export default () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path={MAIN} component={withNavigation(Main)} />
            <Route
              exact
              path={`${SEARCH}/:query`}
              component={withNavigation(Search)}
            />
            <Route
              exact
              path={`${TOPICS}`}
              component={withNavigation(Topics)}
            />
            <Route
              exact
              path={`${TOPICS}/:topic`}
              component={withNavigation(Topics)}
            />
            <Route
              exact
              path={`${PROFILE}/:userId`}
              component={withNavigation(Profile)}
            />
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  );
};
