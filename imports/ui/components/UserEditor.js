/* eslint-disable max-len, no-return-assign */

import React from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import userEditor from '../../modules/user-editor.js';

export default class UserEditor extends React.Component {
  componentDidMount() {
    userEditor({ component: this });
    setTimeout(() => { document.querySelector('[name="name"]').focus(); }, 0);
  }

  render() {
    console.log(this.props)
    const { doc } = this.props;
    return (<form
      ref={ form => (this.documentEditorForm = form) }
      onSubmit={ event => event.preventDefault() }
    >
      <FormGroup>
        <ControlLabel>Name</ControlLabel>
        <FormControl
          type="text"
          name="name"
          defaultValue={ doc && doc.name }
          placeholder="name"
        />
      </FormGroup>
      <FormGroup>
        <ControlLabel>Surname</ControlLabel>
        <FormControl
          type="text"
          name="surname"
          defaultValue={ doc && doc.surname }
          placeholder="surname"
        />
      </FormGroup>
      <FormGroup>
        <ControlLabel>tel</ControlLabel>
        <FormControl
          type="text"
          name="tel"
          defaultValue={ doc && doc.tel }
          placeholder="tel"
        />
      </FormGroup>
      <FormGroup>
        <ControlLabel>fonction</ControlLabel>
        <FormControl
          type="text"
          name="fonction"
          defaultValue={ doc && doc.fonction }
          placeholder="fonction"
        />
      </FormGroup>
      <FormGroup>
        <ControlLabel>dateCreated</ControlLabel>
        <FormControl
          type="text"
          name="dateCreated"
          defaultValue={ doc && doc.dateCreated }
          placeholder="dateCreated"
        />
      </FormGroup>
      <FormGroup>
        <ControlLabel>Email</ControlLabel>
        <FormControl
          type="text"
          name="email"
          defaultValue={ doc && doc.email }
          placeholder="email"
        />
      </FormGroup>
      <FormGroup>
        <ControlLabel>password</ControlLabel>
        <FormControl
          type="text"
          name="password"
          defaultValue={ doc && doc.password }
          placeholder="password"
        />
      </FormGroup>

      <Button type="submit" bsStyle="success">
        { doc && doc._id ? 'Save Changes' : 'Add User' }
      </Button>
    </form>);
  }
}

UserEditor.propTypes = {
  doc: React.PropTypes.object,
};
