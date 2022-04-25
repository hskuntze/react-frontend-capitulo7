import "./styles.css";
import "bootstrap/js/src/collapse.js";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="main-navbar bg-primary navbar navbar-expand-md">
      <div className="container-fluid">
        <Link to="/" className="nav-logo-text">
          <h4>Carros Top</h4>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nv-collapse"
          aria-controls="nv-collapse"
          aria-expanded="false"
          aria-label="toggle navigation"
        >
          <i className="bi bi-list"></i>
        </button>
        <div className="collapse navbar-collapse" id="nv-collapse">
          <ul className="navbar-nav offset-md-2 main-menu">
            <li>
              <NavLink
                to="/"
                style={({ isActive }) => ({
                  fontWeight: isActive ? "700" : "400",
                })}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/catalogo"
                style={({ isActive }) => ({
                  fontWeight: isActive ? "700" : "400",
                })}
              >
                Catálogo
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
