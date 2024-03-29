import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


export default function Navbar(props) {

  return (
    <div>
      <nav className = {`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
         <a className="navbar-brand" href="/"> {props.title} </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarText"  aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" ></span>
            </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">HOME</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">ABOUT US</Link>
        </li>
      </ul>
      <div className= {`form-check form-switch text-${props.mode==='light'? 'dark': 'light'} `}>
  <input className="form-check-input"  onClick= {props.toggleMode} type="checkbox" aria-checked role="switch" id="flexSwitchCheckDefault" />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
</div>
    </div>
  </div>
    </nav>
</div>
  )
}

Navbar.propType ={
    title: PropTypes.string.isRequired
}

Navbar.defaultProps = {
title :'Text Here'
}