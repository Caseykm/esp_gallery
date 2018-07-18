import React from 'react';
import './nav.css'; // Importing nav.css
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import MaterialIcon, {colorPallet} from 'material-icons-react'; // IMPORTS ICONS
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
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
  DropdownItem } from 'reactstrap'; // IMPORTS NAV

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
        <div>
            <div className="Header">  
                <div className="TopNav">
                      {/* SEARCH BOX */}
                    <FormGroup className="search">
                        <Input type="search" name="search" id="search" placeholder="Search   " />
                        <MaterialIcon icon="baseline-search-24px.svg" /> 
                        {/* Search Icon */}
                        <MaterialIcon icon="outline-local_grocery_store-24px.svg"  /> 
                    </FormGroup>
                     
                </div>

                     {/* NAVBAR STARTS */}
                    <Navbar color="light" light expand="md">    
                        {/* LOGO */}
                         <img src="/images/logo.png" height="60" witdth="53" alt="ESP Gallery logo" />
                       {/* END LOGO */}
                       
                     {/* NAV STARTS */}
                    <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                    
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/home/">Virtual Gallery</NavLink>
                            </NavItem>
                            
                            <NavItem>
                                <NavLink href="/shop/">Gallery Shop</NavLink>
                            </NavItem>
                            
                            <NavItem>
                                <NavLink href="/sellart/">Sell Art</NavLink>
                            </NavItem>
                            
                            <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                            </NavItem>
                                {/* NAV DROPDOWN */}
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        <NavLink href="/about/">About Us</NavLink>
                                    </DropdownToggle>
                                        <DropdownMenu right>
                                            <DropdownItem>
                                            Our Story
                                            </DropdownItem>
                                            <DropdownItem>
                                                Our History
                                            </DropdownItem>
                                            <DropdownItem divider />
                                            <DropdownItem>
                                                Reset
                                            </DropdownItem>
                                        </DropdownMenu>
                                </UncontrolledDropdown>
                                {/* END NAV DROPDOWN */}
                            
                            <NavItem>
                            <NavLink href="/contactus/">Contact Us</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
          </div>
        </div>
    );
  }
}