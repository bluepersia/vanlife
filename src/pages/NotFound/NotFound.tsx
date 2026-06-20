import type { JSX } from "react/jsx-runtime";
import styles from "./NotFound.module.css";
import Button from "../../components/Button/Button";
import clsx from "clsx";

export default function NotFound(): JSX.Element {
  return (
    <div className={clsx(styles.notFound, "container")}>
      <p className={styles.text}>
        Sorry, the page you were looking for was not found.
      </p>
      <Button to="/" color="black" className={styles.button}>
        Return to home
      </Button>
    </div>
  );
}
