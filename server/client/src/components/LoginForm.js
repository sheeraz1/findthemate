import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class LoginForm extends React.Component {
    state={
        email: "",
        password: ""
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
        axios.post( "/api/login", {
            email: this.state.email,
            password: this.state.password,
          }).then(function(data){
            console.log(data);
          });
    }
  render() {
      console.log(this.state);
    return (
      <div>
        <div className="formdiv">
            <Form>
                <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input onChange = {this.onEmailChange} type="email" name="email" id="exampleEmail" placeholder="with a placeholder" ref="email" />
                </FormGroup>
                <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input onChange = {this.onPasswordChange} type="password" name="password" id="examplePassword" placeholder="password placeholder" ref="password" />
                </FormGroup>
                <Button onClick = {this.onClick} >Submit</Button>
            </Form>
        </div>
        <Button tag={Link} to="/register"> 
            Register
        </Button>
    </div>

    );
  }
}