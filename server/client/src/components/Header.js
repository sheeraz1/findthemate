import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
import {FETCH_USER} from '../actions/types';
import {
    Navbar,
    Nav,
    NavItem
 } from 'reactstrap';

class Header extends Component{
    constructor(props){
        super(props);
        this.logout = this.logout.bind(this);
        this.state={};
        if (props.user){
            this.state.user = props.user;
        }
    }
    logout = () => {
        this.setState({
            user:null,
        })
        var fetchUser = this.props.fetchUser;
        axios.get('/api/logout').then((response) =>{
            fetchUser();
        }
        )
        
    }

    componentWillReceiveProps(props){
        this.setState({
            user : props.user,
        });
    }
    render(){
        return this.renderContent();
     }; 

    componentWillMount(){
    }
    renderContent = () => {
        if (this.state.user){
            return (
                <div>
                    <Navbar className="navbarheader" expand="md">
                    <Nav className="mr-auto">
                    <NavItem className="navitem textsize">
                        Find The Mate
                    </NavItem>
                    </Nav>
                    <Nav className="ml-auto">
                    <NavItem className="navitem">
                        <Link className = "textsize" to="/map">Map</Link>
                    </NavItem>
                    <NavItem  className="navitem">
                        <Link className = "textsize" to="/" onClick={()=>{this.logout()}}>Log Out</Link>
                    </NavItem>
                
                    </Nav>
                    </Navbar>
                </div>
            );
            
        }
        else return (
            <div>
                <Navbar className="navbarheader" expand="md">
                <Nav className="mr-auto">
                <NavItem className="navitem textsize">
                    Find The Mate
                </NavItem>
                </Nav>
                <Nav className="ml-auto">
                <NavItem className="navitem">
                    <Link className = "textsize " to="/login">Log In</Link>
                </NavItem>
                
                </Nav>
                </Navbar>
            </div>
        );

        
    }
    
}

function mapStateToHeaderProps(state){
    return {
        user : state.user ? state.user : null,
    }

};

function mapDispatchToHeaderProps(dispatch){
    return {
        fetchUser : () =>{
            axios.get('/api/current_user').then(
				function(res){
					dispatch({ type: FETCH_USER, payload: res.data });
				}
			)
        }
    }
}

export default connect(mapStateToHeaderProps, mapDispatchToHeaderProps)(Header);