import React from 'react';
import './footer.css';

export default function Footer() {
  return (
    <div>
      <footer className='footer mt-1 pt-3 footer-dark bg-dark'>
        <div className='container'>
          <div className='row mt-4'>
            <div className='col-md-2'></div>
            <div className='col-md-4'>
              <h6> Services</h6>
              <div className='row my-5'>
                <ul>
                  <li className='mt-1'>Meal Plans</li>
                  <li className='mt-1'>Work Out Plans</li>
                  <li className='mt-1'>Merch</li>
                </ul>
              </div>
            </div>
            <div className='col-md-4'>
              <h6> Find Us</h6>
              <div className='row my-5'>
                <ul>
                  <li className='mt-1'>Instagram</li>
                  <li className='mt-1'>Email</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
