import { NavLink } from "react-router";
import type { JSX } from "react/jsx-runtime";
import styles from "./Nav.module.css";
import clsx from "clsx";

type NavProps = {
  links: Array<{
    label: string;
    to: string;
    end?: boolean;
  }>;
};

export default function Nav(props: NavProps): JSX.Element {
  return (
    <nav className={styles.nav}>
      <ul className={clsx(styles.list, "reset-list")}>
        {props.links.map((link) => (
          <li key={link.to} className={styles.item}>
            <NavLink
              to={link.to}
              className={({ isActive }) =>
                clsx(styles.link, isActive && styles["link--active"])
              }
              end={link.end}
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
