import { Link } from "react-router-dom";
import VanType from "../../../components/VanType/VanType";
import styles from "./Van.module.css";
import clsx from "clsx";

export default function Van({
  imageUrl,
  name,
  type,
  price,
  id,
  searchParams,
  typeFilter,
}) {
  return (
    <article className={styles.van}>
      <img src={imageUrl} alt={name} className={styles.img} />
      <div className={styles.details}>
        <div className={styles["col-1"]}>
          <h2 className={styles.name}>{name}</h2>
          <VanType type={type}>{type}</VanType>
        </div>
        <div className={styles["col-2"]}>
          <p className={styles.price}>
            ${price}
            <br />
            <span className={styles.small}>/day</span>
          </p>
        </div>
      </div>
      <Link
        to={id}
        state={{ search: searchParams.toString(), type: typeFilter }}
        className={clsx(styles.link)}
        aria-label={`Go to detail page for ${name}`}
      ></Link>
    </article>
  );
}
