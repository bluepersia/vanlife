import type { JSX } from "react/jsx-runtime";
import Nav from "../../components/Nav/Nav";
import { Outlet } from "react-router";

export default function HostLayout(): JSX.Element {
  return (
    <div className="container">
      <Nav
        links={[
          {
            label: "Dashboard",
            to: ".",
            end: true,
          },
          {
            label: "Income",
            to: "income",
          },
          {
            label: "Vans",
            to: "vans",
          },
          {
            label: "Reviews",
            to: "reviews",
          },
        ]}
      />
      <Outlet />
    </div>
  );
}
