// LoginPage.js
import React, { useState } from "react";
import Header from "../components/Header";
import useLogin from "../hooks/useLogin";
import { useNavigate } from "react-router-dom";
import { Button, Spinner } from "react-bootstrap";
import { ToastContainer } from "react-toastify";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const navigation = useNavigate();
  const [passwordError, setPasswordError] = useState("");
  const { loading, loginFacultyHandler } = useLogin();

  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value || !emailRegex.test(value)) {
      setEmailError("Please enter a valid email address");
      return false;
    }
    setEmailError("");
    return true;
  };

  const validatePassword = (value: string) => {
    if (!value || value.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      return false;
    }
    setPasswordError("");
    return true;
  };

  const handleEmailChange = (event: any) => {
    const newValue = event.target.value;
    setEmail(newValue);
    validateEmail(newValue);
  };

  const handlePasswordChange = (event: any) => {
    const newValue = event.target.value;
    setPassword(newValue);
    validatePassword(newValue);
  };

  const handleLogin = async () => {
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    if (isEmailValid && isPasswordValid) {
      // Add your login logic here, e.g., make an API call
      const res = await loginFacultyHandler({
        Email: email,
        Password: password,
      });
      if (res) {
        // navigation("/view-students");
        navigation("/regular");
      }
    } else {
      console.log("Form validation failed");
    }
  };

  return (
    <div className="login-bg">
      <ToastContainer />
      <div className="login-container">
        <Header />
        <h2>Login</h2>
        <form>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
          />
          {emailError && <p className="error-message">{emailError}</p>}

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
          />
          {passwordError && <p className="error-message">{passwordError}</p>}

          {!loading ? (
            <button
              type="button"
              onClick={handleLogin}
              className="login-button"
            >
              Login
            </button>
          ) : (
            <Button variant="primary" disabled>
              <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              Loading...
            </Button>
          )}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
