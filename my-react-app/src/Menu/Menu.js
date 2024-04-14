import React,{useState} from 'react'
import './Menu.css'
import {menuItems} from './configuration'
import {Link,Routes,Route,HashRouter,Navigate} from 'react-router-dom'
import Home from '../Home'
import {About} from '../About'
import {Contact} from '../Contact'
const Menu = () => {
  const [menuItem,setMenuItem]= useState("Home");
  return (
    <div>
      <HashRouter>
      <ul className='menu'>
        {
          menuItems.map(({name,link},ind)=>{
            return <li key={`li_${ind}`} onClick={()=>{
              setMenuItem(name)
            }} className={menuItem === name ? 'menu-activ' : ''} >
              <Link id="link1" to={link}>{name}</Link>
              </li>
          })
        }
      </ul>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/home"/>} />
      </Routes>
      </HashRouter>
    </div>
  )
}

export default Menu
