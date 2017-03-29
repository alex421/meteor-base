import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import UsersDetails from './usersdetails';
import rateLimit from '../../modules/rate-limit.js';

export const upsertUser = new ValidatedMethod({
  name: 'users.upsert',
  validate: new SimpleSchema({
    _id: { type: String, optional: true },
    companyID: { type: String, optional: true },
    name: { type: String, optional: true },
    surname: { type: String, optional: true },
    tel: { type: String, optional: true },
    fonction: { type: String, optional: true },
    dateCreated: { type: String, optional: true },
    email: { type: String, optional: true },
    password: { type: String, optional: true },
  }).validator(),
  run(document) {
    if (document._id) {
      var clone = Object.assign({}, document);
      delete clone._id;
      return  Meteor.users.update(document._id  ,{ $set: clone });
    }
    else {
      return Meteor.users.upsert({ _id: document._id }, { $set: document });
    }
  },
});

export const removeUser = new ValidatedMethod({
  name: 'users.remove',
  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {
    Meteor.users.remove(_id); 
  },
});

rateLimit({
  methods: [
    upsertUser,
    removeUser,
  ],
  limit: 5,
  timeRange: 1000,
});
