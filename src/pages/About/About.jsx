import Btn from "../../components/Btn/Btn";
import img from "/src/assets/images/about-hero.png";
import styles from "./About.module.css";
import clsx from "clsx";

export default function About() {
  return (
    <div className={styles.about}>
      <img
        className={styles.img}
        src={img}
        alt="Man sitting on a lit van at night"
      />
      <div className={clsx(styles.inner, "container")}>
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

        <section className={styles.cta}>
          <h2 className={styles["cta-title"]}>
            Your destination is waiting.
            <br />
            Your van is ready.
          </h2>
          <Btn to="/vans" color="black" fitContent borderRadius={0.625}>
            Explore our vans
          </Btn>
        </section>
      </div>
    </div>
  );
}
