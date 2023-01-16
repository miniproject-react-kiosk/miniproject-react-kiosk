import React from "react";
import styled from "styled-components";
import BackHomeButton from "../components/BackHomeButton";

function OrderComplete() {
  return (
    <div>
      <StContainerBox>
        <StHeader>
          <StTitle>ENJOY YOUR MEAL!</StTitle>
          {/* <BackButton>이전으로</BackButton> */}
          {/* <img src="/img/logo.png"></img> */}
        </StHeader>

        <div>
          주문해주셔서 감사합니다. <br></br>
          고객님의 주문이 정상적으로 완료되었습니다. <br></br>
          고객님의 주문 번호는 ${123}번 입니다. <br></br>
          소요시간은 약 (number)분 입니다. <br></br>
          주문번호 호출 시 카운터로 방문해주세요.
        </div>
      </StContainerBox>
      <StBackHomeButton>
        <BackHomeButton />
      </StBackHomeButton>
    </div>
  );
}

export default OrderComplete;

const StContainerBox = styled.div`
  /* position: absolute; */
  display: flex;
  /* margin: auto; */
  margin-left: 200px;
  margin-right: 200px;
  margin-top: 200px;
  justify-content: center;
  border: 3px solid #3d3d3d97;
  border-radius: 10px;
  padding: 60px 60px;
  text-align: center;
  font-family: "NanumSquareRoundBold";
  font-size: 16pt;
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

const StBackHomeButton = styled.div`
  position: absolute;
  right: 0px;
  left: 0;
  bottom: 20%;
  margin: auto;
  justify-content: center;
`;
