import React from 'react';
import { createBrowserHistory } from 'history';
import { Route, Router } from 'react-router';

import ApplicationView from './views/ApplicationView';
import DashboardView from './views/DashboardView';
import CoursesView from './views/CoursesView';
import LoginView from './views/LoginView';
import RecentView from './views/RecentView';

import './app.scss';

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Route path="/" component={ApplicationView} />
      <Route exact path="/" component={DashboardView} />
      <Route path="/courses" component={CoursesView} />
      <Route path="/login" component={LoginView} />
      <Route path="/recent" component={RecentView} />

      {/** TODO Add auth */}
    </Router>
  );
}

export default App;
