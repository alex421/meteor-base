import React from 'react';
import {Jumbotron} from 'react-bootstrap';

const Index = () => (
    <div className="Index">
      <Jumbotron className="text-center">
        <h2>Base</h2>
        <p>Application main page </p>
        <p><a className="btn btn-success" href="https://themeteorchef.com/base" role="button">Application is loaded</a></p>
        <p style={ {fontSize: '16px', color: '#aaa'} }>Currently at v1</p>
      </Jumbotron>
    </div>
);

export default Index;
