import React from "react";
import { Nav, NavLogo, NavLink, DarkMode} from "./NavbarElements";
import {BoutonToggle} from "../BoutonToggle/BoutonToggle";

const Navbar = () => {
    return (
        <>
           <Nav>           
            <DarkMode />
                <NavLink 
                  to="/Home" 
                  activeStyle={{ color:'black' }}
                >Home</NavLink>
                <NavLink 
                  to="/About" 
                  activeStyle={{ color: 'black' }}
                >About</NavLink>
                <NavLink 
                  to="/Works" 
                  activeStyle={{ color: 'black' }}
                >Works</NavLink>
                <h2>WEBAGENCY</h2>
                <NavLogo to="BoutonToggle">
                Darkmode
            </NavLogo> 
           </Nav> 
        </>
    );
};

export default Navbar;