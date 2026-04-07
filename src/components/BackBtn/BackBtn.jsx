import { Link } from "react-router-dom";
import styles from "./BackBtn.module.css";

export default function BackBtn({ children, to = ".." }) {
  return (
    <Link className={styles["back-btn"]} to={to} relative="path">
      ← <span>{children}</span>
    </Link>
  );
}
