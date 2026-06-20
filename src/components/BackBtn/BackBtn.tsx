import type { JSX, PropsWithChildren } from "react";
import { Link } from "react-router";
import styles from "./BackBtn.module.css";
import clsx from "clsx";

type BackBtnProps = PropsWithChildren & {
  to?: string;
  className?: string;
};
export default function BackBtn({
  to = "..",
  className = "",
  children,
}: BackBtnProps): JSX.Element {
  return (
    <Link
      to={to}
      relative="path"
      className={clsx(styles["back-btn"], className)}
    >
      ← <span>{children}</span>
    </Link>
  );
}
