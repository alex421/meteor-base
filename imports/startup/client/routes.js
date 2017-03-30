/* eslint-disable max-len */

import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Meteor} from 'meteor/meteor';

// Layouts
import App from '../../ui/layouts/App.js';

// Pages
import Documents from '../../ui/pages/Documents.js';
import Companies from '../../ui/pages/Companies.js';
import NewCompany from '../../ui/pages/NewCompany.js';
import NewUser from '../../ui/pages/NewUser.js';
import NewUser2 from '../../ui/pages/NewUser.js';
import NewDocument from '../../ui/pages/NewDocument.js';
import EditDocument from '../../ui/containers/EditDocument.js';
import EditCompany from '../../ui/containers/EditCompany.js';
import EditUser from '../../ui/containers/EditUser.js';
import ViewDocument from '../../ui/containers/ViewDocument.js';
import ViewUser from '../../ui/containers/ViewUser.js';
import ViewCompany from '../../ui/containers/ViewCompany.js';
import Index from '../../ui/pages/Index.js';
import Login from '../../ui/pages/Login.js';
import NotFound from '../../ui/pages/NotFound.js';
import RecoverPassword from '../../ui/pages/RecoverPassword.js';
import ResetPassword from '../../ui/pages/ResetPassword.js';
import Signup from '../../ui/pages/Signup.js';
import Settings from '../../ui/pages/Settings.js';

const authenticate = (nextState, replace) => {
  if (!Meteor.loggingIn() && !Meteor.userId()) {
    replace({
      pathname: '/login',
      state: {nextPathname: nextState.location.pathname},
    });
  }
};

const userIsLogged = (nextState, replace) => {
  if (Meteor.loggingIn() && Meteor.userId()) {
    replace({
      pathname: '/',
      state: {nextPathname: nextState.location.pathname},
    });
  }
};

Meteor.startup(() => {
  render(
      <Router history={ browserHistory }>
        <Route path="/" component={ App }>
          <IndexRoute name="index" component={ Index }/>
          <Route name="documents" path="/documents" component={ Documents } onEnter={ authenticate }/>
          <Route name="newDocument" path="/documents/new" component={ NewDocument } onEnter={ authenticate }/>
          <Route name="Companies" path="/companies" component={ Companies } onEnter={ authenticate }/>
          <Route name="NewCompany" path="/companies/new" component={ NewCompany } onEnter={ authenticate }/>
          <Route name="NewUser" path="/users/new/(:_idCompany)" component={ NewUser } onEnter={ authenticate }/>
          <Route name="viewUser" path="/users/:_id" component={ ViewUser } onEnter={ authenticate }/>
          <Route name="editDocument" path="/documents/:_id/edit" component={ EditDocument } onEnter={ authenticate }/>
          <Route name="editCompany" path="/companies/:_id/edit" component={ EditCompany } onEnter={ authenticate }/>
          <Route name="editUser" path="/users/:_id/edit" component={ EditUser } onEnter={ authenticate }/>
          <Route name="viewDocument" path="/documents/:_id" component={ ViewDocument } onEnter={ authenticate }/>
          <Route name="viewCompany" path="/companies/:_id" component={ ViewCompany } onEnter={ authenticate }/>
          <Route name="login" path="/login" component={ Login } onEnter={ userIsLogged }/>
          <Route name="recover-password" path="/recover-password" component={ RecoverPassword }/>
          <Route name="reset-password" path="/reset-password/:token" component={ ResetPassword }/>
          <Route name="signup" path="/signup" component={ Signup }/>
          <Route name="settings" path="/settings" component={ Settings }/>
          <Route path="*" component={ NotFound }/>
        </Route>
      </Router>,
      document.getElementById('react-root')
  );
});
