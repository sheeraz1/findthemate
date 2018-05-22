import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';
import {FETCH_USER} from '../actions/types';
import {Redirect} from 'react-router';
import {Col} from 'reactstrap';

 class LoginForm extends React.Component {
    state={
        email: "",
        password: "",
        error: "",
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
          
        }).then(
            (response) => {
                if (response.status === 200 && response.data.user){
                    this.props.setUser(response.data.user);
                    this.setState({
                        isloggedIn : true,
                        error: '',
                        user : '',
                        email : '',
                    });
                }
                else{
                    this.setState({
                        error: response.data.message
                    })
                }
            }
        )
        .catch( (err) =>{
                this.setState({
                    error: 'Server error'
                })
            }
        )
    }

  render() {
    return( this.state.isloggedIn ? <Redirect to="/"/> :
     
      <Col sm={{size:6, offset:3}}>
        <div className="formdiv">
            <Form>
                <FormGroup>
                <Label className="form-label" for="exampleEmail">Email</Label>
                <Input onChange = {this.onEmailChange} type="email" name="email" id="exampleEmail" placeholder="Enter a valid email" ref="email" />
                </FormGroup>
                <FormGroup>
                <Label className="form-label" for="examplePassword">Password</Label>
                <Input onChange = {this.onPasswordChange} type="password" name="password" id="examplePassword" placeholder="Enter password" ref="password" />
                <Label className="form-error">{this.state.error}</Label>
                </FormGroup>
                <Button className="form-button"onClick = {this.formSubmit} block >Submit</Button>
                <div className="regis-text">New User ? Register here:</div>
                <Button className="form-button" block tag={Link} to="/register"> 
                    Register
                </Button>
            </Form>
        </div>
        
    </Col>

    );
  }
}


function mapDispatchToLoginFormProps(dispatch){
    return {
        fetchUser : () =>{
            axios.get('/api/current_user').then(
				function(res){
					dispatch({ type: FETCH_USER, payload: res.data });
				}
			)
        },
        setUser : (user) =>{
            dispatch({ type: FETCH_USER, payload: user })
        }
    }
}

export default connect(null, mapDispatchToLoginFormProps)(LoginForm);