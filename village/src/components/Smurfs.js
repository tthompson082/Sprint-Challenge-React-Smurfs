import React, { Component } from 'react';
import { Row } from 'reactstrap';

import Smurf from './Smurf';

const divStyle = {
  marginTop: '1em'
}

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs" style={divStyle}>
          <Row>
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
          </Row>
      </div>
    );
  }
}

Smurf.defaultProps = {
  smurfs: [],
};

export default Smurfs;
