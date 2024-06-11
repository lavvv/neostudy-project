import { NavLink } from "react-router-dom";

import "./Navbar.scss";

type TLink = {
  href: string;
  text: string;
};

type TNavbarProps = {
  classes?: string;
  links: TLink[];
};

export default function Navbar({ classes, links }: TNavbarProps) {
  if (!links) return null;

  return (
    <nav>
      <ul className={classes}>
        {links.map(({ href, text }) => (
          <li key={href}>
            <NavLink
              className={({ isActive }) =>
                isActive ? `Navbar__link Navbar__link--active` : `Navbar__link`
              }
              to={href}
            >
              {text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
