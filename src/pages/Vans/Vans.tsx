import clsx from "clsx";
import type { JSX } from "react/jsx-runtime";
import styles from "./Vans.module.css";
import { useQuery } from "@tanstack/react-query";
import { getVans } from "./services";
import Van from "./Van/Van";
import { useSearchParams } from "react-router";

export default function Vans(): JSX.Element {
  const [searchParams, setSearchParams] = useSearchParams();

  const { isFetching, data, error } = useQuery({
    queryKey: ["vans"],
    queryFn: getVans,
  });

  if (error) {
    return (
      <div className="container">
        <p className="error">Something went wrong!</p>
      </div>
    );
  }

  if (isFetching) {
    return (
      <div className="container">
        <p>Loading...</p>
      </div>
    );
  }

  const type = searchParams.get("type");

  const displayedVans = type ? data.filter((van) => van.type === type) : data;

  function setSearchParam(key: string, value: string): void {
    setSearchParams((prev) => {
      const newSearchParams = new URLSearchParams(prev);

      if (value) newSearchParams.set(key, value);
      else newSearchParams.delete(key);

      return newSearchParams;
    });
  }

  return (
    <div className="container">
      <header className={clsx(styles.header)}>
        <h1 className={styles.title}>Explore our van options</h1>
        <div className={styles.filters}>
          <button
            className={styles.filter}
            onClick={() => setSearchParam("type", "simple")}
          >
            Simple
          </button>
          <button
            className={styles.filter}
            onClick={() => setSearchParam("type", "luxury")}
          >
            Luxury
          </button>
          <button
            className={styles.filter}
            onClick={() => setSearchParam("type", "rugged")}
          >
            Rugged
          </button>
          <button
            className={styles.clear}
            onClick={() => setSearchParam("type", "")}
          >
            Clear filters
          </button>
        </div>
      </header>

      <div className={styles.vans}>
        {displayedVans?.map((van) => (
          <Van key={van.id} van={van} />
        ))}
      </div>
    </div>
  );
}
