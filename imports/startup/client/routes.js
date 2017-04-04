/* eslint-disable max-len */

import React    from 'react';
import {render} from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

// Layouts
import App              from '/imports/ui/layouts/App.js';

// Containers
import EditCompany      from '/imports/ui/containers/EditCompany.js';
import EditUser         from '/imports/ui/containers/EditUser.js';
import ViewUser         from '/imports/ui/containers/ViewUser.js';
import ViewCompany      from '/imports/ui/containers/ViewCompany.js';
import Settings         from '/imports/ui/containers/Settings.js';

// Pages
import Companies        from '/imports/ui/pages/Companies.js';
import NewCompany       from '/imports/ui/pages/NewCompany.js';
import NewUser          from '/imports/ui/pages/NewUser.js';
import Index            from '/imports/ui/pages/Index.js';
import Login            from '/imports/ui/pages/Login.js';
import NotFound         from '/imports/ui/pages/NotFound.js';
import RecoverPassword  from '/imports/ui/pages/RecoverPassword.js';
import ResetPassword    from '/imports/ui/pages/ResetPassword.js';
import Signup           from '/imports/ui/pages/Signup.js';


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
          <Route name="Companies" path="/companies" component={ Companies } onEnter={ authenticate }/>
          <Route name="NewCompany" path="/companies/new" component={ NewCompany } onEnter={ authenticate }/>
          <Route name="NewUser" path="/users/new/(:_idCompany)" component={ NewUser } onEnter={ authenticate }/>
          <Route name="viewUser" path="/users/:_id" component={ ViewUser } onEnter={ authenticate }/>
          <Route name="editCompany" path="/companies/:_id/edit" component={ EditCompany } onEnter={ authenticate }/>
          <Route name="editUser" path="/users/:_id(/:companyID)/edit" component={ EditUser } onEnter={ authenticate }/>
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
