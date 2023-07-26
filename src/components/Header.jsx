import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="container p-3 border-bottom shadow fixed-top text-bg-success mt-2 rounded">
      <nav className="d-flex align-items-center justify-content-between">
        <div className="d-flex gap-2 align-items-center">
          <img id="logo" src="./planet.png" alt="Planet Logo" />
          <h2>Space Travelers Hub</h2>
        </div>
        <div className="btn-group">
          <NavLink
            to="/"
            className="btn btn-outline-light"
          >
            Rockets
          </NavLink>

          <NavLink
            to="/missions"
            className="btn btn-outline-light"
          >
            Missions
          </NavLink>

          <NavLink
            to="/profile"
            className="btn btn-outline-light"
          >
            My profile
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
