import type { JSX } from "react/jsx-runtime";
import type { Van } from "../../../types/Van";
import clsx from "clsx";
import styles from "./Van.module.css";
import { Link } from "react-router";

type VanProps = {
  van: Van;
  query: string;
  type: string;
};

export default function Van({ van, query, type }: VanProps): JSX.Element {
  return (
    <article className={styles.van}>
      <img src={van.imageUrl} alt={`${van.name}`} className={styles.vanImg} />
      <div className={styles.content}>
        <div className={styles["col-1"]}>
          <h2 className={styles.vanName}>{van.name}</h2>
          <div className={clsx("van-type", `van-type--${van.type}`)}>
            {van.type}
          </div>
        </div>
        <div className={styles["col-2"]}>
          <p className={styles.vanPrice}>${van.price}</p>
          <p className={styles.perDay}>/day</p>
        </div>
      </div>
      <Link to={van.id} className={styles.link} state={{ query, type }}>
        View more
      </Link>
    </article>
  );
}
