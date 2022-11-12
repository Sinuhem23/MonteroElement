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
        className='background-video pb-5'
        poster='./poster.jpg'
        loop
        autoPlay
        muted
      >
        <source src={video} type='video/mp4' />
      </video>

      {/* start of section two */}

      <section className='section-two mb-5 py-5'>
        <div className='container-fluid'>
          <div className='row my-5'>
            <div className='col-md-12 text-center '>
              <h2>Who Are We?</h2>
            </div>
          </div>
          <div className='row mt-5'>
            <div className='col-md-1'></div>

            <div className='col-md-4'>
              <img
                src={whoareweimg}
                alt='computer'
                className='main-img img-fluid'
              />
            </div>
            <div className='col-md-1'></div>

            <div className='col-md-5'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                ipsum dicta quis quisquam recusandae atque, magni ducimus. Aut,
                ex excepturi!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                ipsum dicta quis quisquam recusandae atque, magni ducimus. Aut,
                ex excepturi!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                ipsum dicta quis quisquam recusandae atque, magni ducimus. Aut,
                ex excepturi!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='section-three pt-5 mt-3'>
        <div className='container-fluid mx-auto'>
          <div className='row'>
            <div className='col-md-12 text-center py-5'>
              <h2>Services We Offer</h2>
            </div>
          </div>

          {/* row 1 */}
          <div className='row py-5'>
            <div className='col-12 col-md-4'>
              <label className='form-lable text-center`'>Meal Plans</label>
              <img src={mealimg} alt='computer' className='offers img-fluid' />
              <p className='text-muted mt-3 text-padding'>
                Learn about all sorts of our Meal plans.
              </p>
            </div>
            <div className='col-12 col-md-4'>
              <label className='form-lable text-center'>Work Out Plans</label>
              <img
                src={workoutimg}
                alt='computer'
                className='offers img-fluid'
              />
              <p className='text-muted mt-3 text-padding'>
                Learn about all sorts of our Work-Out plans.
              </p>
            </div>
            <div className='col-12 col-md-4'>
              <label className='form-lable text-center'>Merch</label>
              <img src={merchimg} alt='computer' className='offers img-fluid' />
              <p className='text-muted mt-3 text-padding'>
                Purchase some Merch!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* end of section three */}

      {/* start of section 4 */}

      <section className='section-four py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 text-center py-5'>
              <h2>Let's Connect</h2>
            </div>
          </div>

          <div className='row py-5'>
            {/* <div className='col-md-2'></div> */}
            <div className='col-md-6 form-group'>
              <p>Name</p>
              <label>
                <input type='text' name='name' className='form-control' />
              </label>
            </div>
            <div className='col-md-6 form-group'>
              <p>Email</p>
              <label>
                <input type='email' name='email' className='form-control' />
              </label>
            </div>
          </div>
          <div className='row py-3'>
            <div className='col-md-12 form-group'>
              <p>What services do you request?</p>
              <div className='row'>
                <div className='col-md-12 form-group'>
                  <textarea
                    type='message'
                    name='message'
                    className='message-control'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12 text-center'>
              <button className='btn main-button'>Submit</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
