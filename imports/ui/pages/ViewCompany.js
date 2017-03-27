import React from 'react';
import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import { Bert } from 'meteor/themeteorchef:bert';
import { removeCompany } from '../../api/companies/methods';
import NotFound from './NotFound';

const handleEdit = (_id) => {
  browserHistory.push(`/companies/${_id}/edit`);
};

const handleRemove = (_id) => {
  if (confirm('Are you sure? This is permanent!')) {
    removeCompany.call({ _id }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        Bert.alert('Company deleted!', 'success');
        browserHistory.push('/companies');
      }
    });
  }
};

const ViewCompany = ({ doc }) => {
  return doc ? (
    <div className="ViewCompany">
      <div className="page-header clearfix">
        <h4 className="pull-left">{ doc && doc.name }</h4>
        <ButtonToolbar className="pull-right">
          <ButtonGroup bsSize="small">
            <Button onClick={ () => handleEdit(doc._id) }>Edit</Button>
            <Button onClick={ () => handleRemove(doc._id) } className="text-danger">Delete</Button>
          </ButtonGroup>
        </ButtonToolbar>
      </div>
      { doc && doc.body }
    </div>
  ) : <NotFound />;
};

ViewCompany.propTypes = {
  doc: React.PropTypes.object,
};

export default ViewCompany;
