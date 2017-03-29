import React from 'react';
import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import { removeUser } from '../../api/usersdetails/methods';
import NotFound from './NotFound';

const handleEdit = (_id) => {
  browserHistory.push(`/users/${_id}/edit`);
};



const ViewUser = ({ doc }) => {
  return doc ? (
    <div className="ViewUser">
      <div className="page-header clearfix">
        <h4 className="pull-left">Profile of user: { doc && doc.name }</h4>
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

ViewUser.propTypes = {
  doc: React.PropTypes.object,
};

export default ViewUser;
