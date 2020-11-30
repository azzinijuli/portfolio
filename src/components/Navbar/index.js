import "../Navbar/style.scss";

function Navbar() {
  return (
    <div className="navbar">
      <ul className="nav-items">
        <li className="nav-item hover hover-1">Sobre mí</li>
        <li className="nav-item hover hover-1">Skills</li>
        <li className="nav-item hover hover-1">Proyectos</li>
        <li className="nav-item hover hover-1">Contacto</li>
      </ul>
    </div>
  );
}

export default Navbar;
