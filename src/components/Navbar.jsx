import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full border-b bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center gap-6 p-4">

        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-4 py-2 rounded-md text-lg transition ${isActive
              ? "text-white bg-blue-600"
              : "text-gray-700 hover:text-blue-600"
            }`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `px-4 py-2 rounded-md text-lg transition ${isActive
              ? "text-white bg-blue-600"
              : "text-gray-700 hover:text-blue-600"
            }`
          }
        >
          About
        </NavLink>

        <NavLink
          to="/products"
          className={({ isActive }) =>
            `px-4 py-2 rounded-md text-lg transition ${isActive
              ? "text-white bg-blue-600"
              : "text-gray-700 hover:text-blue-600"
            }`
          }
        >
          Products
        </NavLink>

        <NavLink
          to="/recipes"
          className={({ isActive }) =>
            `px-4 py-2 rounded-md text-lg transition ${isActive
              ? "text-white bg-blue-600"
              : "text-gray-700 hover:text-blue-600"
            }`
          }
        >
          Recipes
        </NavLink>

      </div>
    </nav>
  );
};

export default Navbar;
