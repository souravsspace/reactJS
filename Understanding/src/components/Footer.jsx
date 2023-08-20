import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer(props) {
    return (
    <footer className={`bg-${props.mode}`}>
        <div className='container d-flex justify-content-between align-items-center py-2'>


            <div>
                <code className={`text-${props.clrPlate}`}>© 2022 Sourav company, Inc</code>
            </div>

            <nav className={`navbar navbar-expand d-none d-md-block d-sm-none bg-${props.mode}`}>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <Link className="nav-link disabled">Coming soon..</Link>
                        </li>
                        <li className="nav-item dropup">
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
                            <Link className={`nav-link text-${props.invert}`} to="/about">{props.navData.about}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link active text-${props.invert}`} aria-current="page" to="/">{props.navData.home}</Link>
                        </li>
                        
                    </ul>
            </nav>


        </div>
    </footer>
    )
}
