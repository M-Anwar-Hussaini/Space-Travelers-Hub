// import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="container p-3 border-bottom shadow fixed-top text-bg-success mt-2 rounded">
      <nav className="d-flex align-items-center justify-content-between">
        <div className="d-flex gap-2 align-items-center">
          Logo and Brand
        </div>
        <ul className="list-group list-group-horizontal">
          Menu Items
        </ul>
      </nav>
    </header>
  );
}
