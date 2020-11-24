import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import header from "./Header.css";
import {   Dropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap';


const Header = () => {
  return (
    <div >
      <div className="Navbar">
        <Nav pills>

        <NavItem>
             <img src= "/Header/amazon image.png" alt="no photo" />
          </NavItem>
          
          <NavItem>
            <NavLink className="text" href="#"  >Link</NavLink>
          </NavItem>
           
          <NavItem>
            <NavLink className="text" href="#"  >Another Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="text" href="#">Disabled Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="text" href="#">Disabled Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="text" href="#">Disabled Link</NavLink>
          </NavItem>
        </Nav>
      </div>
    </div>
  );
};

export default Header;
