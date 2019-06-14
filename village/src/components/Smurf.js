import React from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Row, } from 'reactstrap';

import './Smurfs.scss'

const Smurf = props => {
  return (
    <div className='mb-3'>
      <Card color='light'>
        <CardBody>
          <CardTitle>{props.name}</CardTitle>
          <CardSubtitle>{props.height} tall</CardSubtitle>
          <CardText>{props.age} smurf years old</CardText>
        </CardBody>
      </Card>
      <Row />
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

