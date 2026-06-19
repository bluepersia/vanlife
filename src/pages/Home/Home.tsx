import type { JSX } from "react/jsx-runtime";
import Button from "../../components/Button/Button";
import clsx from "clsx";
import styles from "./Home.module.css";

export default function Home(): JSX.Element {
  return (
    <div className={styles.home}>
      <div className={clsx(styles["home-inner"], "container")}>
        <h1 className={styles.title}>
          You got the travel plans, we got the travel vans.
        </h1>
        <p className={styles.desc}>
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <Button to="vans" className={styles.button}>
          Find your van
        </Button>
      </div>
    </div>
  );
}
