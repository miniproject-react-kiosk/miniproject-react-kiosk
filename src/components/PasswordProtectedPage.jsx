import React, { useState } from "react";
import Home from "../pages/Home";
import Admin from "../pages/Admin";

function PasswordProtectedPage() {
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // 서버에서 비밀번호를 검증
    // 예를 들어, 기본 비밀번호가 "password"라면,
    if (password === "hh5kiosk") {
      setIsValid(true);
    }
  };

  return (
    <div>
      {!isValid && (
        <form onSubmit={handleSubmit}>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      )}
      {isValid && <p>Welcome! You have entered the correct password.</p>}
    </div>
  );
}

export default PasswordProtectedPage;
