import React from 'react';
import Logo from './img/logo.PNG';
import './nav.css';

export default function Nav() {
  return (
    <div>
      <nav className='navbar navbar-expand-xl navbar-dark'>
        <a className='navbar-brand' href='#'>
          <img src={Logo} alt='Logo' className='logo-control' />
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ml-auto mr-5'>
            <li className='nav-item active'>
              <a className='nav-link' href='#'>
                Home <span class='sr-only'>(current)</span>
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                About us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
