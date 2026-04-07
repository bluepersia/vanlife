import clsx from "clsx";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import styles from "./Header.module.css";
import avatarIcon from "/src/assets/images/avatar-icon.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={clsx(styles.inner, "container")}>
        <Logo />
        <Nav
          links={[
            {
              to: "host",
              name: "Host",
            },
            {
              to: "about",
              name: "About",
            },
            {
              to: "vans",
              name: "Vans",
            },
          ]}
        >
          <Link to="login" className={clsx(styles["login-btn"], "reset-list")}>
            <img
              src={avatarIcon}
              alt="Login"
              className={styles["login-icon"]}
            />
          </Link>
        </Nav>
      </div>
    </header>
  );
}
