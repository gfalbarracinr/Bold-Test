import React from 'react';
import Logo from '../../assets/images/bold-logo.svg';
import { BiHelpCircle } from 'react-icons/bi';
import './header.css'


const Header = () => {
  return (
    <header className='header-container'>
      <img src={Logo} alt='bold logo' />
      <nav className='menu'>
        <ul className='menu-list'>
          <li className='menu-item'><a className='menu-link' target='_blank' rel="noreferrer" href='https://bold.co'>Mi negocio</a></li>
          <li><a className='menu-link' target='_blank' rel="noreferrer" href='https://bold.co'>Ayuda <BiHelpCircle/> </a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header