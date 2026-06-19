import type { MouseEventHandler, PropsWithChildren } from "react";
import { Link } from "react-router";
import type { JSX } from "react/jsx-runtime";
import styles from "./Button.module.css";
import clsx from "clsx";

type ButtonProps = PropsWithChildren & {
  to?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  color?: string;
  className?: string;
};
export default function Button({
  to,
  onClick,
  color = "orange",
  className = "",
  children,
}: ButtonProps): JSX.Element {
  if (to)
    return (
      <Link
        className={clsx(
          styles.button,
          styles[`button--color-${color}`],
          className,
        )}
        to={to}
      >
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button
        className={clsx(styles.button, styles[`button--color-${color}`])}
        onClick={onClick}
      >
        {children}
      </button>
    );

  return null;
}
