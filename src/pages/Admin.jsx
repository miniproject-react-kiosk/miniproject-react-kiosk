import React from "react";
// import axios from "axios";
import BackHomeButton from "../components/BackHomeButton";
import DailySales from "../components/DailySales";
import styled from "styled-components";
// import { useNavigate } from "react-router-dom";

function Admin() {
  return (
    <div>
      <StHeader>
        <StTitle>⚙︎ Administrator ⚙︎</StTitle>
      </StHeader>

      <StBox>
        <div>
          <DailySales></DailySales>
        </div>

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
