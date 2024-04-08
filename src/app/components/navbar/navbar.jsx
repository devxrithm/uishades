import React from 'react'
import "./navbar.css"
import Image from 'next/image'
// import logo from "../next.svg"
import Link from 'next/link'

const navBar = () => {
  return (
    <div className='nav'>
      <div className='logo'>
       <Link href="/">UI SHADES</Link>
      </div>
      
      <nav className='navbar'>
        <ul className='list'>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/shadesgenarator">Shades Genarator</Link></li>
          <li><Link href="/">Color Picker</Link></li>
          <li><Link href="/ui-shades">UI Shades</Link></li>
          <li><Link href="/">Contact</Link></li>
        </ul>
      </nav>

      {/* <button className='btn'>CLICK HERE!</button> */}

    </div>
  )
}

export default navBar