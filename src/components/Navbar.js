/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Navbar.css'

export default function Navbar(props) {
  return (
    <nav className='navbar'>
        <h1 className='navbar-head'>{props.title}</h1>
            <div className='desktopMenu'>
                <a href='' style={{textDecoration: 'none'}}  className='desktopMenuListItem'>Home</a>
                <a href='' style={{textDecoration: 'none'}} className='desktopMenuListItem'>About</a>
                
            </div>

                <button className="navbarBtn" role='button'>Contact Me</button>

    </nav>
  )
}
