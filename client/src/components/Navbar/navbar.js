import React from "react";
import "./navbar.css";

function Navbar() {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-success">
      <a className="navbarText navbar-brand" href="/">Google Books</a>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link active" href="#">Search<span className="sr-only">(current)</span></a>
          <a className="nav-item nav-link" href="#">Saved</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

