import { useOutletContext } from "react-router-dom";
import styles from "./HostVanPhotos.module.css";

export default function HostVanPhotos() {
  const { van } = useOutletContext();

  return (
    <section className={styles.photos}>
      <h2 className="sr-only">Photos</h2>
      <img src={van.imageUrl} className={styles.photo} alt={van.name} />
    </section>
  );
}
