import React from 'react';
import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import UsersList from '../containers/UsersList'
import NotFound from './NotFound';


const handleNewUser = (_id) => {
  browserHistory.push(`/users/new/${_id}`);
};



const ViewCompany = ({ doc }) => {
  return doc ? (
    <div className="ViewCompany">
      <div className="page-header clearfix">
        <h4 className="pull-left">Company Profile: { doc && doc.name }</h4>
        <ButtonToolbar className="pull-right">
          <ButtonGroup bsSize="small">
            <Button onClick={ () => handleNewUser(doc._id) } className="text-danger">New User</Button>
          </ButtonGroup>
        </ButtonToolbar>
      </div>
      { doc && doc.body }
      <UsersList companyID={doc._id} />
    </div>
  ) : <NotFound />;


};

ViewCompany.propTypes = {
  doc: React.PropTypes.object,
};

export default ViewCompany;
