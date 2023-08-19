import React from 'react'
import PropTypes from 'prop-types'

export default function Navigation(props) {

  return (
      <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
        <div className="container-fluid">
          <a className={`navbar-brand text-${props.clrPlate}`} href="/">{props.navData.navLogo}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className={`navbar-toggler-icon bg-${props.mode} rounded`}></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className={`nav-link active text-${props.invert}`} aria-current="page" href="/">{props.navData.home}</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link text-${props.invert}`} href="/about">{props.navData.about}</a>
              </li>
              <li className="nav-item dropdown">
                <a className={`nav-link dropdown-toggle text-${props.invert}`} href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {props.navData.portfolio}
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/textform">TextForm</a></li>
                  <li><a className="dropdown-item" href="/">Srue SR</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/">Optional Dev</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Coming soon..</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className={`btn btn-${props.clrPlate}`} type="submit" onClick={(e)=> e.preventDefault()}>Search</button>
            </form>
            <div className="form-check form-switch ms-4">
                  <a className={`text-${props.invert} btn btn-outline-${props.clrPlate}`} onClick={props.toggleMode}>Switch {props.invert}</a>
                  {/* <input onClick={props.toggleMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked"/> */}
            </div>
          </div>
        </div>
      </nav>
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
