import React from "react";
import { Nav, NavLink} from "./NavbarElements";
import BtnToggle from "../BtnToggle/BtnToggle";

const Navbar = () => {
    return (
        <>
           <Nav>           
               <NavLink 
                  to="/" 
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
                <BtnToggle />           
           </Nav> 
        </>
    );
};

export default Navbar;