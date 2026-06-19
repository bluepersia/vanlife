import { useQuery } from "@tanstack/react-query";
import { useLocation, useParams } from "react-router";
import type { JSX } from "react/jsx-runtime";
import { getVan } from "./services";
import BackBtn from "../../components/BackBtn/BackBtn";
import styles from "./VanDetail.module.css";
import Button from "../../components/Button/Button";
import clsx from "clsx";

export default function VanDetail(): JSX.Element {
  const { id } = useParams();
  const location = useLocation();

  const { isFetching, data, error } = useQuery({
    queryKey: ["vans", id],
    queryFn: () => getVan(id),
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

  const type = location.state?.type || "all";
  const query = location.state?.query || "";
  return (
    <div className="container">
      <BackBtn to={`..${query ? `?${query}` : ""}`}>
        Back to {type} vans
      </BackBtn>

      {data && (
        <div className={styles.van}>
          <img src={data.imageUrl} alt={data.name} className={styles.vanImg} />
          <div
            className={clsx(
              "van-type",
              `van-type--${data.type}`,
              styles.vanType,
            )}
          >
            {data.type}
          </div>
          <h1 className={styles.title}>{data.name}</h1>
          <p className={styles.price}>
            <span>${data.price}</span>/day
          </p>
          <p className={styles.desc}>
            The Modest Explorer is a van designed to get you out of the house
            and into nature. This beauty is equipped with solar panels, a
            composting toilet, a water tank and kitchenette. The idea is that
            you can pack up your home and escape for a weekend or even longer!
          </p>
          <Button className={styles.button} onClick={() => {}}>
            Rent this van
          </Button>
        </div>
      )}
    </div>
  );
}
