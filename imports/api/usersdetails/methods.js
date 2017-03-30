import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { Roles } from 'meteor/alanning:roles';
import UsersDetails from './usersdetails';
import rateLimit from '../../modules/rate-limit.js';
import { Accounts } from 'meteor/accounts-base';

export const upsertUser = new ValidatedMethod({
  name: 'users.upsert',
  validate: new SimpleSchema({
    _id: { type: String, optional: true },
    companyID: { type: String, optional: true },
    name: { type: String, optional: false },
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
      const users = [{
        email: document.email,
        password: document.password,
        profile: {
          name: { first: document.name, last: document.surame },
        },
        information: {
          companyID:document.companyID,
          tel:document.tel,
          fonction:document.fonction,
          dateCreated:document.dateCreated,
        },
        roles: ['admin'],
      }];

      users.forEach(({ email, password, profile, information,roles }) => {
        const userExists = Meteor.users.findOne({ 'emails.address': email });
        if (!userExists) {
           userId = Accounts.createUser({ email, password, profile });
            Meteor.users.update(userId  ,{ $set: {information:information} });
            if (users[0].roles.length > 0) {
              if (Meteor.isServer) {
                  Roles.addUsersToRoles(userId, roles);
              }
            }

        }
      });



    //  return Meteor.users.upsert({ _id: document._id }, { $set: document });
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
