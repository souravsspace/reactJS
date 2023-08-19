import React from 'react'

export default function Contact() {
  return (
    <section className='container' style={{marginBlock:'7.9rem'}}>
        <h2>Contact</h2>
        <p>
          Sed ultricies dolor non ante vulputate hendrerit. Vivamus sit amet suscipit sapien. Nulla
          iaculis eros a elit pharetra egestas.
        </p>
        <form>
          <div className="grid">
            <input
              type="text"
              placeholder="Type your issue"
              required
            />
            <input
              type="email"
              placeholder="Email address"
              required
            />
            <button type="submit">Send</button>
          </div>
          <fieldset>
            <label htmlFor="terms">
              <input type="checkbox" role="switch" id="terms" name="terms" />
              I agree to the <a href="/" onClick={e=> e.preventDefault()}>Privacy Policy</a>
            </label>
          </fieldset>
        </form>
    </section>
  )
}
