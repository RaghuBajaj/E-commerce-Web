import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Men from './Pages/Men/Men'
import Women from './Pages/Women/Women'
import Kids from './Pages/Kids/Kids'
import Login from './Pages/login/Login'
import Cart from './Pages/cart/Cart'
import Navbar from './Components/navbar/Navbar.jsx'

function App() {
  return (
    <div className='app'>
      <div className='nav_app'>
        <Navbar />
      </div>

      <div className='page_container'>
        <Routes>
          <Route path='/' element={<Home />} ></Route>
          <Route path='/men' element={<Men />}></Route>
          <Route path='/women' element={<Women />}></Route>
          <Route path='/kids' element={<Kids />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
