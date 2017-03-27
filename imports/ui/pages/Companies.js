import React from 'react';
import { Link } from 'react-router';
import { Row, Col, Button } from 'react-bootstrap';
import CompaniesList from '../containers/CompaniesList.js';

const Companies = () => (
  <div className="Companies">
    <Row>
      <Col xs={ 12 }>
        <div className="page-header clearfix">
          <h4 className="pull-left">Companies List</h4>
          <Link to="/companies/new">
            <Button
              bsStyle="success"
              className="pull-right"
            >New Company</Button>
          </Link>
        </div>
        <CompaniesList />
      </Col>
    </Row>
  </div>
);


export default Companies;
