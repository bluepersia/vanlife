import type { JSX } from "react/jsx-runtime";
import img from "/src/assets/images/about-hero.png";
import styles from "./About.module.css";
import Button from "../../components/Button/Button";
import clsx from "clsx";

export default function About(): JSX.Element {
  return (
    <div className="container">
      <img
        className={styles.img}
        src={img}
        alt="Person sitting on the roof of a camper van beside a glowing pop-up tent, gazing at the starry night sky."
      />
      <div className={clsx(styles["about-inner"])}>
        <h1 className={styles.title}>
          Don’t squeeze in a sedan when you could relax in a van.
        </h1>
        <p className={styles["para-1"]}>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
        <p className={styles["para-2"]}>
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>

        <div className={styles.cta}>
          <h2 className={styles["cta-title"]}>
            Your destination is waiting.
            <br />
            Your van is ready.
          </h2>
          <Button to="/vans" color="black">
            Explore our vans
          </Button>
        </div>
      </div>
    </div>
  );
}
