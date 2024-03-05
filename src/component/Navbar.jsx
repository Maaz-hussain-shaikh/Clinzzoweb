import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      
      <nav>
        <a to='main' className='logo'  href="/">
          <img src="imgs/logo.png" alt='logo' />
        </a>
        <input className='menu-btn' type='checkbox' id='menu-btn'  />
        <label className='menu-icon' htmlFor='menu-btn'>
          <span className='nav-icon'></span>
        </label>
        <ul className='menu'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/About' >About</Link></li>
          <li><a href="https://api.whatsapp.com/send?phone=918889338850">Whatsapp Chat</a></li>
          <li><Link to='pricechart'>Price Chart</Link></li>
          <li><a href="tel:8889338850">Contact</a></li>
       
        </ul>
       
      </nav>
      
    </div>
  )
}

export default Navbar
