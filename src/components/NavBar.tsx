import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <header className=" bg-blue-500 text-white flex place-content-between">
        <div>
          <h1 className="text-3xl font-bold max-w-80 text-center p-4">
            Veterinaria Don Gato
          </h1>
        </div>

        <div>
          <nav>
            <ul className="flex p-6 font-bold">
              <li className="p-4 items-center">
                <NavLink to="/" className="hover:text-lime-300 hover:underline">Inicio</NavLink>
              </li>
              <li className="p-4">
                <NavLink  to="/citas" className="hover:text-lime-300 hover:underline">Citas</NavLink>
              </li>
              <li className="p-4">
                <NavLink  to="/registro" className="hover:text-lime-300 hover:underline">Registro</NavLink>
              </li>
              <li className="p-4">
                <NavLink  to="/registro" className="hover:text-lime-300 hover:underline">Contacto</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      
  )
}
