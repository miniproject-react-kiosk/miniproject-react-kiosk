import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import swal from "sweetalert";

function PasswordProtectedPage() {
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // 서버에서 비밀번호를 검증

    if (password === process.env.REACT_APP_ADMIN_PW) {
      setIsValid(true);
      swal("관리자 로그인 성공!", "관리자 페이지로 이동합니다. ", "info");
    } else {
      swal("관리자 로그인 실패!", "비밀번호를 다시 입력해주세요.", "error");
    }
  };

  const [dailySales, setDailySales] = useState();

  useEffect(() => {
    axios
      .get(
        "http://13.209.12.254/order/dailySales",
        {},
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        setDailySales(response.data);
      });
  }, []);

  console.log("******", dailySales);

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
        {isValid && (
          <p>당일매출, 총매출 등 관리자용 API가 들어올 자리! {dailySales}</p>
        )}
      </StContainer>
    </div>
  );
}

export default PasswordProtectedPage;

const StContainer = styled.div`
  font-family: "NanumSquareRoundBold";
  font-size: 14pt;
`;
