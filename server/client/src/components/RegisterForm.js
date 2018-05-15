import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';
import {connect} from 'react-redux';
import {FETCH_USER} from '../actions/types';
import {Redirect} from 'react-router';

class RegisterForm extends React.Component {
    state={
        email: '',
        password: '',
        isloggedIn: false,
        error : '',
    }

    onPasswordChange = (e) => {
        this.setState({
            password : e.target.value
        })
    }

    onEmailChange = (e) => {
        this.setState({
            email : e.target.value
        })
    }

    formSubmit = () =>{
        axios.post( "/api/register", {
          email: this.state.email,
          password: this.state.password,
        
      }).then(
          (response) => {
              if (response.status === 200 && response.data.user){
                  this.props.setUser(response.data.user);
                  this.setState({
                      isloggedIn : true,
                      error: '',
                  })
              }
              else{
                  this.setState({
                      error : 'error registering',
                      isloggedIn : false,
                  })
              }

          }
      )
    }

  render() {
    return( this.state.isloggedIn ? <Redirect to="/"/> :
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input onChange = {this.onEmailChange} type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input onChange = {this.onPasswordChange} type="password" name="password" id="examplePassword1" placeholder="Please Enter a Password" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword2" placeholder="Please Repeat The Password" />
        </FormGroup>
        <Button onClick={this.formSubmit}>Submit</Button>
      </Form>
    );
  }
}



function mapDispatchToRegisterFormProps(dispatch){
  return {
      setUser : (user) =>{
          dispatch({ type: FETCH_USER, payload: user })
      }
  }
}

export default connect(null, mapDispatchToRegisterFormProps)(RegisterForm);