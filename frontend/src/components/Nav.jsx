import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="bg-primary text-black py-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Loja de E-Bikes</h1>
        <ul className="flex space-x-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'text-secondary font-semibold'
                  : 'hover:text-secondary transition'
              }
            >
              Início
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/bicicletas"
              className={({ isActive }) =>
                isActive
                  ? 'text-secondary font-semibold'
                  : 'hover:text-secondary transition'
              }
            >
              Bicicletas
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sobre"
              className={({ isActive }) =>
                isActive
                  ? 'text-secondary font-semibold'
                  : 'hover:text-secondary transition'
              }
            >
              Sobre
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contato"
              className={({ isActive }) =>
                isActive
                  ? 'text-secondary font-semibold'
                  : 'hover:text-secondary transition'
              }
            >
              Contato
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;