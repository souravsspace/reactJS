import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { BiAlignRight } from 'react-icons/bi'

export default function Navigation(props) {

  return (
    <main>
      <nav className={`navbar navbar-expand-lg container-fluid bg-${props.mode} py-2`}>
          <Link className={`navbar-brand text-${props.clrPlate}`} to="/">{props.navData.navLogo}</Link>
          <div className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className={`navbar-toggler-icon text-${props.invert} rounded`}>
                <BiAlignRight />
              </span>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className={`nav-link active text-${props.invert}`} aria-current="page" to="/">{props.navData.home}</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link text-${props.invert}`} to="/about">{props.navData.about}</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className={`nav-link dropdown-toggle text-${props.invert}`} to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          {props.navData.portfolio}
                        </Link>
                        <ul className="dropdown-menu">
                            <li><Link to="/textform" className="dropdown-item" >TextForm</Link></li>
                            <li><Link to="/" className="dropdown-item">Srue SR</Link></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><Link to="/" className="dropdown-item">Optional Dev</Link></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link disabled">Coming soon..</Link>
                    </li>
              </ul>
              <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className={`btn btn-${props.clrPlate}`} type="submit" onClick={(e)=> e.preventDefault()}>Search</button>
              </form>
              

              {/* <ul className="form-check form-switch ms-4">
                    <a className={`text-${props.invert} btn btn-outline-${props.clrPlate}`} onClick={props.toggleMode}>Switch {props.invert}</a>
                    <input onClick={props.toggleMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked"/>
              </ul> */}
          </div>
      </nav>
    </main>
  )
}


Navigation.propTypes = {
  navLogo: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  portfolio: PropTypes.string.isRequired,
  home: PropTypes.string.isRequired
}

Navigation.defaultProps = {
  navLogo: "SouravUL",
  home: "Home",
  about: "About",
  portfolio: "Portfolio"
}
