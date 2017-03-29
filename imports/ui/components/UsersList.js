import React from 'react';
import { browserHistory } from 'react-router';
import { ListGroup,ButtonToolbar,ButtonGroup,Button, ListGroupItem, Alert } from 'react-bootstrap';
import { removeUser } from '../../api/usersdetails/methods';

const handleNav = (_id) => {
  browserHistory.push(`/users/${_id}`);
}

const handleEdit = (_id) => {
  browserHistory.push(`/users/${_id}/edit`);
};

const handleRemove = (_id) => {
  if (confirm('Are you sure? This is permanent!')) {
    removeUser.call({ _id }, (error) => {
      if (error) {
        console.log("err",error)
        Bert.alert(error.reason, 'danger');
      } else {
        Bert.alert('User deleted!', 'success');
        browserHistory.push('/companies');
      }
    });
  }
};


const UsersList = ({ users }) => (
   users.length > 0 ? <ListGroup className="UsersList">

    {users.map(({ _id, name,surname,tel,fonction,dateCreated,email }) => (
      <ListGroupItem key={ _id }>
        { name } {surname} {tel} {fonction} {dateCreated} {email}
        <ButtonToolbar className="pull-right">
          <ButtonGroup bsSize="small">
            <Button onClick={ () => handleEdit(_id) }>Edit</Button>
            <Button onClick={ () => handleRemove(_id) } className="text-danger">Delete</Button>
          </ButtonGroup>
        </ButtonToolbar>
      </ListGroupItem>
    ))}
  </ListGroup> :
  <Alert bsStyle="warning">No users yet.</Alert>
);

UsersList.propTypes = {
  users: React.PropTypes.array,
};

export default UsersList;
