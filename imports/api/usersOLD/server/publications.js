import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Documents from '../documents';

Meteor.publish('users.list', () => Meteor.users.find());

Meteor.publish('users.view', (_id) => {
  check(_id, String);
  return Meteor.users(_id);
});
