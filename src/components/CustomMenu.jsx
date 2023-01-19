import React from "react";

const CustomMenu = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            MENU
          </a>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              {props.items.map((item, index) => (
                <li key={index} className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {item.name}
                  </a>
                  <ul className="dropdown-menu">
                    {item.pages.map((page, i) => (
                      <li key={i}>
                        <a className="dropdown-item" href="#">
                          {page}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default CustomMenu;
