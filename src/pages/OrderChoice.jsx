import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import styled from "styled-components";

const StAll = styled.div`
  text-align: center;
`;

const StBoxs = styled.div`
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const StBox = styled.div`
  background-color: #cdcdcd92;
  border: solid 2px white;
  border-radius: 5vw;
  width: 30vw;
  height: 45vh;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  &:hover {
    background-color: #ffe600e2;
    transition: all 300ms ease;
  }

  &:hover .text {
    transition: all 400ms ease;
    transform: rotate(-10deg) scale(1.1);
  }
`;

const StBoxText = styled.div`
  font-size: 3vw;
  font-family: "NanumSquareRoundBold";
`;

const StHeader = styled.div`
  background-color: #ffe600e2;
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
`;

const StTitle = styled.h1`
  text-align: center;
  font-family: "MorningBreezeBold";
  margin-top: 15px;
  color: #2a2a2a;
`;

// 3번페이지

function OrderChoice() {
  const navigate = useNavigate();
  const param = useParams();

  return (
    <div>
      <StHeader>
        <StTitle>ORDER</StTitle>
      </StHeader>
      <BackButton className="backButton" />
      <StAll>
        <StBoxs>
          <StBox
            onClick={() => {
              navigate(`/Menu/OrderChoice/MembershipLogin/${param.takeOutId}`);
            }}
          >
            <StBoxText className="text">
              멤버십으로
              <br />
              주문하기
            </StBoxText>
          </StBox>
          <StBox
            onClick={() => {
              navigate(`/Menu/OrderChoice/OrderComplete/${param.takeOutId}`);
            }}
          >
            <StBoxText className="text">
              비회원으로
              <br />
              주문하기
            </StBoxText>
          </StBox>
        </StBoxs>
      </StAll>
    </div>
  );
}

export default OrderChoice;
