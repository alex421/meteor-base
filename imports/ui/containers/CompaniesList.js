import {composeWithTracker} from 'react-komposer';
import {Meteor} from 'meteor/meteor';

import Companies from '../../api/companies/companies.js';
import CompaniesList from '../components/CompaniesList.js'

import Loading from '../components/Loading.js';

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('companies.list');
  if (subscription.ready()) {
    const companies = Companies.find().fetch();
    onData(null, {companies});
  }
};

export default composeWithTracker(composer, Loading)(CompaniesList);
