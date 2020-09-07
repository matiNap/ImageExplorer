import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Main from "./screens/Main";
import { ThemeProvider } from "@material-ui/core";
import {
  MAIN,
  TOPICS,
  PROFILE,
  PHOTOS,
  SEARCH_USER,
  SEARCH_PHOTOS,
} from "./navRoutes";
import theme from "./theme";
import withNavigation from "./hocs/withNavigation";
import Topics from "./screens/Topic";
import Profile from "./screens/Profile";
import Photos from "./screens/Photos";
import { Provider } from "react-redux";
import store from "../src/store";
import history from "./history";
import SearchPhoto from "./screens/SearchPhoto";
import SearchUser from "./screens/SearchUser";

export default () => {
  return (
    <Provider {...{ store }}>
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <Switch>
            <Route exact path={MAIN} component={withNavigation(Main)} />
            <Route
              exact
              path={`${SEARCH_PHOTOS}`}
              component={withNavigation(SearchPhoto)}
            />
            <Route
              exact
              path={`${SEARCH_USER}`}
              component={withNavigation(SearchUser)}
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
            <Route
              exact
              path={`${PHOTOS}/:photoId`}
              component={withNavigation(Photos)}
            />
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  );
};
