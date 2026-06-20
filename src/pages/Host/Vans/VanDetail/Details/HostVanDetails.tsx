import { useOutletContext } from "react-router";
import type { JSX } from "react/jsx-runtime";
import styles from "./HostVanDetails.module.css";
import type { OutletContextType } from "../types";

export default function HostVanDetails(): JSX.Element {
  const { van } = useOutletContext<OutletContextType>();

  return (
    <dl className={styles.details}>
      <div className={styles.detailEntry}>
        <dt className={styles.term}>Name:</dt>
        <dd className={styles.description}>{van.name}</dd>
      </div>
      <div className={styles.detailEntry}>
        <dt className={styles.term}>Category:</dt>
        <dd className={styles.description}>{van.type}</dd>
      </div>
      <div className={styles.detailEntry}>
        <dt className={styles.term}>Description:</dt>
        <dd className={styles.description}>{van.description}</dd>
      </div>
      <div className={styles.detailEntry}>
        <dt className={styles.term}>Visibility:</dt>
        <dd className={styles.description}>Public</dd>
      </div>
    </dl>
  );
}
