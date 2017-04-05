import {composeWithTracker} from 'react-komposer';
import {Meteor} from 'meteor/meteor';

import UsersList from '../components/UsersList.js'

import Loading from '../components/Loading.js';

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('users.list');
  if (subscription.ready()) {
    var companyID = params.companyID;
    const users = Meteor.users.find({}).fetch();
    const result = Meteor.users.find({"information.companyID": companyID}).fetch()
console.log("ALLusers",users)

    var users = result.map((user) => {
      return {
        "name": user.profile.name.first,
        "surname": user.profile.name.last,
        "tel": user.information.tel,
        "fonction": user.information.fonction,
        "dateCreated": user.information.dateCreated,
        "email": user.emails[0].address,
        "password": "xxxxx",
        "companyID": user.information.companyID,
        "_id": user._id
      }
    });

    onData(null, {users, companyID});
  }
};

export default composeWithTracker(composer, Loading)(UsersList);
