import React, {useState} from 'react'

const Navbar = () => {
const [active, setActive] = useState('nav__menu');

const navToggle = () => {
        active === 'nav__menu' ? setActive('nav__menu nav__active') : setActive('nav__menu');
};


  return (
 <nav className="nav">
    <a href="#" className='brand'>Logiciel</a>
    <ul className='nav__menu'>
        <li href='#' className='nav__item'><a className='nav__link'>Home</a></li>
        <li href='#' className='nav__item'><a className='nav__link'>About</a></li>
        <li href='#' className='nav__item'><a className='nav__link'>Contact</a></li>
        <li href='#' className='nav__item'><a className='nav__link'>Search</a></li>
    </ul>
    <div onClick={navToggle} className='nav__toggler'>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
    </div>
 </nav>
  )
}

export default Navbar