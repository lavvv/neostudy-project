import { NavLink } from "react-router-dom";

import "./Navbar.scss";

type Link = {
  href: string;
  text: string;
};

type Navbar = {
  className?: string;
  links: Link[];
};

export function Navbar({ className, links }: Navbar) {
  if (!links) return null;

  return (
    <nav>
      <ul className={className}>
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
