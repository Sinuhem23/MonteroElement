import React from 'react';
import './footer.css';

export default function Footer() {
  return (
    <div>
      <footer className='footer p-5 footer-dark bg-dark container  col-12'>
        <div className='row mt-4'>
          <div className='col-12 col-md-6'>
            <h4 className='footerHeader'> Services</h4>
            <ul className='col-12 col-md-6'>
              <li className='mt-1'>Meal Plans</li>
              <li className='mt-1'>Work Out Plans</li>
              <li className='mt-1'>Merch</li>
            </ul>
          </div>
          <div className='col-12 col-md-6 '>
            <h4 className='footerHeader'> Find Us</h4>
            <ul className='col-12 col-md-6'>
              <li className='mt-1'>Instagram</li>
              <li className='mt-1'>Email</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
