import React from 'react';
import {browserHistory} from 'react-router';
import {LinkContainer} from 'react-router-bootstrap';
import {Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {Meteor} from 'meteor/meteor';

const handleLogout = () => Meteor.logout(() => browserHistory.push('/login'));

const userName = () => {
  const user = Meteor.user();
  const name = user && user.profile ? user.profile.name : '';
  return user ? `${name.first} ${name.last}` : '';
};

const AuthenticatedNavigation = () => (
    <div>
      <Nav>
        <LinkContainer to="/companies">
          <NavItem eventKey={ 2 } href="/companies">Companies</NavItem>
        </LinkContainer>
      </Nav>
      <Nav pullRight>
        <NavDropdown eventKey={ 3 } title={ userName() } id="basic-nav-dropdown">
          <LinkContainer to="/settings">
            <MenuItem eventKey={ 3.1 } href="/settings">Settings</MenuItem>
          </LinkContainer>
          <MenuItem eventKey={ 3.2 } onClick={ handleLogout }>Logout</MenuItem>
        </NavDropdown>
      </Nav>
    </div>
);

export default AuthenticatedNavigation;
