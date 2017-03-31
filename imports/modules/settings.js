import {Meteor} from 'meteor/meteor';
import {Bert} from 'meteor/themeteorchef:bert';
import './validation.js';
import {changeEmail} from '/imports/api/users/methods.js';

let component;

const getUserData = () => ({
  newEmailAddress: document.querySelector('[name="newEmailAddress"]').value,
});

const settings = () => {
  const user = getUserData();

  const data = {
    oldEmailAddress: Meteor.user().emails[0].address,
    newEmailAddress: user.newEmailAddress,
  };

  if (data.oldEmailAddress === data.newEmailAddress) {
    Bert.alert('Email already exists', 'danger');
    return false;
  }

  changeEmail.call(data, (error, response) => {
    if (error) {
      Bert.alert(error.reason, 'danger');
    } else {
      Bert.alert(response, 'success');
      component.settingsForm.reset();
    }
  });
};

const validate = () => {
  $(component.settingsForm).validate({
    rules: {},
    messages: {},
    submitHandler() {
      settings();
    }
  });
};

export default function handleSettings(options) {
  component = options.component;
  validate();
}
