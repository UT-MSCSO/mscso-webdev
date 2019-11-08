import React from 'react';
import { createBrowserHistory } from 'history';
import { Route, Router } from 'react-router';

import ApplicationView from './views/ApplicationView';
import DashboardView from './views/DashboardView';
import CoursesView from './views/CoursesView';
import LoginView from './views/LoginView';
import RecentView from './views/RecentView';
import CourseView from './views/CourseView';

import './app.scss';

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Route path="/" component={ApplicationView} />
      <Route exact path="/" component={DashboardView} />
      <Route exact path="/courses" component={CoursesView} />
      <Route path="/courses/:courseId" component={CourseView} />
      <Route path="/login" component={LoginView} />
      <Route path="/recent" component={RecentView} />

      {/** TODO add auth */}
    </Router>
  );
}

export default App;
