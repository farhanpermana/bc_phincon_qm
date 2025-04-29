import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav className="flex p-4 bg-blue-500 text-white">
    <Link className="mr-4" to="/">Home</Link>
    <Link className="mr-4" to="/products">Products</Link>
    <Link className="mr-4" to="/todos">Todos</Link>
  </nav>
);

export default NavBar;
