"use client"
import React, { useState } from 'react'
import './Menu.css'
import {ulItems} from './configuration'
import Link from 'next/link'
const Menu = () => {
  const [menuItem,setMenuItem]=useState("Home")
  return (
    <div>
      <ul className='menu'>
        {
          ulItems.map(({name,link},ind)=>{
            return <li key={`li_${ind}`} onClick={()=>{
              setMenuItem(name)
            }} className={menuItem === name ? "menu-activ" : ""}>
             <Link href={link} id="link1">{name}</Link> 
              </li>
          })
        }
      </ul>
    </div>
  )
}

export default Menu
