import { useState } from "react";
import { CDN_LOGO } from "../utils/constants";

const Header = () => {
  const [btnName, setBtnName] = useState('Login');
    return (
      <div className='header-container'>
        <div className='logo-container'>
          <img
            className='logo'
            src={CDN_LOGO}
            alt='brand-logo'
          />
        </div>
        <div className='nav-links'>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li><button className="login-btn" onClick={() => btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login')}>{btnName}</button></li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;