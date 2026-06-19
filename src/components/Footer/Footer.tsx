import type { JSX } from "react/jsx-runtime";
import styles from "./Footer.module.css";

export default function Footer(): JSX.Element {
  return (
    <footer className={styles.footer}>
      <p>Ⓒ {new Date().getFullYear()} #VANLIFE</p>
    </footer>
  );
}
