import { useState, useContext, useEffect } from "react";
import { ItemContext } from "../../Context/Context.jsx";
import "./Login.css";

const Login = () => {
  const { createUser, checkUser } = useContext(ItemContext);
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });
  const [signUpInput, setSignUpInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleLoginInput = (field, e) => {
    setLoginInput({ ...loginInput, [field]: e.target.value });
    console.log("loginInput", loginInput);
  };
  const handleSignUpInput = (field, e) => {
    setSignUpInput({ ...signUpInput, [field]: e.target.value });
    console.log("signUpInput", signUpInput);
  };
  const [mode, setMode] = useState("login");
  useEffect(() => {}, [createUser, checkUser]);
  return (
    <main className="login-page">
      {mode === "login" && (
        <section className="login-card">
          <h2 className="login-title">Login</h2>
          <div className="login-form">
            <input
              className="login-input"
              type="email"
              placeholder="Email address"
              onChange={(e) => handleLoginInput("email", e)}
            />
            <input
              className="login-input"
              type="password"
              placeholder="Password"
              onChange={(e) => handleLoginInput("password", e)}
            />
            <button className="login-btn" onClick={() => checkUser(loginInput)}>
              Continue
            </button>
          </div>
          <p className="login-switch">
            Create an account?
            <span onClick={() => setMode("signUp")}>Click here</span>
          </p>
          <label className="login-terms">
            <input type="checkbox" />
            <span>
              By continueing, I agree to the terms of use and privacy policy.
            </span>
          </label>
        </section>
      )}
      {mode === "signUp" && (
        <section className="login-card">
          <h2 className="login-title">SignUp</h2>
          <div className="login-form">
            <input
              className="login-input"
              type="name"
              placeholder="Your Name"
              onChange={(e) => handleSignUpInput("name", e)}
            />
            <input
              className="login-input"
              type="email"
              placeholder="Email Address"
              onChange={(e) => handleSignUpInput("email", e)}
            />
            <input
              className="login-input"
              type="password"
              placeholder="Password"
              onChange={(e) => handleSignUpInput("password", e)}
            />
            <button
              className="login-btn"
              onClick={() => createUser(signUpInput)}
            >
              Continue
            </button>
          </div>
          <p className="login-switch">
            Already have an account?
            <span onClick={() => setMode("login")}>Login here</span>
          </p>
          <label className="login-terms">
            <input type="checkbox" />
            <span>
              By continueing, I agree to the terms of use and privacy policy.
            </span>
          </label>
        </section>
      )}
    </main>
  );
};

export default Login;