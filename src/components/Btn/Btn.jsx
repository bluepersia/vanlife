import { Link } from "react-router-dom";
import styles from "./Btn.module.css";
import clsx from "clsx";

export default function Btn({
  children,
  to = "",
  onClick = null,
  color = "#ff8c38",
  fitContent = false,
  borderRadius = 0.31,
  className = "",
}) {
  if (to)
    return (
      <Link
        to={to}
        className={clsx(
          styles.btn,
          "reset-link",
          fitContent && styles["btn--fit-content"],
          className,
        )}
        style={{ backgroundColor: color, borderRadius: `${borderRadius}rem` }}
      >
        {children}
      </Link>
    );
  if (onClick)
    return (
      <button
        onClick={onClick}
        className={clsx(
          styles.btn,
          fitContent && styles["btn--fit-content"],
          className,
        )}
        style={{ backgroundColor: color, borderRadius: `${borderRadius}rem` }}
      >
        {children}
      </button>
    );

  throw new Error("Btn defined without 'to' or 'onClick'");
}
