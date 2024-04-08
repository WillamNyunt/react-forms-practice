import { useState } from "react";
import { Input } from "./Input";
import { useInput } from "../hooks/useInput";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";

export default function Login() {
  const {
    value: emailValue,
    handleInputBlur: handleEmailBlur,
    handleInputChange: handleEmailChange,
    hasError: emailHasError,
  } = useInput("email", (value) => isEmail(value) && isNotEmpty(value));
  const {
    value: passwordValue,
    handleInputBlur: handlePasswordBlur,
    handleInputChange: handlePasswordChange,
    hasError: passwordHasError,
  } = useInput("password", (value) => hasMinLength(value, 6));

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          onBlur={handleEmailBlur}
          id="email"
          type="email"
          name="email"
          onChange={handleEmailChange}
          value={emailValue}
          error={emailHasError && "Please enter a valid email"}
        />
        <Input
          onBlur={handlePasswordBlur}
          id="password"
          type="password"
          name="password"
          onChange={handlePasswordChange}
          value={passwordValue}
          error={passwordHasError && "Please enter a valid password"}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
