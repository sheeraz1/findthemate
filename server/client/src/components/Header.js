import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

class Header extends Component{
    render(){
        return this.renderContent();
     }; 
    renderContent = () => {
        if (this.props.email){
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
                        <Link className = "textsize " to="/settings">Settings</Link>
                    </NavItem>
                    <NavItem className="navitem">
                        <Link className = "textsize" to="/map">Map</Link>
                    </NavItem>
                    <NavItem  className="navitem">
                        <Link className = "textsize" to="/logout">Log Out</Link>
                    </NavItem>
                
                    </Nav>
                    </Navbar>
                </div>
            );
            
        }
        else return (
            <div>
                <Navbar className = "navbarheader"  light expand="md">
                <NavbarBrand href="/">Find The Mate</NavbarBrand>
                    <Nav className="ml-auto">
                    <NavItem>
                        <Link to="/login">Log In</Link>
                    </NavItem>
                    </Nav>
                </Navbar>
            </div>
        );

        
    }
    
}

function mapStateToHeaderProps(state){
    return {
        email : state.user ? state.user.email : state.user,
    }


};
export default connect(mapStateToHeaderProps, null)(Header);