import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import BackButton from "../components/BackButton";
import { BiHome } from "react-icons/bi";
import { BsCreditCard } from "react-icons/bs";
import { FaWonSign } from "react-icons/fa";
import OrderMenuTable from "../components/OrderMenuTable";
// import BackHomeButton from "../components/BackHomeButton";

import axios from "axios";

// import BackButton from "../components/BackButton";
// import BackHomeButton from "../components/BackHomeButton";

function OrderCheck() {
  const navigate = useNavigate();
  const param = useParams();
  const globaladdCart = useSelector((state) => state.menuList.menuList);
  let totalprice = 0;
  for (let i = 0; i < globaladdCart.length; i++) {
    totalprice = totalprice + globaladdCart[i].price;
  }
  console.log(globaladdCart);
  return (
    <div>
      <StHeader>
        <StTitle>✔️ Order Check ✔️</StTitle>
      </StHeader>

      <BackButton>이전으로</BackButton>

      <StBox>
        <StContainerBox>
          <StOrderContents>
            <div>주문을 확인해주세요!</div>
            <StMenuTable>
              <OrderMenuTable></OrderMenuTable>
            </StMenuTable>
            <div>
              {globaladdCart?.map((cartMenu) => {
                console.log(globaladdCart);
                return (
                  <>
                    <div>{cartMenu.imageUrl}</div>
                    <div>{cartMenu.menuName}</div>
                    <div>{cartMenu.price}</div>
                    <div>{cartMenu.amount}</div>
                  </>
                );
              })}
            </div>
          </StOrderContents>
        </StContainerBox>
      </StBox>

      <StBuyOrResetBox>
        <StCartTotalPrice>
          <div class="d-grid gap-2 col-10 mx-auto">
            <div class="btn btn-outline-light btn-lg">
              Total : {totalprice} <FaWonSign />
            </div>
          </div>
        </StCartTotalPrice>

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
                navigate(`/Menu/OrderCheck/OrderChoice/${param.takeOutId}`);
                axios.post("http://localhost:3001/todos", globaladdCart);
              }}
            >
              {" "}
              <BsCreditCard className="Buy" /> 주문하기
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

const StBox = styled.div`
  display: flex;
  text-align: center;
  height: 90vh;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  font-family: "NanumSquareRoundBold";
  font-size: 14pt;
`;

const StContainerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid #3d3d3d97;
  border-radius: 10px;
  margin-top: 5pt;
  padding: 3vw;
  width: 1000px;
  height: 500px;
  text-align: center;
`;

const StOrderContents = styled.div`
  justify-content: center;
  align-items: center;
  /* border: 3px solid #3d3d3d97; */
  padding: 15pt;
  width: 900px;
  height: 450px;
  overflow: scroll;
  text-align: center;
  font-family: "NanumSquareRoundBold";
  font-size: 12pt;
`;

const StMenuTable = styled.div`
  margin-top: 20pt;
`;

const StBuyOrResetBox = styled.div`
  display: flex;
  background-color: #232323d1;
  border-radius: 10px;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
`;

const StCartTotalPrice = styled.div`
  flex-basis: 50%;
  font-family: "NanumSquareRoundBold";
`;

const StBuyButton = styled.div`
  flex-basis: 25%;
  font-family: "NanumSquareRoundBold";
`;

const StResetButton = styled.div`
  flex-basis: 25%;
  font-family: "NanumSquareRoundBold";
`;
