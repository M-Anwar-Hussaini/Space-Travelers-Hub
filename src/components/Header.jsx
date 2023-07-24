import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <header className="container p-3 border-bottom shadow fixed-top text-bg-success mt-2 rounded">
      <nav className="d-flex align-items-center justify-content-between">
        <div className="d-flex gap-2 align-items-center">
          <img id="logo" src="./planet.png" alt="Planet Logo" />
          <h2>Space Travelers Hub</h2>
        </div>
        <div className="btn-group">
          <Link
            to="/"
            className={`btn btn-outline-light ${
              currentPage === 1 && 'active'
            }`}
            onClick={() => setCurrentPage(1)}
          >
            Rockets
          </Link>

          <Link
            to="/missions"
            className={`btn btn-outline-light ${
              currentPage === 2 && 'active'
            }`}
            onClick={() => setCurrentPage(2)}
          >
            Missions
          </Link>

          <Link
            to="/profile"
            className={`btn btn-outline-light ${
              currentPage === 3 && 'active'
            }`}
            onClick={() => setCurrentPage(3)}
          >
            My profile
          </Link>
        </div>
      </nav>
    </header>
  );
}
