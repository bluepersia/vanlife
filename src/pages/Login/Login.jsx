import clsx from "clsx";
import styles from "./Login.module.css";
import Btn from "../../components/Btn/Btn";
import { useMutation } from "@tanstack/react-query";
import { login } from "./services";
import { useContext } from "react";
import { LoginContext } from "../../contexts/LoginContext/LoginContext";
import { useLocation, useNavigate } from "react-router-dom";

export default function Login() {
  const { setIsLoggedIn } = useContext(LoginContext);
  const navigate = useNavigate();
  const location = useLocation();
  const mutation = useMutation({
    mutationFn: login,
    onSuccess: () => {
      setIsLoggedIn(true);
      navigate(location.state?.from || "/host", { replace: true });
    },
  });
  function handleFormAction(formData) {
    const data = Object.fromEntries(formData);
    mutation.mutate(data);
  }
  return (
    <div className={clsx(styles.login, "container")}>
      <p className={styles.message}>{location.state?.message}</p>
      <h1 className={styles.title}>Sign in to your account</h1>
      <form className={styles.form} action={handleFormAction}>
        <label htmlFor="email" className="sr-only">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email address"
          className={styles.input}
          required
        />
        <label htmlFor="password" className="sr-only">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="*****"
          className={styles.input}
          required
        />

        <Btn onClick={() => {}} className={styles.btn}>
          Sign in
        </Btn>
      </form>
      <p className={styles.loading} aria-live="polite">
        {mutation.isPending && "Loading..."}
      </p>
      <p className={styles.error} aria-live="assertive">
        {mutation.error && mutation.error.message}
      </p>
    </div>
  );
}
