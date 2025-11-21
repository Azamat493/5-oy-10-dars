import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    `px-4 py-2 rounded-md text-lg transition ${
      isActive ? "text-white bg-blue-600" : "text-gray-700 hover:text-blue-600"
    }`;

  return (
    <nav className="w-full border-b bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center gap-6 p-4">
        <NavLink to="/" className={linkClass}>Home</NavLink>
        <NavLink to="/about" className={linkClass}>About</NavLink>
        <NavLink to="/products" className={linkClass}>Products</NavLink>
        <NavLink to="/recipes" className={linkClass}>Recipes</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
