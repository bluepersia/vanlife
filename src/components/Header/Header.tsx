import { Link } from "react-router";
import type { JSX } from "react/jsx-runtime";
import Nav from "../Nav/Nav";
import styles from "./Header.module.css";
import clsx from "clsx";

export default function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <div className={clsx(styles["header-inner"], "container")}>
        <Link to="/" className={styles.logo}>
          #Vanlife
        </Link>
        <Nav
          links={[
            {
              label: "Host",
              to: "host",
            },
            {
              label: "About",
              to: "about ",
            },
            {
              label: "Vans",
              to: "vans",
            },
          ]}
        />
      </div>
    </header>
  );
}
