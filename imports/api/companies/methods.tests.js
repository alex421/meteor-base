/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback */

import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';
import { resetDatabase } from 'meteor/xolvio:cleaner';
import { Factory } from 'meteor/dburles:factory';
import Companies from './companies.js';
import { upsertCompany, removeCompany } from './methods.js';

describe('Companies methods', function () {
  beforeEach(function () {
    if (Meteor.isServer) {
      resetDatabase();
    }
  });

  it('inserts a company into the Companies collection', function () {
    upsertCompany.call({
      title: 'You can\'t arrest me, I\'m the Cake Boss!',
      body: 'They went nuts!',
    });

    const getCompany = Companies.findOne({ title: 'You can\'t arrest me, I\'m the Cake Boss!' });
    assert.equal(getCompany.body, 'They went nuts!');
  });

  it('updates a company in the Companies collection', function () {
    const { _id } = Factory.create('company');

    upsertCompany.call({
      _id,
      title: 'You can\'t arrest me, I\'m the Cake Boss!',
      body: 'They went nuts!',
    });

    const getCompany = Companies.findOne(_id);
    assert.equal(getCompany.title, 'You can\'t arrest me, I\'m the Cake Boss!');
  });

  it('removes a company from the Companies collection', function () {
    const { _id } = Factory.create('company');
    removeCompany.call({ _id });
    const getCompany = Companies.findOne(_id);
    assert.equal(getCompany, undefined);
  });
});
