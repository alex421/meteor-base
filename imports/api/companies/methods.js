import { SimpleSchema }     from 'meteor/aldeed:simple-schema';
import { ValidatedMethod }  from 'meteor/mdg:validated-method';

import Companies from './companies';
import rateLimit from '/imports/modules/rate-limit.js';

export const upsertCompany = new ValidatedMethod({
  name: 'companies.upsert',
  validate: new SimpleSchema({
    _id: { type: String, optional: true },
    name: { type: String, optional: true },
    status: { type: String, optional: true },
    dateCreated: { type: String, optional: true },
    dateExpires: { type: String, optional: true },
  }).validator(),
  run(company) {
    return Companies.upsert({ _id: company._id }, { $set: company });
  },
});

export const removeCompany = new ValidatedMethod({
  name: 'companies.remove',
  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {
    Companies.remove(_id);
  },
});
