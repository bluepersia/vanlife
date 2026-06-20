import type { JSX } from "react/jsx-runtime";
import styles from "./HostVans.module.css";
import { useQuery } from "@tanstack/react-query";
import { getHostVans } from "./services";
import { Link } from "react-router";

export default function HostVans(): JSX.Element {
  const { data, isFetching, error } = useQuery({
    queryKey: ["host-vans"],
    queryFn: getHostVans,
  });

  if (error) {
    return <p className="error">Something went wrong!</p>;
  }

  if (isFetching) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1 className={styles.title}>Your listed vans</h1>
      <ul className={styles.list}>
        {data.map((van) => (
          <li key={van.id} className={styles.van}>
            <img src={van.imageUrl} alt={van.name} className={styles.vanImg} />
            <div className={styles.vanContent}>
              <h2 className={styles.vanName}>{van.name}</h2>
              <p className={styles.vanPrice}>${van.price}/day</p>
            </div>
            <Link to={van.id} className={styles.link}>
              View more
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
