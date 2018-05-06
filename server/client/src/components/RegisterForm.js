import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';
export default class RegisterForm extends React.Component {
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
        axios.post( "/api/register", {
            email: this.state.email,
            password: this.state.password,
          }).then(function(data){
            console.log(data);
          });
    }

  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input onChange = {this.onEmailChange} type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input onChange = {this.onPasswordChange} type="password" name="password" id="examplePassword" placeholder="Please Enter a Password" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="Please Repeat The Password" />
        </FormGroup>
        <Button onClick={this.formSubmit}>Submit</Button>
      </Form>
    );
  }
}