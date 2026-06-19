import type { JSX, PropsWithChildren } from "react";
import { Link } from "react-router";
import styles from "./BackBtn.module.css";

type BackBtnProps = PropsWithChildren & {
  to?: string;
};
export default function BackBtn({
  to = "..",
  children,
}: BackBtnProps): JSX.Element {
  return (
    <Link to={to} relative="path" className={styles["back-btn"]}>
      ← <span>{children}</span>
    </Link>
  );
}
