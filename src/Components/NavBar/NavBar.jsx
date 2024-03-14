import React from 'react'
import styles from'./NavBar.module.css'
import { Link } from 'react-router-dom'
import logo from '../../Assets/imges/Your paragraph text.png'

const NavBar = () => {
  return (<>
 <nav className="navbar navbar-expand-lg bg-primary ">
  <div className="container">
  <Link className="navbar-brand" to={'home'}>
    <img height={'100px'} className='rounded-circle' src={logo} />
    <span className='ps-2 fs-3 fw-bold text-white' >El-Sherif Hospital</span>

    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link className="nav-link text-white fw-semibold fs-6 pe-4 " aria-current="page" to={'home'}><i className="fa-solid fa-house pe-2"></i> Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link text-white fw-semibold fs-6 pe-4 " aria-current="page" to={'about'}><i className="fa-solid fa-bars pe-2"></i> About</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link text-white fw-semibold fs-6 pe-4 " aria-current="page" to={'clinic'}><i className="fa-solid fa-house-medical-flag pe-2"></i>Clinics</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link text-white fw-semibold fs-6 pe-4 " aria-current="page" to={'analsis'}><i className="fa-solid fa-vials pe-2"></i> Analysis</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link text-white fw-semibold fs-6 pe-4 " aria-current="page" to={'radiology'}><i className="fa-solid fa-radiation pe-2"></i> Radiology</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link text-white fw-semibold fs-6 pe-4 " aria-current="page" to={'result'}> <i className="fa-solid fa-square-poll-horizontal pe-2"></i>Results</Link>
        </li>
       
      </ul>
    </div>
  </div>
</nav>

  </>)
}

export default NavBar