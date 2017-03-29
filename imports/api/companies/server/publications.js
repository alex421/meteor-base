import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Companies from '../companies';

Meteor.publish('companies.list', () => Companies.find());

Meteor.publish('companies.view', (_id) => {
  check(_id, String);
  return Companies.find(_id); 
});
