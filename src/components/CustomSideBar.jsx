import React, { useState } from "react";
import CustomMenu from "./CustomMenu";
import { ADMIN, CAJERO, ENCARGADO } from "../_nav";

const CustomSideBar = () => {
  const [role, setRole] = useState("");
  const [menu, setMenu] = useState([]);

  function getMenu(role) {
    setRole(role);

    if (role == "admin") {
      setMenu(ADMIN);
    } else if (role == "cajero") {
      setMenu(CAJERO);
    } else {
      setMenu(ENCARGADO);
    }
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            ROLES:
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Selecciona: {role}
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => getMenu("admin")}
                    >
                      Administrador
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => getMenu("cajero")}
                    >
                      Cajero
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => getMenu("encargado")}
                    >
                      Encargado
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <hr></hr>
      <CustomMenu items={menu} />
    </div>
  );
};

export default CustomSideBar;
