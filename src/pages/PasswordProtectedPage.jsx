import React, { useState } from "react";
import styled from "styled-components";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";

function PasswordProtectedPage() {
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // 서버에서 비밀번호를 검증

    if (password === process.env.REACT_APP_ADMIN_PW) {
      setIsValid(true);
      swal("관리자 로그인 성공!", "관리자 페이지로 이동합니다. ", "info").then(
        () => {
          navigate(`/Admin`);
        }
      );
    } else {
      swal("관리자 로그인 실패!", "비밀번호를 다시 입력해주세요.", "error");
    }
  };

  const onReset = () => {
    setPassword("");
  };

  return (
    <div>
      <StHeader>
        <BackButton></BackButton>
        <StTitle>Administrator Login</StTitle>
      </StHeader>

      <StContainer>
        {!isValid && (
          <StFormBox>
            <form onSubmit={handleSubmit}>
              <label>
                PW :{" "}
                <input
                  type="password"
                  value={password}
                  placeholder="관리자 비밀번호를 입력해주세요."
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <button
                type="submit"
                onClick={() => {
                  handleSubmit(password);
                  onReset();
                }}
              >
                입력
              </button>
            </form>
          </StFormBox>
        )}
        {isValid && <p></p>}
      </StContainer>
    </div>
  );
}

export default PasswordProtectedPage;

const StHeader = styled.div`
  background-color: #ffe600e2;
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  margin-bottom: 20px;
`;

const StTitle = styled.h1`
  text-align: center;
  font-family: "MorningBreezeBold";
  margin-top: 15px;
  color: #2a2a2a;
`;

const StContainer = styled.div`
  display: flex;
  flex-basis: 40%;
  margin: auto;
  justify-content: center;
  border: 3px solid #3d3d3d97;
  border-radius: 10px;
  padding: 3vw;
  margin-top: 25%;
  width: 500px;
  height: 200px;
  text-align: center;
  font-family: "NanumSquareRoundBold";
  font-size: 12pt;
`;

const StFormBox = styled.div`
  display: flex;
  margin: auto;
  justify-content: center;
`;
