import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import UsersDetails from '../../api/usersdetails/usersdetails.js';
import EditUser from '../pages/EditUser.js';
import Loading from '../components/Loading.js';

const composer = ({ params }, onData) => {
  //const subscription = Meteor.subscribe('documents.view', params._id);
  const subscription = Meteor.subscribe('users.list');

  if (subscription.ready()) {
    const result = Meteor.users.findOne(params._id);
    
    var doc=result.map((user)=>{
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
    onData(null, { doc });
  }
};

export default composeWithTracker(composer, Loading)(EditUser);
