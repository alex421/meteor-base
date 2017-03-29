import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import UsersDetails from '../usersdetails';

Meteor.publish('users.list', () => Meteor.users.find());

Meteor.publish('users.view', (_id) => {
  check(_id, String);
  return Meteor.users.findOne({_id:_id});
});

/*to be deleted*/
Meteor.publish('documents.view', (_id) => {
  check(_id, String);
  return Documents.find(_id);
});
