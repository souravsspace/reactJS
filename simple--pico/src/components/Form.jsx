import React from 'react'

export default function Form() {
  return (
    <form className='container' action="/">
        <article data-theme='dark'>
          <div className="grid">

              <label htmlFor="firstName">
                  First Name
                <input type="text" id='firstName' placeholder='First Name' required/>
              </label> 
              <label htmlFor="lastName">
                  Last Name
                <input type="text" id='lastName' placeholder='Last Name' required/>
              </label>
              <div>
                  <label htmlFor="email">Your Email</label> 
                  <input type="email" id='email' name='email' placeholder='Your Email' required/>
                  <small>We'll never share your email with anyone else.</small>
                  <button role='button'>Submit</button>
              </div>

          </div>
        </article>
    </form>
  )
}
