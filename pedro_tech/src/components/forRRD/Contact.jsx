import React from 'react'

export default function Contact() {
  return (
    <article className='container' style={{padding:'2rem'}}>
        <hgroup>
            <h1></h1>
            <h4></h4>
        </hgroup>
        <form>
            <div style={{display:'flex', gap:'1rem'}}>
                <input type="firstName" name="First name" placeholder='First name' required/>
                <input type="lastName" name="Last name" placeholder='Last name' required/>
            </div>
              <input type="email" name="text" placeholder='Email' required/>
            <textarea name="" id="" cols="30" rows="8" placeholder='Type your issue in details' required></textarea>
            <button>Submit</button>
            <fieldset>
              <label htmlFor="terms">
                  <input type="checkbox" role="switch" id="terms" name="terms" required/>
                    I agree to the <a href="/" onClick={e=> e.preventDefault()}>Privacy Policy</a>
              </label>
          </fieldset>
        </form>
    </article>
  )
}
