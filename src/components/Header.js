import { useState } from "react";
import { CDN_LOGO } from "../utils/constants";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState('Login');
  const cartItems = useSelector((store) => store.cart.items)
    return (
      <div className='flex items-center justify-between bg-red-600'>
        <div className='logo-container'>
          <img
            className='w-12'
            src={CDN_LOGO}
            alt='brand-logo'
          />
        </div>
        <div className='flex'>
          <ul className="flex p-3">
            <li className="px-4"><Link to='/' className="hover:text-white">Home</Link></li>
            <li className="px-4"><Link to='/about' className="hover:text-white">About</Link></li>
            <li className="px-4"><Link to='/contact' className="hover:text-white">Contact Us</Link></li>
            <li className="font-bold cursor-pointer"><Link to='/cart' className="hover:text-white">Cart ({cartItems.length})</Link></li>
            <li className="px-4 hover:text-white" ><button className="login-btn" onClick={() => btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login')}>{btnName}</button></li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;