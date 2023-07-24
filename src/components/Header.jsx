// import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="container p-3 border-bottom shadow fixed-top text-bg-success mt-2 rounded">
      <nav className="d-flex align-items-center justify-content-between">
        <div className="d-flex gap-2 align-items-center">
          <img id="logo" src="./planet.png" alt="Planet Logo" />
          <h2>Space Travelers Hub</h2>
        </div>
        <ul className="list-group list-group-horizontal">
          <li className="list-group-item">
            {/* <Link to="/" className="text-success active"> */}
            Rockets
            {/* </Link> */}
          </li>
          <li className="list-group-item">
            {/* <Link to="/missions" className="text-success"> */}
            Missions
            {/* </Link> */}
          </li>
          <li className="list-group-item">
            {/* <Link to="/profile" className="text-success"> */}
            My profile
            {/* </Link> */}
          </li>
        </ul>
      </nav>
    </header>
  );
}
