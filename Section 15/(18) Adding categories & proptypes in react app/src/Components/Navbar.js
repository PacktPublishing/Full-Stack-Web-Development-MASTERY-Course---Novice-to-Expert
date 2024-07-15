import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (
      <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Business</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Entertainment</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">General</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Health</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Science</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Sports</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Technology</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default Navbar