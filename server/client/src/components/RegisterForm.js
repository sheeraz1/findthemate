import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';
import {connect} from 'react-redux';
import {FETCH_USER} from '../actions/types';
import {Redirect} from 'react-router';
import {Col} from 'reactstrap';
var validator = require('email-validator');

class RegisterForm extends React.Component {
    state={
        email: '',
        password1: '',
        password2: '',
        isloggedIn: false,
        error : '',
    }

    onPassword1Change = (e) => {
        this.setState({
            password1 : e.target.value
        })
    }

    onPassword2Change = (e) => {
        this.setState({
            password2 : e.target.value
        })
    }

    onEmailChange = (e) => {
        this.setState({
            email : e.target.value
        })
    }

    formSubmit = () =>{
        if (validator.validate(this.state.email) !== true){
            this.setState({
                error: 'Invalid email address!'
            });
            return;
        }
        if (this.state.password1 !== this.state.password2 ){
            this.setState({
                error: 'Passwords do not match'
            })
            return;
        }
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
    <Col sm={{size:6, offset:3}}>
      <Form className="formdiv">
        <FormGroup>
          <Label className="form-label" for="exampleEmail">Email</Label>
          <Input onChange = {this.onEmailChange} type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label className="form-label" for="examplePassword">Password</Label>
          <Input onChange = {this.onPassword1Change} type="password" name="password1" id="examplePassword1" placeholder="Please Enter a Password" />
        </FormGroup>
        <FormGroup>
          <Label className="form-label" for="examplePassword">Password</Label>
          <Input onChange = {this.onPassword2Change} type="password" name="password2" id="examplePassword2" placeholder="Please Repeat The Password" />
        </FormGroup>
        <FormGroup>
          <Label className={this.state.error? "form-error": "hide"}>{this.state.error}</Label>
        </FormGroup>
        <Button onClick={this.formSubmit}>Submit</Button>
      </Form>
    </Col>
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