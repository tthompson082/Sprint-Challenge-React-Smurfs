import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';

import Smurf from './Smurf';

const divStyle = {
  marginTop: '1em'
}

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs" style={divStyle}>
        <Container fluid>
          <Row>
            <Col xl={{size: 4, offset: 4}}>
              {this.props.smurfs.map(smurf => {
                return (
                  <Smurf
                    name={smurf.name}
                    id={smurf.id}
                    age={smurf.age}
                    height={smurf.height}
                    key={smurf.id}
                  />
                );
              })}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
