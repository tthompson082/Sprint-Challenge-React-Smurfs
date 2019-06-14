import React, { Component } from 'react';
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';
import { Navbar, NavbarBrand, NavItem, Nav, Collapse, NavbarToggler } from 'reactstrap';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      activeSmurf: null,
      collapsed: true
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount() {
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
        console.log(res)
        this.setState({
          smurfs: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  postSmurf = smurf => {
    axios
      .post('http://localhost:3333/smurfs', smurf)
      .then(res => {
        console.log(res)
        this.setState({
          smurfs: res.data
        })
        this.props.history.push('/')
      })
      .catch(err => {
        console.log(err)
      })
  }

  deleteSmurf = (e, smurf) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:3333/smurfs/${smurf.id}`)
      .then(res => {
        this.setState({
          smurfs: res.data
        })
        this.props.history.push('/')
      })
      .catch(err => {
        console.log(err)
      })
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  render() {
    return (
      <div className="App">
        <Navbar color='light' light>
          <NavbarBrand href='/'>Smurf Village</NavbarBrand>
          <NavbarToggler onClick={this.toggle} className='mr-2' />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink to='/'>
                  <h5>Home</h5>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='/smurf-form'>
                  <h5>Add A Smurf!</h5>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <div className='container fluid'>
          <Route path='/smurf-form' render={(props) => (
            <SmurfForm {...props} postSmurf={this.postSmurf} />
          )} />
          <Route exact path='/' render={(props) => (
            <Smurfs {...props} smurfs={this.state.smurfs} />
          )} />
        </div>
      </div>
    );
  }
}

export default App;
