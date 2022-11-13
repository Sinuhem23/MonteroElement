import React from 'react';
import video from './img/herovideo.mp4';
import mealimg from './img/meal.jpg';
import workoutimg from './img/work-out.jpg';
import whoareweimg from './img/who-are-we.PNG';
import merchimg from './img/merch.jpg';
import './main.css';

export default function Main() {
  return (
    <div>
      {/* <section className='hero-section'>
        <div className='hero-img'></div>
      </section> */}

      <video
        className='background-video col-12 pb-5'
        poster='./poster.jpg'
        loop
        autoPlay
        muted
      >
        <source src={video} type='video/mp4' />
      </video>

      {/* start of section two */}

      <section className='col-12 section-two container-fluid py-5'>
        <div className='row my-5'>
          <div className='col-12 text-center '>
            <h2 className='mt-5'>Who Are We?</h2>
          </div>
        </div>

        <div className='row px-5 '>
          <div className='col-12 col-md-6'>
            <img
              src={whoareweimg}
              alt='computer'
              className='main-img img-fluid'
            />
          </div>
          <div className='col-12 col-md-6 whoAreWe'>
            <div className='row'>
              <p className='col-12 col-md-4'>
                Three sons of Hector Montero. Born in 1951.
              </p>
              <p className='col-12 col-md-4'>
                Quality over Quantity. Mind over Matter. Face your fears. Change
                what need be.
              </p>
              <p className='col-12 col-md-4'>Live and Learn</p>
            </div>
          </div>
        </div>
      </section>

      <section className='col-12 section-two container-fluid pt-5'>
        <div className='row  '>
          <div className='col-12 text-center'>
            <h2>Services We Offer</h2>
          </div>
        </div>

        {/* row 1 */}
        <div className='row py-5'>
          <div className='col-12 col-md-4'>
            <div className='row'>
              <label className='form-lable col-12'>Meal Plans</label>
            </div>
            <div className='row'>
              <img
                src={mealimg}
                alt='computer'
                className='offers img-fluid col-12'
              />
            </div>
            <div className='row'>
              <p className='text-muted my-5 text-center text-padding serviceText col-12'>
                Learn about all sorts of our Meal plans.
              </p>
            </div>
          </div>
          <div className='col-12 col-md-4'>
            <div className='row'>
              <label className='form-lable col-12'>Work Out Plans</label>
            </div>
            <div className='row'>
              <img
                src={workoutimg}
                alt='computer'
                className='offers img-fluid col-12'
              />
            </div>
            <div className='row'>
              <p className='text-muted mt-3 my-5 text-center serviceText text-padding col-12 '>
                Learn about all sorts of our Work-Out plans.
              </p>
            </div>
          </div>
          <div className='col-12 col-md-4'>
            <div className='row'>
              <label className='form-lable col-12'>Merch</label>
            </div>
            <div className='row'>
              <img
                src={merchimg}
                alt='computer'
                className='offers img-fluid col-12'
              />
            </div>
            <div className='row'>
              <p className='text-muted mt-3 my-5 text-center text-padding serviceText col-12'>
                Purchase some Merch!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* end of section three */}

      {/* start of section 4 */}

      <section className='pb-5 col-12 '>
        <div className='container '>
          <div className='row'>
            <div className='col-12  text-center py-5'>
              <h2>Let's Connect</h2>
            </div>
          </div>

          <div className='row'>
            <div className='col-12 col-xl-6 form-group'>
              <p>Name</p>
              <label>
                <input type='text' name='name' className='form-control' />
              </label>
            </div>
            <div className='col-12 col-xl-6 form-group'>
              <p>Email</p>
              <label>
                <input type='email' name='email' className='form-control' />
              </label>
            </div>
          </div>
          <div className='row '>
            <div className='col-12  form-group'>
              <p>What services do you request?</p>
              <div className='row'>
                <div className='col-12 form-group'>
                  <textarea
                    type='message'
                    name='message'
                    className='message-control form-control'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-12 text-center'>
              <button className='btn main-button'>Submit</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
