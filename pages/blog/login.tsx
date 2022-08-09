import React, { BaseSyntheticEvent, FC, useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";
import { useForm } from "../../hooks/useForm";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { login } from "../../store/slices/auth/thunk";
import styles from "../../styles/login.module.css";
import DynamicHeadTag from "../../components/dynamicHeadTag";

const LoginPage: FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state);

  const [formValues, handleInputChange] = useForm({
    loginEmail: "",
    loginPassword: "",
  });

  const { loginEmail, loginPassword } = formValues;

  const handleSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    const loginPayload = {
      email: loginEmail,
      password: loginPassword,
    };

    dispatch(login(loginPayload));
  };

  useEffect(() => {
    if (user.name) {
      router.push("/blog/blog-dashboard");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <>
      <DynamicHeadTag title="Login" />
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
export default LoginPage;
