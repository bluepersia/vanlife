import { Link } from "react-router-dom";
import styles from "./Logo.module.css";
import clsx from "clsx";

export default function Logo() {
  return (
    <Link to="." className={clsx(styles.logo, "reset-link")}>
      #VANLIFE
    </Link>
  );
}
