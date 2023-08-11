//import React and tools we need
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Import the styles for the header

//create the header component
const Header = () => {
    return(
        //inside header component
        <header className="header"> {/* This is like building the top part of the website */}
            <div className="logo">
                {/* This is the name of the website */}
            <Link to="/">GILLEY MARKET HUB</Link>
            </div>
            <nav className="nav-links">
            <ul>
                 {/* These are like the buttons to different places */}
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/cart">Cart</Link></li>
            </ul>
            </nav>
            <div className="user-links">
                {/* These are buttons for users */}
                <Link to="/login">Login</Link>
                <Link to="/profile">Profile</Link>
            </div>
    </header>

    );
}
// Export the Header component to use in other parts
export default Header;