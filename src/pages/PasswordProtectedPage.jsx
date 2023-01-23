import React, { useState } from "react";
import styled from "styled-components";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

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

  return (
    <div>
      <StContainer>
        {!isValid && (
          <form onSubmit={handleSubmit}>
            <label>
              PW :{" "}
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <button type="submit">Submit</button>
          </form>
        )}
        {isValid && <p></p>}
      </StContainer>
    </div>
  );
}

export default PasswordProtectedPage;

const StContainer = styled.div`
  font-family: "NanumSquareRoundBold";
  font-size: 14pt;
`;
