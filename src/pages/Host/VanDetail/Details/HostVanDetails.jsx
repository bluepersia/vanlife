import { useOutletContext } from "react-router-dom";
import styles from "./HostVanDetails.module.css";

export default function HostVanDetails() {
  const { van } = useOutletContext();

  return (
    <section className={styles.details}>
      <h2 className="sr-only">Details</h2>
      <p className={styles.property}>
        <span>Name: </span>
        {van.name}
      </p>
      <p className={styles.property}>
        <span>Category: </span>
        {van.type}
      </p>
      <p className={styles.property}>
        <span>Description: </span>
        {van.description}
      </p>
      <p className={styles.property}>
        <span>Visibility: </span>
        Public
      </p>
    </section>
  );
}
