/*maybe i dont need this file */

import {Mongo} from 'meteor/mongo';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';
import {Factory} from 'meteor/dburles:factory';

const UsersDetails = new Mongo.Collection('UsersDetails');
export default UsersDetails;

UsersDetails.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

UsersDetails.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

UsersDetails.schema = new SimpleSchema({
  name: {
    type: String,
    label: 'name',
  },
  surname: {
    type: String,
    label: 'surname',
  },
  tel: {
    type: String,
    label: 'tel',
  },
  fonction: {
    type: String,
    label: 'fonction',
  },
  dateCreated: {
    type: String,
    label: 'surname',
  },


});

UsersDetails.attachSchema(UsersDetails.schema);

Factory.define('document', UsersDetails, {
  name: () => 'Factory name',
  surname: () => 'Factory surname',
  tel: () => 'Factory tel',
  fonction: () => 'Factory fonction',
  surname: () => 'Factory surname',
});
