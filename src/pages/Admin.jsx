import React, { useEffect, useState } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import BackHomeButton from "../components/BackHomeButton";
import styled from "styled-components";
import PasswordProtectedPage from "../components/PasswordProtectedPage";

// import axios from "axios";

function Admin() {
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

  return (
    <div>
      <StHeader>
        <StTitle>⚙︎ Administrator ⚙︎</StTitle>
      </StHeader>

      <StBox>
        <StContainerBox>
          <div>
            <PasswordProtectedPage />
          </div>
          <div>당일 매출 조회</div>
          <StHighlight>{dailySales}</StHighlight>
        </StContainerBox>
        <StBackHomeButton
          onClick={() => {
            window.location.reload();
          }}
        >
          <BackHomeButton />
        </StBackHomeButton>
      </StBox>
    </div>
  );
}

export default Admin;

const StContainerBox = styled.div`
  justify-content: center;
  border: 3px solid #3d3d3d97;
  border-radius: 10px;
  padding: 5vw;
  margin-top: 80px;
  text-align: center;
  font-family: "NanumSquareRoundBold";
  font-size: 14pt;
  /* flex-basis: 50%; */
`;

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

const StBox = styled.div`
  height: 90vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const StBackHomeButton = styled.div`
  margin-top: 2%;
`;

const StHighlight = styled.div`
  color: #1c1c1ca9;
  font-size: 32pt;
  font-weight: bolder;
`;
