import { Link } from "react-router-dom";
import styles from "./Btn.module.css";
import clsx from "clsx";

export default function Btn({ children, to = "", onClick = null }) {
  if (to)
    return (
      <Link to={to} className={clsx(styles.btn, "reset-link")}>
        {children}
      </Link>
    );
  if (onClick)
    return (
      <button onClick={onClick} className={styles.btn}>
        {children}
      </button>
    );

  throw new Error("Btn defined without 'to' or 'onClick'");
}
