import React, { useEffect } from "react";
import Spline from "@splinetool/react-spline";
import "../styles/login.css";
import { SignInButton, useClerk, useUser } from "@clerk/clerk-react";

function UserLogin() {
  const { openSignIn } = useClerk();

  return (
    <div className="fixed-size">
      <div className="container">
        <div className="tag">
          <div className="title">
            <span className="du">DU</span>KAAN
          </div>
          <div className="tagline">
            " Shop Local <span className="tg">with Us!</span> "
          </div>
        </div>

        <div className="spline">
          <div className="element w-auto h-auto">
            <Spline scene="https://prod.spline.design/1nF5f2A-9UPkKi6s/scene.splinecode" />
          </div>
        </div>
        <div className="form">
          <div className="Login mt-32">
            <div className="inp">
              <div className="log-title">Login</div>
              <div id="inp-text">Username</div>
              <input
                type="text"
                placeholder="Name"
                disabled
                className="hover:cursor-not-allowed"
              ></input>
              <div id="inp-text">Password</div>
              <input
                type="password"
                disabled
                className="hover:cursor-not-allowed"
              ></input>
              <div id="inp-text">E-mail</div>
              <input
                type="email"
                placeholder="E-mail"
                id="email"
                name="email"
                disabled
                className="hover:cursor-not-allowed"
              ></input>
              <div>
                {/* <SignInButton /> */}
                <button
                  className="login-button"
                  onClick={() => {
                    openSignIn();
                  }}
                >
                  LOGIN
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;
