import Swal from "sweetalert2";
import { fetchWithoutToken } from "../../../api/apiFetch";
import { ILogin } from "../../../types/auth";
import { startAndFinishLogin } from "./authSlice";
import { login as loginAction } from "../user/userSlice";

export const login = (payload: ILogin) => {
  return async (dispatch: any, getState: any) => {
    console.log(dispatch, "dispatch");
    console.log(getState, "getState");
    dispatch(startAndFinishLogin(true));
    const res = await fetchWithoutToken("/auth/login", payload, "POST");
    const data = await res?.json();
    if (data.msg === "Login success") {
      const { name, msg, token } = data;
      localStorage.setItem("token", token);
      localStorage.setItem("token-init-data", new Date().getTime().toString());
      dispatch(loginAction({ name, msg }));
      dispatch(startAndFinishLogin(false));
    } else {
      Swal.fire("Error, Invalid Credentials", data.msg, "error");
      dispatch(startAndFinishLogin(false));
    }
  };
};
