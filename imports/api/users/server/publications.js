import {Meteor} from 'meteor/meteor';
import {check}  from 'meteor/check';

import UsersDetails from '../users.js';

Meteor.publish('users.list', () => Meteor.users.find());

Meteor.publish('users.view', (_id) => {
  check(_id, String);
  return Meteor.users.findOne({_id: _id});
});
