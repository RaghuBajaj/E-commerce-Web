import React from 'react'
import { useContext } from 'react'
import { ItemContext } from '../../Context'
import './Navbar.css'

const Navbar = () => {
    const { navigate } = useContext(ItemContext); 
  return (
    <div className='navbar'>
        <div className='logo_nav'>
            <img className='img_nav' alt="img" />
        </div>
        <ul  className='list_nav'>
            <li className='item_nav' onClick={() => navigate('/')}>Home</li>
            <li className='item_nav' onClick={() => navigate('/men')}>Men</li>
            <li className='item_nav' onClick={() => navigate('/women')}>Women</li>
            <li className='item_nav' onClick={() => navigate('/kids')}>Kids</li>
        </ul>
        <div className='side_nav'>
            <div className='login_nav' onClick={() => navigate('/login')} >login</div>
            <img className='cart_nav' onClick={() => navigate('/cart')} alt="cart" />
        </div>
    </div>
  )
}

export default Navbar
