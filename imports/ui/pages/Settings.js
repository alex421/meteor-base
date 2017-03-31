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
    const {data} = this.props;

    return (
        <div className="Settings">
          <Row>
            <Col xs={ 12 } sm={ 7 } md={ 5 }>
              <h4 className="page-header">Change Email</h4>
              <form ref={ form => (this.settingsForm = form) } onSubmit={ this.handleSubmit }>

                <p>Your email address is currently: <strong>{data.currentEmail}</strong></p>

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
