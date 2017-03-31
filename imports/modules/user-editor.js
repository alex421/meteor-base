/* eslint-disable no-undef */

import {browserHistory} from 'react-router';
import {Bert} from 'meteor/themeteorchef:bert';
import {upsertUser} from '/imports/api/users/methods.js';
import './validation.js';

let component;

const handleUpsert = () => {
  const {doc} = component.props;
  const confirmation = doc && doc._id ? 'User updated!' : 'User added!';
  const upsert = {
    companyID: component.props.companyID,
    name: document.querySelector('[name="name"]').value.trim(),
    surname: document.querySelector('[name="surname"]').value.trim(),
    tel: document.querySelector('[name="tel"]').value.trim(),
    fonction: document.querySelector('[name="fonction"]').value.trim(),
    dateCreated: document.querySelector('[name="dateCreated"]').value.trim(),
    email: document.querySelector('[name="email"]').value.trim(),
    password: document.querySelector('[name="password"]').value.trim(),
  };

  if (doc && doc._id) upsert._id = doc._id;

  upsertUser.call(upsert, (error, response) => {
    if (error) {
      Bert.alert(error.reason, 'danger');
    } else {
      component.documentEditorForm.reset();
      Bert.alert(confirmation, 'success');
      browserHistory.push(`/companies/${component.props.companyID}`);
    }
  });
};

const validate = () => {
  $(component.documentEditorForm).validate({
    rules: {
      name: {
        required: true,
      },
      tel: {
        number: true
      },
      email: {
        email: true
      }

    },
    messages: {
      name: {
        required: 'Insert name please.',
      },
      tel: {
        number: "must be number"
      },
      email: {
        email: "must be a valid email"
      }

    },
    submitHandler() {
      handleUpsert();
    },
  });
};

export default function documentEditor(options) {
  component = options.component;
  validate();
}
