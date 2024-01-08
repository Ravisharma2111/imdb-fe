import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import logo from '../img/IMDB.png'

function Header() {
  return (
    <div className='header'>
    <div className='headerLeft'>
    <Link to='/'><img style={{width:'100px'}} className='header__icon' src={logo} ></img></Link>
    <Link to='/movies/popular' style={{textDecoration:"none",padding:'5px'}} className='header__icon' src=''> <span>  Popular </span></Link>
    <Link to='/movies/top_rated' style={{textDecoration:"none",padding:'5px'}} className='header__icon' src=''> <span>  Top Rated </span></Link>
    <Link to='/movies/upcoming' style={{textDecoration:"none",padding:'5px'}} className='header__icon' src=''> <span>   Upcoming </span></Link>
    </div>
      
    </div>
  )
}

export default Header
