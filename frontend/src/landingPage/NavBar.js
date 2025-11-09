import React from 'react';

function NavBar() {
    return ( 
       <nav className="navbar navbar-expand-lg bg-white border-bottom">
      <div className="container-fluid">
        <img src="media/images/tradeVetexOne(2).png" alt="Bootstrap" width="200" height="60" style={{marginLeft:"10%"}}/>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" style = {{marginLeft:"30%"}} id="navbarSupportedContent">
          <ul className="navbar-nav me-auto">
            <li className="nav-item mx-4">
              <a className="nav-link active" aria-current="page" href="#">Signup</a>
            </li>

            <li className="nav-item mx-4">
              <a className="nav-link active" aria-current="page" href="#">About</a>
            </li>

            <li className="nav-item mx-4">
              <a className="nav-link active" aria-current="page" href="#">Product</a>
            </li>

            <li className="nav-item mx-4">
              <a className="nav-link active" aria-current="page" href="#">Pricing</a>
            </li>

            <li className="nav-item mx-4">
              <a className="nav-link active" aria-current="page" href="#">Support</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    );
}

export default NavBar;