import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="bg-gray-800 text-white p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Loja de E-Bikes</h1>
        <ul className="flex space-x-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'text-yellow-400' : 'hover:text-yellow-400')}
            >
              Início
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/bicicletas"
              className={({ isActive }) => (isActive ? 'text-yellow-400' : 'hover:text-yellow-400')}
            >
              Bicicletas
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sobre"
              className={({ isActive }) => (isActive ? 'text-yellow-400' : 'hover:text-yellow-400')}
            >
              Sobre
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contato"
              className={({ isActive }) => (isActive ? 'text-yellow-400' : 'hover:text-yellow-400')}
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