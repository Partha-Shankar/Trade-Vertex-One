import React from 'react';
import {Link} from 'react-router-dom';

function NavBar() {
    return ( 
       <nav className="navbar navbar-expand-lg bg-white border-bottom">
      <div className="container-fluid">
        <Link to={"/"}><img src="media/images/tradeVetexOne(2).png" alt="Bootstrap" width="200" height="60" style={{marginLeft:"10%"}}/></Link>
        
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
              <Link className="nav-link active" aria-current="page" to="/signup">Signup</Link>
            </li>

            <li className="nav-item mx-4">
              <Link className="nav-link active" aria-current="page" to="/about">About</Link>
            </li>

            <li className="nav-item mx-4">
              <Link className="nav-link active" aria-current="page" to="/products">Product</Link>
            </li>

            <li className="nav-item mx-4">
              <Link className="nav-link active" aria-current="page" to="/pricing">Pricing</Link>
            </li>

            <li className="nav-item mx-4">
              <Link className="nav-link active" aria-current="page" to="/support">Support</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    );
}

export default NavBar;