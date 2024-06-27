import { NavLink } from "react-router-dom";

import "./Navbar.scss";

type TLink = {
  href: string;
  text: string;
};

type TNavbarProps = {
  className?: string;
  links: TLink[];
};

export function Navbar({ className, links }: TNavbarProps) {
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
