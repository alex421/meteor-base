import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';

import UsersList from '../components/UsersList.js'

import Loading from '../components/Loading.js';

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('users.list');
  if (subscription.ready()) {
    var companyID= params.companyID;
    //const users = Meteor.users.find({companyID: params.companyID}).fetch();
    const result= Meteor.users.find({"information.companyID": companyID}).fetch()


  var users=result.map((user)=>{
   return {
            "name":user.profile.name.first,
            "surname":user.profile.name.last,
            "tel":user.information.tel,
            "fonction":user.information.fonction,
            "dateCreated":user.information.dateCreated,
            "email":user.emails[0].address,
            "password":"xxxxx",
            "companyID":user.information.companyID,
            "_id":user._id
          }
  })

    console.log("ALLusers",Meteor.users.find().fetch())
    console.log("Some users",Meteor.users.find({"information.companyID": companyID}).fetch())


//    const users = Meteor.users.find({companyID: params.companyID}).fetch();

    onData(null, { users ,companyID });
  }
};

export default composeWithTracker(composer, Loading)(UsersList);
