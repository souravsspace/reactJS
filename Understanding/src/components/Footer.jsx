import React from 'react'

export default function Footer(props) {
  return (
    <footer className={`bg-${props.mode}`}>
        <main className='container d-flex justify-content-between py-4'>
              <section>
                  <code className={`text-${props.clrPlate}`}>© 2022 Sourav company, Inc</code>
              </section>
              <section>
                <a className={`me-2 text-decoration-none text-${props.invert}`} href='/'>{props.navData.navLogo}</a>
                <a className={`me-2 text-decoration-none text-${props.invert}`} href='/'>{props.navData.home}</a>
                <a className={`me-2 text-decoration-none text-${props.invert}`} href='/about'>{props.navData.about}</a>
                <a className={`me-2 text-decoration-none text-${props.invert}`} href='/textform'>TextForm</a>
              </section>
        </main>
    </footer>
  )
}
