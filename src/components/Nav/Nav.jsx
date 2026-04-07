import { NavLink } from "react-router-dom";
import { determineNavLinkStyle } from "./utils";
import styles from "./Nav.module.css";
import clsx from "clsx";

export default function Nav({ links, children }) {
  return (
    <nav>
      <ul className={clsx(styles.list, "reset-list")}>
        {links.map((link) => (
          <li key={link.name}>
            <NavLink
              to={link.to}
              style={determineNavLinkStyle}
              className={clsx(styles.link, "reset-link")}
              end={link.end}
            >
              {link.name}
            </NavLink>
          </li>
        ))}
        {children}
      </ul>
    </nav>
  );
}
