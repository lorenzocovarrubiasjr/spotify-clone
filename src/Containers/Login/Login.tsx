import React from "react";
import "./Login.css";
import { loginUrl } from "../../spotify";

function Login() {
  return (
    <div className="login-container">
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White-768x230.png"
        alt="white logo"
      />
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}

export default Login;
