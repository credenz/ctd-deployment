/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Navbar, Nav, Button, Dropdown } from "react-bootstrap";
import CTDlogo from "../../assets/img/ctd.png";
import { NavLink as Link } from "react-router-dom";
import "./Nav.css";
import { isLogin, logout } from "../../components/utils/index";
import { HashLink } from "react-router-hash-link";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import PISBlogo from '../../assets/img/pisb-logo.png'




const NavigationBar = () => {
  const history = useHistory();
  const [visible, setVisible] = useState(false);

  const changeBackground = () => {
    if (window.scrollY < 80) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  };

  window.addEventListener("scroll", changeBackground);

  const handleLogout = () => {
    logout();
    history.push("/");
    window.location.reload();
  };

  if (isLogin()) {
    return (
      <Navbar
        className={
          visible ? "active-nav nav-bar sticky-top" : "nav-bar sticky-top"
        }
        collapseOnSelect
        expand="xl"
      >
        <Navbar.Brand>
          <Link  to='/'>
            <img src={PISBlogo} alt="PICT IEEE Student Branch" className='logo' width='120px'/>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <Link className="na-link" exact activeClassName="nav-selected" to="/">
              Home
            </Link>
            <Link className="na-link" activeClassName="nav-selected" to="/About">
              About
            </Link>
            <Link className="na-link" activeClassName="nav-selected" to="/events">
              Events
            </Link>
            <Link className="na-link" activeClassName="nav-selected" to="ContactUs">
              Contact
            </Link>
          </Nav>
          <Dropdown className="na-dropdown">
            <Dropdown.Toggle id="dropdown-basic">My Profile</Dropdown.Toggle>
            <Dropdown.Menu className='drop-menu'>
              <Dropdown.Item className='dropdown-item' href="/my-profile">My Profile</Dropdown.Item>
              
              <Dropdown.Item className='dropdown-item' onClick={handleLogout}>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Collapse>
      </Navbar>
    );
  }

  return (
    <Navbar
      className={
        visible ? "active-nav nav-bar sticky-top" : "nav-bar sticky-top"
      }
      collapseOnSelect
      expand="xl"
    >
      <Navbar.Brand>
        <img src={PISBlogo} alt="PICT IEEE Student Branch" className='logo' width='120px'/>
        
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="m-auto">
          <Link exact className="na-link" to="/" activeClassName="nav-selected">
            Home
          </Link>
          <Link className="na-link" activeClassName="nav-selected" to="/About">
            About
          </Link>
          <Link
            exact
            className="na-link"
            to="/events"
            activeClassName="nav-selected"
          >
            Events
          </Link>
          <Link
            exact
            className="na-link"
            to="/ContactUs"
            activeClassName="nav-selected"
          >
            Contact
          </Link>
        </Nav>
        <Nav className="margin-auto">
          <Link exact className="na-link login" to="/login">
            <Button size="lg" variant="link">
              Login
            </Button>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
