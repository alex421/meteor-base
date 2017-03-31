/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback */

import {Meteor}         from 'meteor/meteor';
import {assert}         from 'meteor/practicalmeteor:chai';
import {resetDatabase}  from 'meteor/xolvio:cleaner';
import {Factory}        from 'meteor/dburles:factory';

import Documents                        from './users.js';
import {upsertDocument, removeDocument} from './methods.js';

describe('Users methods', function () {
  beforeEach(function () {
    if (Meteor.isServer) {
      resetDatabase();
    }
  });
});
