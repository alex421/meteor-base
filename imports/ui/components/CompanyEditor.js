/* eslint-disable max-len, no-return-assign */

import React from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import companyEditor from '../../modules/company-editor';
import '../library/bootstrap-datepicker.min.js';
import '../library/bootstrap-datepicker3.min.css';
import '../library/bootstrap-datepicker.fr.min';

export default class CompanyEditor extends React.Component {
  componentDidMount() {
    companyEditor({ component: this });
    $('[name="dateExpires"], [name="dateCreated"]').datepicker({
        orientation: "bottom left",
        language: "fr"
    });


    setTimeout(() => { document.querySelector('[name="name"]').focus(); }, 0);
  }

  render() {
    const { doc } = this.props;
    return (<form
      ref={ form => (this.companyEditorForm = form) }
      onSubmit={ event => event.preventDefault() }
    >
      <FormGroup>
        <ControlLabel>Name</ControlLabel>
        <FormControl
          type="text"
          name="name"
          defaultValue={ doc && doc.name }
          placeholder="Name of the Company"
        />
      </FormGroup>
      <FormGroup controlId="companyStatus">
        <ControlLabel>Status</ControlLabel>
        <FormControl
          componentClass="select"
          placeholder="Select Status"
          defaultValue={ doc && doc.status }
                >
          <option value="active">active</option>
          <option value="inactive">inactive</option>
          <option value="trial">trial</option>
        </FormControl>
      </FormGroup>

      <FormGroup>
        <ControlLabel>dateCreated</ControlLabel>
        <FormControl
          type="text"
          name="dateCreated"
          defaultValue={ doc && doc.dateCreated }
          placeholder="Date of creation"
        />
      </FormGroup>
      <FormGroup>
        <ControlLabel>dateExpires</ControlLabel>
        <FormControl
          type="text"
          name="dateExpires"
          defaultValue={ doc && doc.dateExpires }
          placeholder="Date it expires"
        />
      </FormGroup>
      <Button type="submit" bsStyle="success">
        { doc && doc._id ? 'Save Changes' : 'Add Document' }
      </Button>
    </form>);
  }
}

CompanyEditor.propTypes = {
  doc: React.PropTypes.object,
};
