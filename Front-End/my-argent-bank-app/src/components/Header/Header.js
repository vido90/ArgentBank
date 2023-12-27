import React from 'react';
import {NavLink} from 'react-router-dom';
import Logo from '../../assets/argentBankLogo.png';

import '../Header/header.scss';


function Header() {
  return (
    <header>
      <nav className='navbar'>
        <NavLink to="/" className='navbar__logo'>
            <img 
            className='navbar__logo__image'
            src={Logo} 
            alt='Argent Bank Logo' 
            />
        </NavLink>

        <div>
        <NavLink to="/signin" className='nav__item'>
            <i className='fa fa-user-circle'></i>
            Sign in
        </NavLink>
        </div>
       {/*  <NavLink to="/">
            <div>Accueil</div>
        </NavLink>
         */}
        

    
      </nav>
      </header>
  )
}

export default Header;