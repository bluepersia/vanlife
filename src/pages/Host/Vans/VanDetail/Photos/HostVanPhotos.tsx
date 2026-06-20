import type { JSX } from "react/jsx-runtime";
import styles from "./HostVanPhotos.module.css";
import { useOutletContext } from "react-router";
import type { OutletContextType } from "../types";

export default function HostVanPhotos(): JSX.Element {
  const { van } = useOutletContext<OutletContextType>();

  return <img className={styles.vanImg} src={van.imageUrl} alt={van.name} />;
}
