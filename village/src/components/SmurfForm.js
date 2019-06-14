import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    this.props.postSmurf(this.state)

    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm col-4 offset-4 mt-2">
        <Form onSubmit={this.addSmurf}>
          <FormGroup>
            <Label for='name'>Name</Label>
            <Input
              onChange={this.handleInputChange}
              placeholder="Name"
              value={this.state.name}
              name="name"
            />
          </FormGroup>
          <FormGroup>
            <Label for='age'>Age</Label>
            <Input
              onChange={this.handleInputChange}
              placeholder="Age"
              value={this.state.age}
              name="age"
            />
          </FormGroup>
          <FormGroup>
            <Label for='height'>Height</Label>
            <Input
              onChange={this.handleInputChange}
              placeholder="Height"
              value={this.state.height}
              name="height"
            />
          </FormGroup>
          <FormGroup>
            <Button color='primary' type="submit">Add to the village</Button>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default SmurfForm;
