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
  TOPIC,
} from "./navRoutes";
import theme from "./theme";
import withNavigation from "./hocs/withNavigation";
import Topics from "./screens/Topics";
import Profile from "./screens/Profile";
import Photos from "./screens/Photos";
import { Provider } from "react-redux";
import store from "../src/store";
import history from "./history";
import SearchPhoto from "./screens/SearchPhoto";
import SearchUser from "./screens/SearchUser";
import Topic from "./screens/Topic";

export default () => {
  console.log(process.env.REACT_APP_ACCESS_KEY);
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
            <Route
              exact
              path={`${TOPIC}/:topicName`}
              component={withNavigation(Topic)}
            />
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  );
};
