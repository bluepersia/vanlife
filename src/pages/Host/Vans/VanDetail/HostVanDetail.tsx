import type { JSX } from "react/jsx-runtime";
import BackBtn from "../../../../components/BackBtn/BackBtn";
import styles from "./HostVanDetail.module.css";
import { Outlet, useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getHostVan } from "./services";
import Nav from "../../../../components/Nav/Nav";

export default function HostVanDetail(): JSX.Element {
  const { id } = useParams();

  const { data, error, isFetching } = useQuery({
    queryKey: ["host-vans", id],
    queryFn: () => getHostVan(id),
  });

  if (error) {
    return <p className="error">Something went wrong!</p>;
  }

  if (isFetching) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <BackBtn className={styles.backBtn}>Back to all vans</BackBtn>

      {data && (
        <article className={styles.van}>
          <header className={styles.vanHeader}>
            <img
              className={styles.vanImg}
              src={data.imageUrl}
              alt={data.name}
            />
            <div className={styles.vanContent}>
              <div
                className={`van-type van-type--${data.type} ${styles.vanType}`}
              >
                {data.type}
              </div>
              <h1 className={styles.vanName}>{data.name}</h1>
              <p className={styles.vanPrice}>
                <span>${data.price}</span>/day
              </p>
            </div>
          </header>

          <Nav
            className={styles.nav}
            links={[
              {
                label: "Details",
                to: ".",
                end: true,
              },
              {
                label: "Pricing",
                to: "pricing",
              },
              {
                label: "Photos",
                to: "photos",
              },
            ]}
          />
          <Outlet context={{ van: data }} />
        </article>
      )}
    </>
  );
}
