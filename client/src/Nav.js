import React, { Component } from "react";
import "./nav.css"; // Importing nav.css
// import { BrowserRouter as Router, Route, Link } from react-router-dom;
import MaterialIcon, { colorPallet } from "material-icons-react"; // IMPORTS ICONS
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
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
  DropdownItem
} from "reactstrap"; // IMPORTS NAV
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../src/actions/authActions";

class NavMain extends Component {
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

  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    const authLinks = (
      <ul className="navbar-nav m1-auto">
        <li className="nav-item">
          <a
            href=""
            onClick={this.onLogoutClick.bind(this)}
            className="nav-link"
          >
            {" "}
            Logout
          </a>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        {/* <a className="nav-item">
          <Link className="nav-link" to="/register">
            Sign Up
          </Link>
        </a> */}
        <a className="nav-item">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </a>
      </ul>
    );

    return (
      <div>
        <div className="Header">
          {/* TOP NAV */}
          <div className="TopNav">
            {/* SEARCH BOX */}
            <FormGroup className="topnavgroup">
              <span className="searchbox">
                <Input
                  type="search"
                  name="search"
                  id="search"
                  placeholder="Search"
                />
              </span>

              {/* SEARCH ICON */}
              <span className="magnifying">
                <MaterialIcon
                  icon="search"
                  color="#0007"
                  className=""
                  size="medium"
                />
              </span>

              {/* Authentication links ternary function */}
              {isAuthenticated ? authLinks : guestLinks}

              {/* Register */}
              {/* <h5 className="register"> */}
              {/* <Link to="/register">Sign Up</Link> */}
              {/* </h5> */}

              {/* LOGIN */}
              {/* <h5 className="logIn"> */}
              {/* <a href="/LogIn/">Login</a> */}
              {/* </h5> */}

              {/* CART ICON */}
              <span className="">
                <a href="/cart/">
                  {" "}
                  <MaterialIcon
                    icon="shopping_cart"
                    color="#0007"
                    className="carticon"
                    size="medium"
                  />
                </a>
              </span>
            </FormGroup>
          </div>

          {/* NAVBAR STARTS */}
          <Navbar className="NavBar" color="" light expand="md">
            {/* LOGO */}
            <img
              src="/images/logo.png"
              height="60"
              width="53"
              alt="ESP Gallery logo"
            />
            {/* END LOGO */}

            {/* NAV STARTS */}
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/">Virtual Gallery</NavLink>
                </NavItem>

                <NavItem>
                  <NavLink href="/shop/">Gallery Shop</NavLink>
                </NavItem>

                <NavItem>
                  <NavLink href="/sellart/">Sell Art</NavLink>
                </NavItem>

                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">
                    GitHub
                  </NavLink>
                </NavItem>

                {/* NAV DROPDOWN */}
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    <NavLink href="/about/">About Us</NavLink>
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>Our Story</DropdownItem>
                    <DropdownItem>Our History</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Reset</DropdownItem>
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

NavMain.PropTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(NavMain);
