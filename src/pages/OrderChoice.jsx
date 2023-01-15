import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import styled from "styled-components";

const StAll = styled.div`
  text-align: center;
  max-width: 1200px;
  z-index: 2;
`;

const StBoxs = styled.div`
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const StBox = styled.div`
  background-color: #fde6e6;
  border: solid 2px white;
  border-radius: 5vw;
  width: 30vw;
  height: 45vh;
  display: flex;
  justify-content: center;
  align-items: center;

  /* line-height: 10vh; */

  cursor: pointer;
  &:hover {
    background-color: #f3dc0c;
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

//3번페이지

function OrderChoice() {
  const navigate = useNavigate();
  const param = useParams();

  console.log(param);

  return (
    <div>
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
              navigate(`/Menu/OrderChoice/OrderCheck/${param.takeOutId}`);
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
