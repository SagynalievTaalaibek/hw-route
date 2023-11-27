import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand me-5" href="/">
            Travel
          </a>
          <div className="me-auto">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    `nav-link ${
                      isPending ? 'pending' : isActive ? 'active' : ''
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className={({ isActive, isPending }) =>
                    `nav-link ${
                      isPending ? 'pending' : isActive ? 'active' : ''
                    }`
                  }
                >
                  Contacts
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/books"
                  className={({ isActive, isPending }) =>
                    `nav-link ${
                      isPending ? 'pending' : isActive ? 'active' : ''
                    }`
                  }
                >
                  Books Tour
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/portfolio"
                  className={({ isActive, isPending }) =>
                    `nav-link ${
                      isPending ? 'pending' : isActive ? 'active' : ''
                    }`
                  }
                >
                  Portfolio
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
