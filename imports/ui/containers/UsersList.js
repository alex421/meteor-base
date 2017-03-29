import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';

import UsersList from '../components/UsersList.js'

import Loading from '../components/Loading.js';

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('users.list');
  if (subscription.ready()) {
    const users = Meteor.users.find({companyID: params.companyID}).fetch();
    //console.log("users",users)
    onData(null, { users });
  }
};

export default composeWithTracker(composer, Loading)(UsersList);
