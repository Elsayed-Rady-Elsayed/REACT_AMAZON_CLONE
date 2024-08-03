import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase";
import { useAuth } from "../../context/GlobalState";
export const Login = () => {
  const nav = useNavigate();
  const { user } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        if (auth) {
          nav("/");
        }
      })
      .catch((e) => alert(e.message));
  };
  const SignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        if (auth) {
          nav("/");
        }
      })
      .catch((e) => alert(e.message));
  };
  return (
    <div className="app login">
      <Link to="/" className="login-logo"></Link>
      <form>
        <h2>Sign In</h2>
        <div>
          <label form="email">E-mail</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <label form="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button className="btn login" type="button" onClick={SignIn}>
          Sign In
        </button>
        <p>
          By continuing, you agree to Amazon's Fake Clone Conditions of Use and
          Privacy Notice.
        </p>
        <button className="btn createAccount" onClick={Register}>
          Create Your Amazon Account
        </button>
      </form>
    </div>
  );
};
