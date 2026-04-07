import clsx from "clsx";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={clsx(styles.inner, "container")}>
        <Logo />
        <Nav
          links={[
            {
              to: "about",
              name: "About",
            },
            {
              to: "vans",
              name: "Vans",
            },
          ]}
        />
      </div>
    </header>
  );
}
