import React from 'react';
import emailjs from 'emailjs-com';

export default function Comments() {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_0i8ktcp',
        'template_xgnvkmp',
        e.target,
        'yZ2WCbz0eSGVWMm_7'
      )
      .then((res) => {
        console.log(res.text);
      })
      .catch((err) => console.log(err.text));
    e.target.reset();
    alert('Thank you! We will reply as soon as possible!');
  }

  return (
    <div className='container '>
      <div className='row'>
        <div className='col-12  text-center py-5'>
          <h2>Let's Connect</h2>
        </div>
      </div>
      <form onSubmit={sendEmail}>
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
              <input type='email' name='user_email' className='form-control' />
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
            <input
              type='submit'
              value='Send Message'
              className='btn btn-info'
            ></input>
          </div>
        </div>
      </form>
    </div>
  );
}
