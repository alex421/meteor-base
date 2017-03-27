/* eslint-disable no-undef */

import { browserHistory } from 'react-router';
import { Bert } from 'meteor/themeteorchef:bert';
import { upsertCompany } from '../api/companies/methods.js';
import './validation.js';

let component;


const handleUpsert = () => {


  const { doc } = component.props;
  const confirmation = doc && doc._id ? 'Company updated!' : 'Company added!';
  const upsert = {
    name: document.querySelector('[name="name"]').value.trim(),
    status: document.querySelector('#companyStatus').value.trim(),
    dateCreated: document.querySelector('[name="dateCreated"]').value.trim(),
    dateExpires: document.querySelector('[name="dateExpires"]').value.trim(),
  };

  if (doc && doc._id) upsert._id = doc._id;

  upsertCompany.call(upsert, (error, response) => {
    if (error) {
      Bert.alert(error.reason, 'danger');
    } else {
      component.companyEditorForm.reset();
      Bert.alert(confirmation, 'success');
      browserHistory.push(`/companies/${response.insertedId || doc._id}`);
    }
  });
};

const validate = () => {
  $(component.companyEditorForm).validate({
    rules: {
      name: {
        required: true,
      },

    },
    messages: {
      name: {
        required: 'Need a name in here, Seuss.',
      },

    },
    submitHandler() { handleUpsert(); },
  });
};

export default function companyEditor(options) {
  component = options.component;
  validate();
}
