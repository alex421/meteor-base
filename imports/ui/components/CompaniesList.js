import React from 'react';
import { browserHistory } from 'react-router';
import { ListGroup, ListGroupItem, Alert } from 'react-bootstrap';

const handleNav = (_id) => {
  browserHistory.push(`/companies/${_id}`);
}

const CompaniesList = ({ companies }) => (
  companies.length > 0 ? <ListGroup className="CompaniesList">
    {companies.map(({ _id, name }) => (
      <ListGroupItem key={ _id } onClick={ () => handleNav(_id) }>
        { name }
      </ListGroupItem>
    ))}
  </ListGroup> :
  <Alert bsStyle="warning">No companies yet.</Alert>
);

CompaniesList.propTypes = {
  companies: React.PropTypes.array,
};

export default CompaniesList;
