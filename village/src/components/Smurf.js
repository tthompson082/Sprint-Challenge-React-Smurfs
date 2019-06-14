import React from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Row, Button } from 'reactstrap';



const Smurf = props => {
  return (
    <div className='mb-3 col-6'>
      <Card inverse color='primary'>
        <CardBody>
          <CardTitle>{props.name}</CardTitle>
          <CardSubtitle>{props.height} tall</CardSubtitle>
          <CardText>{props.age} smurf years old</CardText>
          <Button color='danger'>Delete</Button>
        </CardBody>
      </Card>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

