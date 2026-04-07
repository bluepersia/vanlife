import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getVans } from "./services";
import clsx from "clsx";
import styles from "./Vans.module.css";
import {
  determineLoadingText,
  determineErrorText,
} from "/src/utils/determinePretexts";
import Van from "./Van/Van";

export default function Vans() {
  const [hasStarted, setHasStarted] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const { isPending, error, data } = useQuery({
    queryKey: ["vans"],
    queryFn: getVans,
  });

  useEffect(() => {
    const id = setTimeout(() => setHasStarted(true), 0);
    return () => clearTimeout(id);
  }, []);

  function setSearch(key, value) {
    setSearchParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams);

      if (value) newParams.set(key, value);
      else newParams.delete(key);

      return newParams;
    });
  }

  const typeFilter = searchParams.get("type") || "";

  let displayedVans = null;

  if (data)
    displayedVans = typeFilter
      ? data.filter((van) => van.type === typeFilter)
      : data;

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
        <h1 className={styles.title}>Explore our van options</h1>
        <div className={styles["van-types"]}>
          <button
            className={clsx(styles["van-type"], styles["van-type--simple"])}
            onClick={() => setSearch("type", "simple")}
          >
            Simple
          </button>
          <button
            className={clsx(styles["van-type"], styles["van-type--luxury"])}
            onClick={() => setSearch("type", "luxury")}
          >
            Luxury
          </button>
          <button
            className={clsx(styles["van-type"], styles["van-type--rugged"])}
            onClick={() => setSearch("type", "rugged")}
          >
            Rugged
          </button>
          {typeFilter && (
            <button
              className={clsx(styles["van-type"], styles["clear"])}
              onClick={() => setSearch("type", "")}
            >
              Clear filters
            </button>
          )}
        </div>
        <div className={styles.vans}>
          {displayedVans &&
            displayedVans.map((van) => (
              <Van
                key={van.id}
                {...van}
                searchParams={searchParams}
                typeFilter={typeFilter}
              />
            ))}
        </div>
      </>
    );
  }
  return (
    <div className={clsx(styles["vans-page"], "container")}>
      <p aria-live="polite" className="sr-only">
        {determineLoadingText(hasStarted, isPending)}
      </p>
      <p aria-live="assertive" className="sr-only">
        {determineErrorText(error)}
      </p>
      {render()}
    </div>
  );
}
