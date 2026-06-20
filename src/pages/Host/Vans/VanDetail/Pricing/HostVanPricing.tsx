import type { JSX } from "react/jsx-runtime";
import styles from "./HostVanPricing.module.css";
import { useOutletContext } from "react-router";
import type { OutletContextType } from "../types";

export default function HostVanPricing(): JSX.Element {
  const { van } = useOutletContext<OutletContextType>();

  return (
    <p className={styles.price}>
      <span>${van.price}</span>/day
    </p>
  );
}
