import {Meteor} from 'meteor/meteor';
import {composeWithTracker} from 'react-komposer';
import Settings from '../pages/Settings.js';
import Loading from '../components/Loading.js';

const composer = ({params}, onData) => {

  const subscription = Meteor.subscribe('users.list');

  if (subscription.ready()) {

    let currentEmail = Meteor.user().emails[0].address;

    const data = {
      currentEmail: currentEmail,
    };

    onData(null, {data});
  }
};

export default composeWithTracker(composer, Loading)(Settings);
