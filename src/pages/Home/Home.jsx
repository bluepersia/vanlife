import clsx from "clsx";
import styles from "./Home.module.css";
import Btn from "../../components/Btn/Btn";

export default function Home() {
  return (
    <div className={clsx(styles.home)}>
      <div className={clsx(styles.inner, "container")}>
        <h1 className={styles.title}>
          You got the travel plans, we got the travel vans.
        </h1>
        <p className={styles.para}>
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <Btn to="vans">Find your van</Btn>
      </div>
    </div>
  );
}
