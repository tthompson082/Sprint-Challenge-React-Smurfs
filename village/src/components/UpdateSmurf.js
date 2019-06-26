import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Card, CardBody } from 'reactstrap';
import axios from 'axios';

class UpdateSmurf extends Component {
    constructor(props) {
        super(props);
        this.state = {
        smurf: {
            name: 'name',
            age: 'age',
            height: 'height'
        }
        };
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.fetchSmurf(id)
    }

    fetchSmurf = id => {
        axios
            .get(`http://localhost:3333/smurfs/${id}`)
            .then(res => {
                console.log(res)
                this.setState({
                    smurf: res.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    handleInputChange = e => {
        this.setState({
            smurf: {
                ...this.state.smurf,
                [e.target.name]: e.target.value 
            }
        });
    };

    delSmurf = e => {
        e.preventDefault();
        this.props.deleteSmurf(this.state.smurf)
    }

    updSmurf = e => {
        e.preventDefault();
        this.props.putSmurf(this.state.smurf)
    }

    render() {
        return (
        <div className="SmurfForm col-4 offset-4 mt-2">
            <Card inverse color='primary'>
                <CardBody>
                    <Form>
                    <FormGroup>
                        <Label for='name'>Name</Label>
                        <Input
                        onChange={this.handleInputChange}
                        placeholder="Name"
                        value={this.state.smurf.name}
                        name="name"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for='age'>Age</Label>
                        <Input
                        onChange={this.handleInputChange}
                        placeholder="Age"
                        value={this.state.smurf.age}
                        name="age"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for='height'>Height</Label>
                        <Input
                        onChange={this.handleInputChange}
                        placeholder="Height"
                        value={this.state.smurf.height}
                        name="height"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Button color='secondary' type="submit" onClick={this.updSmurf}>Update</Button>
                        <Button color='secondary' className='ml-2' type='submit' onClick={this.delSmurf}>Delete</Button>
                    </FormGroup>
                    </Form>
                </CardBody>
            </Card>
        </div>
        );
    }
}

export default UpdateSmurf;

