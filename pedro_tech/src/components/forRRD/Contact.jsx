import React, { useContext } from 'react'
import { toData } from '../ReactRouterDom'

export default function Contact() {
  const {name, setName} = useContext(toData)

  return (
    <div className='container' style={{padding:'2rem'}}>
        <article>
          <hgroup>
            <h1>Enter name</h1>
            <h4>Type a name to show on the about page</h4>
          </hgroup>
          <section className='grid'>
              <input type='username' 
                value={name} onChange={e=> setName(e.target.value)} 
              />
              <button>Add</button>
          </section>
        </article>

        <article>
            <hgroup>
                <h1>Contact</h1>
                <h4>Type your problems</h4>
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

    </div>
  )
}
