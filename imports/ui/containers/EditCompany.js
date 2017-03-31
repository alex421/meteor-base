import {Meteor} from 'meteor/meteor';
import {composeWithTracker} from 'react-komposer';
import Companies from '../../api/companies/companies';
import EditCompany from '../pages/EditCompany.js';
import Loading from '../components/Loading.js';

const composer = ({params}, onData) => {
  const subscription = Meteor.subscribe('companies.view', params._id);

  if (subscription.ready()) {
    const doc = Companies.findOne(params._id);
    onData(null, {doc});
  }
};

export default composeWithTracker(composer, Loading)(EditCompany);
