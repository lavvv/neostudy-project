import { useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "@components/Navbar/Navbar";
import Button from "@components/ui/Button";
import { headerRoutes } from "@routes/routes";
import "./Header.scss";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const burgerMenuIcon = <span>&#9776;</span>;
  const burgerMenuCloseIcon = <span>&#x2715;</span>;

  return (
    <header className="Header">
      <div className="Header__container">
        <Link className="Header__logo" to="/">
          NeoBank
        </Link>

        <Navbar classes="Navbar Header__navbar" links={headerRoutes} />
        <Button classes="Button Button--tall Button--borderRadius--m Header__button Header__button--large">
          Online Bank
        </Button>

        <div className="Header__smallMenu">
          <button
            className="Header__toggleButton"
            onClick={() => setShowMenu((sm) => !sm)}
          >
            {showMenu ? burgerMenuCloseIcon : burgerMenuIcon}
          </button>
          {showMenu && (
            <>
              <Navbar
                classes="Navbar Header__navbar--small"
                links={headerRoutes}
              />
              <Button classes="Button Button--tall Button--borderRadius--m Header__button Header__button--small ">
                Online Bank
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
