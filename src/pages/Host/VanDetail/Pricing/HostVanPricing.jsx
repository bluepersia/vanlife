import { useOutletContext } from "react-router-dom";
import styles from "./HostVanPricing.module.css";

export default function HostVanPricing() {
  const { van } = useOutletContext();

  return (
    <section className={styles.pricing}>
      <h2 className="sr-only">Pricing</h2>
      <p className={styles.price}>
        ${van.price}
        <span>/day</span>
      </p>
    </section>
  );
}
