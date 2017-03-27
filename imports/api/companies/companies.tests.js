/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback */

import { assert } from 'meteor/practicalmeteor:chai';
import Companies from './companies.js';

describe('Companies collection', function () {
  it('registers the collection with Mongo properly', function () {
    assert.equal(typeof Companies, 'object');
  });
});
