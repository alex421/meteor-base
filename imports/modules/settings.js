import {browserHistory} from 'react-router';
import {Accounts} from 'meteor/accounts-base';
import {Bert} from 'meteor/themeteorchef:bert';
import './validation.js';

let component;

const getUserData = () => ({
  newEmailAddress: document.querySelector('[name="newEmailAddress"]').value,
});

const settings = () => {
  const user = getUserData();

  alert(user.newEmailAddress);
};

const validate = () => {
  $(component.settingsForm).validate({
    rules: {

    },
    messages: {

    },
    submitHandler() {
      settings();
    }
  });
};

export default function handleSettings(options) {
  component = options.component;
  validate();
}
