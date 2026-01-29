import { useEffect, useContext } from 'react'
import { ItemContext } from '../../Context.jsx';
import './Navbar.css'
import cart_icon from '../../Frontend_Assets/cart_icon.png';

const Navbar = () => {
    const { navigate, user, handleLogout } = useContext(ItemContext); 
    useEffect(()=>{},[])
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
            {user === null && <div className='login_nav' onClick={() => navigate('/login')} >login</div>}
            {user !== null && <div className='login_nav' onClick={() => handleLogout()} >Logout</div>}
            <img className='cart_nav' onClick={() => navigate('/cart')} src={cart_icon} alt="cart" />
        </div>
    </div>
  )
}

export default Navbar
