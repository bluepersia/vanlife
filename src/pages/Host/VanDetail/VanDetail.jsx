import { useQuery } from "@tanstack/react-query";
import styles from "./VanDetail.module.css";
import { Outlet, useParams } from "react-router-dom";
import { getVan } from "./services";
import BackBtn from "../../../components/BackBtn/BackBtn";
import VanType from "../../../components/VanType/VanType";
import Nav from "../../../components/Nav/Nav";

export default function HostVanDetail() {
  const { id } = useParams();
  const { isFetching, error, data } = useQuery({
    queryKey: ["host-van"],
    queryFn: () => getVan(id),
  });
  return (
    <div className={styles["van-detail"]}>
      <p aria-live="polite" className="sr-only">
        {isFetching ? "Loading" : ""}
      </p>
      <p aria-live="assertive" className="sr-only">
        {error ? error.message : ""}
      </p>
      <BackBtn>Back to all vans</BackBtn>
      {data && (
        <article className={styles["van"]}>
          <header className={styles["van-header"]}>
            <img
              className={styles["van-img"]}
              src={data.imageUrl}
              alt={data.name}
            />
            <div className={styles["van-content"]}>
              <VanType type={data.type}>{data.type}</VanType>
              <h1 className={styles["van-name"]}>{data.name}</h1>
              <p className={styles["van-price"]}>
                ${data.price}
                <span>/day</span>
              </p>
            </div>
          </header>
          <Nav
            links={[
              {
                to: ".",
                name: "Details",
                end: true,
              },
              {
                to: "pricing",
                name: "Pricing",
              },
              {
                to: "photos",
                name: "Photos",
              },
            ]}
          />
          <div className={styles.outlet}>
            <Outlet context={{ van: data }} />
          </div>
        </article>
      )}
    </div>
  );
}
