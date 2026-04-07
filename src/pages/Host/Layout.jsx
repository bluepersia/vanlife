import { Outlet } from "react-router-dom";
import Nav from "../../components/Nav/Nav";
import styles from "./Layout.module.css";
import clsx from "clsx";

export default function HostLayout() {
  return (
    <div className={clsx(styles.layout, "container")}>
      <Nav
        links={[
          {
            to: "dashboard",
            name: "Dashboard",
          },
          {
            to: "income",
            name: "Income",
          },
          {
            to: "vans",
            name: "Vans",
          },
          {
            to: "reviews",
            name: "Reviews",
          },
        ]}
      />
      <Outlet />
    </div>
  );
}
