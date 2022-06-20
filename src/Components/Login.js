import React from "react";
import { useDispatch } from "react-redux";
import { userLogin, userLogout } from "../Features/user";

const Login = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => {
          dispatch(
            userLogin({
              name: "Kashyap Kapdi",
              age: 19,
              email: "kapdikashyap2003@gmail.com",
              phoneNumber: "+91 96875-26355",
            })
          );
        }}
      >
        Login
      </button>

      <button
        onClick={() => {
          dispatch(userLogout());
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Login;
