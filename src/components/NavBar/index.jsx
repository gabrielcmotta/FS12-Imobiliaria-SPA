import React from 'react'
import './NavBar.css'

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/logo192.png" alt="ImobiTech" />
      </div>
      <ul className="navbar-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Imóveis</a></li>
        <li><a href="#">Contato</a></li>
      </ul>
      <button className="navbar-login">Login</button>
    </nav>
  )
}
      
