import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import propTypes from 'prop-types'


const Navbar = (props) => {
  
    
  return (
    <>
      <nav className={`navbar navbar-expand-lg bg-body-${props.mode}`} >
  <div className="container-fluid">
    <a className={`navbar-brand text-${props.mode==='tertiary'?'dark':'danger'}`} href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className={`nav-link active text-${props.mode==='tertiary'?'dark':'light'}`} aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link text-${props.mode==='tertiary'?'dark':'light'}`} href="/">{props.page}</a>
        </li>
      </ul>

      <div className={`form-check form-switch mx-2 text-${props.mode==='tertiary'?'dark':'light'}`}>
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.handleMode}/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.darkMode}</label>
      </div>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}
Navbar.propTypes={
  title: propTypes.string.isRequired,
  page:propTypes.string.isRequired
}

// Navbar.defaultProps = {
//   title: 'pawanSite',
//   page: 'pawanPage'
// }

export default Navbar