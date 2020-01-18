import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import {Provider} from 'react-redux';
import loadPlugins from '../plugins';
import AppContainer from './app-container';
import AppRoutes from './app-routes';
import theme from '../lib/theme';
import ErrorBoundary from './error-boundary';

const App = ({store}) => (
  <Router>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <ErrorBoundary>
          <AppContainer>
            <AppRoutes />
          </AppContainer>
        </ErrorBoundary>
      </Provider>
    </ThemeProvider>
  </Router>
);

export default loadPlugins(App);
