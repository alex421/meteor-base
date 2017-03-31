import React from 'react';
import {browserHistory} from 'react-router';
import {Bert} from 'meteor/themeteorchef:bert';
import {removeCompany} from '../../api/companies/methods';
import {ListGroup, ButtonToolbar, ButtonGroup, Button, ListGroupItem, Alert} from 'react-bootstrap';

const handleNav = (_id) => {
  browserHistory.push(`/companies/${_id}`);
}

const handleEdit = (_id) => {
  browserHistory.push(`/companies/${_id}/edit`);
};


const handleRemove = (_id) => {
  if (confirm('Are you sure? This is permanent!')) {
    removeCompany.call({_id}, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        Bert.alert('Company deleted!', 'success');
        browserHistory.push('/companies');
      }
    });
  }
};

const CompaniesList = ({companies}) => (
    companies.length > 0 ? <ListGroup className="CompaniesList">
          {companies.map(({_id, name}) => (
              <ListGroupItem key={ _id }>
                { name }
                <ButtonToolbar className="pull-right">
                  <ButtonGroup bsSize="small">
                    <Button onClick={ () => handleNav(_id) }>View</Button>
                    <Button onClick={ () => handleEdit(_id) }>Edit</Button>
                    <Button onClick={ () => handleRemove(_id) } className="text-danger">Delete</Button>

                  </ButtonGroup>
                </ButtonToolbar>
              </ListGroupItem>
          ))}
        </ListGroup> :
        <Alert bsStyle="warning">No companies yet.</Alert>
);

CompaniesList.propTypes = {
  companies: React.PropTypes.array,
};

export default CompaniesList;
