import type { JSX } from "react/jsx-runtime";
import Header from "../Header/Header";
import { Outlet } from "react-router";
import Footer from "../Footer/Footer";
import styles from "./AppLayout.module.css";

export default function AppLayout(): JSX.Element {
  return (
    <div className={styles["app-layout"]}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
