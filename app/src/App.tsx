import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store, { persistedStore } from "./store";
import Main from "./screens/Main";
import { ThemeProvider } from "@material-ui/core";
import { MAIN } from "./navRoutes";
import theme from "./theme";
import withNavigation from "./hocs/withNavigation";

export default () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <ThemeProvider theme={theme}>
          <Router>
            <Switch>
              <Route exact path={MAIN} component={withNavigation(Main)} />
            </Switch>
          </Router>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};
