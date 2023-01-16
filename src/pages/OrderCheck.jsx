import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
// import BackHomeButton from "../components/BackHomeButton";
import { BiHome } from "react-icons/bi";
import { BsCreditCard } from "react-icons/bs";
import styled from "styled-components";

function OrderCheck() {
  const navigate = useNavigate();
  const param = useParams();
  return (
    <div>
      <StHeader>
        <StTitle>✔️ Order Check ✔️</StTitle>
      </StHeader>
      <BackButton />

      {/* <div>
        <BackHomeButton />
      </div> */}

      <StBuyOrResetBox>
        {/* 취소하기 버튼 */}
        <StResetButton>
          <div class="d-grid gap-2 col-10 mx-auto">
            <button
              type="button"
              class="btn btn-outline-light btn-lg"
              onClick={() => {
                navigate("/");
              }}
            >
              {" "}
              <BiHome className="BackHomeButton" /> 홈으로 돌아가기
            </button>
          </div>
        </StResetButton>

        {/* 결제하기 버튼 */}
        <StBuyButton>
          <div class="d-grid gap-2 col-10 mx-auto">
            <button
              type="button"
              class="btn btn-outline-light btn-lg"
              onClick={() => {
                navigate(`/Menu/OrderChoice/OrderComplete/${param.takeOutId}`);
              }}
            >
              {" "}
              <BsCreditCard className="Buy" /> 결제하기
            </button>
          </div>
        </StBuyButton>
      </StBuyOrResetBox>
    </div>
  );
}

export default OrderCheck;

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

const StBuyOrResetBox = styled.div`
  background-color: #3c3c3caf;
  border-radius: 10px;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 150px;
`;

const StBuyButton = styled.div`
  position: absolute;
  margin-top: 50px;
  right: 0%;
  width: 400px;
  height: 20px;
  justify-content: space-between;
  font-family: "NanumSquareRoundBold";
  /* align-items: baseline; */
`;

const StResetButton = styled.div`
  position: absolute;
  margin-top: 50px;
  right: 30%;
  width: 400px;
  height: 20px;
  justify-content: space-between;
  font-family: "NanumSquareRoundBold";
`;
