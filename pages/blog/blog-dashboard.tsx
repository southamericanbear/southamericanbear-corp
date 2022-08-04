import React, { BaseSyntheticEvent, FC } from "react";
import Image from "next/image";
import Head from "next/head";
import { useForm } from "../../hooks/useForm";
import styles from "../../styles/login.module.css";

const BlogDashboard: FC = () => {
  const [formValues, handleInputChange] = useForm({
    loginEmail: "",
    loginPassword: "",
  });

  const { loginEmail, loginPassword } = formValues;

  const handleSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    const logInPayload = {
      email: loginEmail,
      password: loginPassword,
    };
    console.log(logInPayload);
  };

  return (
    <>
      <Head>
        <title>South American Bear | Blog Dashboard</title>
        <link rel="icon" href="/images/bear.png" />
      </Head>
      <div className={styles.container}>
        <h1>Welcome Back!</h1>
        <Image height={100} width={100} src="/images/bear.png" alt="bear" />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="email"
            name="loginEmail"
            value={loginEmail}
            onChange={handleInputChange}
          />
          <input
            type="password"
            placeholder="password"
            name="loginPassword"
            value={loginPassword}
            onChange={handleInputChange}
          />
          <button>submit</button>
        </form>
      </div>
    </>
  );
};
export default BlogDashboard;
