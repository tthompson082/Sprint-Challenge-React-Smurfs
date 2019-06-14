import React from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Link } from 'react-router-dom';



const Smurf = props => {
  return (
    <div className='mb-3 col-6'>
      <Card inverse color='primary'>
        <CardBody>
          <CardTitle>{props.name}</CardTitle>
          <CardSubtitle>{props.height} tall</CardSubtitle>
          <CardText>{props.age} smurf years old</CardText>
          <Link to={`/smurfs/${props.id}`}>
            <Button color='dark'>Update</Button>
          </Link>
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

