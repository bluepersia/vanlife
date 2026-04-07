import { useLocation, useParams } from "react-router-dom";
import BackBtn from "../../components/BackBtn/BackBtn";
import { useQuery } from "@tanstack/react-query";
import { getVan } from "./services";
import {
  determineErrorText,
  determineLoadingText,
} from "../../utils/determinePretexts";
import styles from "./VanDetail.module.css";
import { useState, useEffect } from "react";
import VanType from "../../components/VanType/VanType";
import clsx from "clsx";
import Btn from "../../components/Btn/Btn";

export default function VanDetail() {
  const { id } = useParams();
  const location = useLocation();
  const [hasStarted, setHasStarted] = useState(false);

  const { isFetching, error, data } = useQuery({
    queryKey: ["van"],
    queryFn: () => getVan(id),
  });

  useEffect(() => {
    const id = setTimeout(() => setHasStarted(true), 0);
    return () => clearTimeout(id);
  }, []);

  const searchParams = location.state?.search || "";

  function render() {
    if (error)
      return (
        <h1 className={styles.name} style={{ color: "red" }}>
          {error.message}
        </h1>
      );
    if (isFetching) return <h1 className={styles.name}>Loading...</h1>;

    return (
      data && (
        <article className={styles.van}>
          <img src={data.imageUrl} alt={data.name} className={styles.img} />
          <VanType type={data.type}>{data.type}</VanType>
          <h1 className={styles.name}>{data.name}</h1>
          <p className={styles.price}>
            ${data.price}
            <span className={styles["price-small"]}>/day</span>
          </p>
          <p className={styles.desc}>{data.description}</p>
          <Btn onClick={() => {}}>Rent this van</Btn>
        </article>
      )
    );
  }

  return (
    <div className={clsx(styles["van-detail"], "container")}>
      <BackBtn to={`..${searchParams ? `?${searchParams}` : ""}`}>
        Back to {location.state?.type || "all"} vans
      </BackBtn>
      <p aria-live="polite" className="sr-only">
        {determineLoadingText(hasStarted, isFetching)}
      </p>
      <p aria-live="assertive" className="sr-only">
        {determineErrorText(error)}
      </p>
      {render()}
    </div>
  );
}
