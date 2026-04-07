import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import clsx from "clsx";
import styles from "./Vans.module.css";
import { getHostVans } from "./services";
import {
  determineErrorText,
  determineLoadingText,
} from "../../../utils/determinePretexts";
import { Link } from "react-router-dom";

export default function HostVans() {
  const [hasStarted, setHasStarted] = useState(false);

  const { isPending, error, data } = useQuery({
    queryKey: ["vans"],
    queryFn: getHostVans,
  });

  useEffect(() => {
    const id = setTimeout(() => setHasStarted(true), 0);
    return () => clearTimeout(id);
  }, []);

  function render() {
    if (error)
      return (
        <h1 className={styles.title} style={{ color: "red" }}>
          {error.message}
        </h1>
      );
    if (isPending) return <h1 className={styles.title}>Loading...</h1>;

    return (
      <>
        <h1 className={styles.title}>Your listed vans</h1>
        <p aria-live="polite" className="sr-only">
          {determineLoadingText(hasStarted, isPending)}
        </p>
        <p aria-live="assertive" className="sr-only">
          {determineErrorText(error)}
        </p>
        {data && (
          <ul className={clsx(styles.list, "reset-list")}>
            {data.map((van) => (
              <li key={van.id} className={styles["van-item"]}>
                <article className={styles.van}>
                  <img
                    src={van.imageUrl}
                    alt={van.name}
                    className={styles["van-img"]}
                  />
                  <div className={styles["van-content"]}>
                    <h2 className={styles["van-name"]}>{van.name}</h2>
                    <p className={styles["van-price"]}>${van.price}/day</p>
                  </div>
                  <Link
                    to={van.id}
                    aria-label="Go to detail page"
                    className={styles["van-link"]}
                  ></Link>
                </article>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
  return <div className={styles["host-vans"]}>{render()}</div>;
}
