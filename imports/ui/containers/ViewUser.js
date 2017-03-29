import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import UsersDetails from '../../api/usersdetails/usersdetails.js';
import ViewUser from '../pages/ViewUser.js';
import Loading from '../components/Loading.js';

const composer = ({ params }, onData) => {
//  const subscription = Meteor.subscribe('users.view', params._id);
  const subscription = Meteor.subscribe('users.list');

  if (subscription.ready()) {
    const doc = Meteor.users.findOne(params._id);
    onData(null, { doc });
  }
};

export default composeWithTracker(composer, Loading)(ViewUser);
