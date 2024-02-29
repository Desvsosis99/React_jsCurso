import React from 'react';
import './NavBar.css'; // Asegúrate de que el nombre del archivo y la ruta sean correctos.

function NavBar() {
  return (
    <nav className="navbar">
      {/* Se puede agregar una 'marca' o logo si tienes una */}
      <div className="navbar-brand">Hakkens Digital</div>
      <ul className="navbar-menu">
        {/* Los enlaces ahora están organizados dentro de una lista para una mejor estructura y estilo */}
        <li><a href="/">Inicio</a></li>
        <li><a href="/productos">Productos</a></li>
        <li><a href="/contacto">Contacto</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;