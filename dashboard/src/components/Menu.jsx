import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import API from "../config/api";
const FRONTEND_URL = import.meta.env.VITE_FRONTEND_RENDER_URL;
const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = (index) =>{
    setSelectedMenu(index);
  };
   
  const handleProfileClick = () =>{
    console.log('isopen');
    setIsOpen(!isOpen);
    console.log('settrue');
  }

const handleLogout = async () => {
  try {
    await axios.post(
      `${API}/logout`,
      {}, 
      { withCredentials: true }
    );
    // frontend cleanup
    localStorage.clear();
    sessionStorage.clear();

    window.location.href = FRONTEND_URL;
  } catch (err) {
    console.error("Logout failed", err);
  }
};

   
  const menuClass = 'menu';
  const activeMenuClass = 'menu selected';
  return (
    <div className='menu-container'>
      <img src='logo.png' style={{ width: '50px' }} />
      <div className='menus'>
        <ul>
          <li>
            <Link style={{textDecoration:'none'}}  to='/'
            onClick={() => handleMenuClick(0)}
            >
              <p 
               className={selectedMenu===0 ? activeMenuClass : menuClass}
              >Dashboard</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:'none'}} to='/orders' 
            onClick={() => handleMenuClick(1)}
            >
              <p 
               className={selectedMenu===1 ? activeMenuClass : menuClass}
              >Orders</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:'none'}} to='/holdings' 
            onClick={() => handleMenuClick(2)}
            >
              <p 
               className={selectedMenu===2 ? activeMenuClass : menuClass}
              >Holdings</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:'none'}} to='/positions' 
            onClick={() => handleMenuClick(3)}
            >
              <p 
               className={selectedMenu===3 ? activeMenuClass : menuClass}
              >Positions</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:'none'}} to='/funds' 
            onClick={() => handleMenuClick(4)}
            >
              <p 
               className={selectedMenu===4 ? activeMenuClass : menuClass}
              >Funds</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:'none'}} to='/apps' 
            onClick={() => handleMenuClick(5)}
            >
              <p 
               className={selectedMenu===5 ? activeMenuClass : menuClass}
              >Apps</p>
            </Link>
          </li>
        </ul>

        {/* Profile dropdown */}
        <div className="profile-wrapper">
          <div className="profile" onClick={handleProfileClick}>
            <div className="avatar">ZU</div>
            <p className="username">USERID</p>
          </div>
        {
        isOpen && 
        <div className="dropdown">
              <div className="dropDownItem"><i class="fa-solid fa-gear"></i>Settings</div>
              <div className="dropDownItem"><i class="fa-solid fa-cloud-arrow-up"></i>Upgrade Plan</div>
              <div className="dropDownItem" onClick={handleLogout}><i class="fa-solid fa-arrow-right-from-bracket"></i>Log out</div>
        </div>
        }
        </div>
     </div>
  </div>
);
};
export default Menu;