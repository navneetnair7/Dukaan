import { useClerk, useUser } from "@clerk/clerk-react";
import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const { user, isSignedIn } = useUser();
  const { signOut } = useClerk();
  const navigate = useNavigate();
  return (
    <div className="nav">
      <div
        className="logo hover:cursor-pointer"
        onClick={() => {
          navigate("/");
        }}
      >
        <span style={{ color: "white" }}>DU</span>KAAN
      </div>
      <div className="search">
        <img className="search-icon" src="/images/search.png"></img>
        <input className="search-bar pl-5" placeholder="Search"></input>
      </div>
      {isSignedIn && (
        <div className="flex w-96">
          <button className="cart p-2" onClick={() => navigate("/cart")}>
            <img src="/images/cart.jpeg"></img>
            Cart
          </button>
          <button className="cart p-2" onClick={() => navigate("/user")}>
            <img src="/images/profile.png"></img>
            Profile
          </button>
          <button
            className="profile p-2 w-auto"
            onClick={() => {
              signOut();
              localStorage.setItem("visited", "false");
              navigate("/");
            }}
          >
            <img src="/images/profile.png"></img>
            Sign Out
          </button>
        </div>
      )}
      {!isSignedIn && (
        <button
          className="profile"
          onClick={(e) => {
            e.preventDefault();
            navigate("/userlogin");
          }}
        >
          <img src="/images/profile.png"></img>
          Login
        </button>
      )}
    </div>
  );
}

export default Navbar;
