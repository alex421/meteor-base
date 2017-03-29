import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';

const Companies = new Mongo.Collection('Companies');
export default Companies;

Companies.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Companies.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

Companies.schema = new SimpleSchema({
  name: {
    type: String,
    label: 'The name of the company.',
  },
  status: {
    type: String,
    label: 'value: active, inactive, trial',
  },
  dateCreated: {
    type: String,
    label: 'the date it was createad',
  },
  dateExpires: {
    type: String,
    label: 'when the company will expire'
  }
});

Companies.attachSchema(Companies.schema);

Factory.define('company', Companies, {
  name: () => 'Factory Title',
  status: () => 'Factory Status',
  dateCreated: () => 'Factory dateCreated',
  dateExpires: () => 'Factory dateExpires',
});
