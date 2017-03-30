import {Meteor} from 'meteor/meteor';
import React from 'react';
import {Row, Col, FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';
import handleSettings from '../../modules/settings';

export default class Settings extends React.Component {
  componentDidMount() {
    handleSettings({component: this});
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
        <div className="Settings">
          <Row>
            <Col xs={ 12 } sm={ 6 } md={ 4 }>
              <h4 className="page-header">Change Email</h4>
              <form ref={ form => (this.settingsForm = form) } onSubmit={ this.handleSubmit }>

                <p>Your email address is currently: <strong>{this.props.email}</strong></p>

                <FormGroup>
                  <ControlLabel>New Email Address</ControlLabel>
                  <FormControl
                      type="text"
                      ref="newEmailAddress"
                      name="newEmailAddress"
                      placeholder="New Email Address"
                  />
                </FormGroup>
                <Button type="submit" bsStyle="success">Change email</Button>
              </form>
            </Col>
          </Row>
        </div>
    );
  }
}
