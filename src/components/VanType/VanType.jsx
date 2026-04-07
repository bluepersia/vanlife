import clsx from "clsx";
import styles from "./VanType.module.css";

export default function VanType({ children, type }) {
  return (
    <p className={clsx(styles["van-type"], styles[`van-type--${type}`])}>
      {children}
    </p>
  );
}
