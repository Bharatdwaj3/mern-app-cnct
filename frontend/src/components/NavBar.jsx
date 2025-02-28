import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import {Link} from 'react-router-dom'

function NavBar() {

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <Link to ="/"className="fs-3 ubuntu navbar-brand">
            Recreational <span className="text-primary">Media</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              

              <li className="nav-item">
                <Link to="/discover/movies" className="nav-link active">
                  Movies
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/discover/tv_shows" className="nav-link">
                  TV Shows
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/mform" className="nav-link">
                  Profile
                </Link>
              </li>

            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar
