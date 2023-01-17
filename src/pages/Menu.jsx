//2번페이지

import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import styled from "styled-components";
import { BsCartCheck } from "react-icons/bs";
import { BiUndo } from "react-icons/bi";
// import AddCart from "../components/AddCart";

// import BackButton from "../components/BackButton";
import MenuList from "../components/MenuList";
import CartList from "../components/CartList";
import { useSelector } from "react-redux";

function Menu() {
  const navigate = useNavigate();
  const param = useParams();

  const globaladdCart = useSelector((state) => state.menuList.menuList);
  let totalprice = 0;
  for (let i = 0; i < globaladdCart.length; i++) {
    totalprice = totalprice + globaladdCart[i].price * globaladdCart[i].amount;
  }

  return (
    <div>
      <StHeader>
        <StTitle>MENU</StTitle>
        {/* <BackButton>이전으로</BackButton> */}
        {/* <img src="/img/logo.png"></img> */}
      </StHeader>

      {/* 메뉴추가 */}
      <StMenuContainer>
        <div>
          <MenuList />
        </div>
      </StMenuContainer>

      {/* 장바구니 구역.. */}
      <StCartBox>
        <div>
          <CartList />
        </div>

        <StBuyOrResetBox>
          <StCartTotalPrice>
            <div class="d-grid gap-2 col-10 mx-auto">
              <div class="btn btn-outline-light btn-lg">
                Total : {totalprice}
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
                  navigate(-1);
                }}
              >
                {" "}
                <BiUndo className="Undo" /> 취소하기
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
                  navigate(`/Menu/OrderCheck/${param.takeOutId}`);
                }}
              >
                {" "}
                <BsCartCheck className="Order" /> 주문하기
              </button>
            </div>
          </StBuyButton>
        </StBuyOrResetBox>
      </StCartBox>
    </div>
  );
}

export default Menu;

const StHeader = styled.div`
  z-index: 2;
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

const StMenuContainer = styled.p`
  z-index: 0;
  padding: 35px;
  margin-top: 60px;
`;

const StCartBox = styled.div`
  border-radius: 10px;
  background-color: #23232399;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 300px;
  overflow-y: auto;
  //   //뭔진모르겠는데 스크롤 숨기는 기능임...
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: transparent;
  }
`;

const StBuyOrResetBox = styled.div`
  /* background-color: #3d3d3d61; */
  background-color: #0000005f;

  border-radius: 10px;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
`;

const StCartTotalPrice = styled.div`
  flex-basis: 50%;
  /* position: absolute;
  right: 0%;
  width: 25vw;
  height: 20px;
  justify-content: space-between;
  font-family: 'NanumSquareRoundBold'; */
`;

const StBuyButton = styled.div`
  flex-basis: 25%;
  /* position: absolute;
  right: 0%;
  width: 25vw;
  height: 20px;
  justify-content: space-between;
  font-family: 'NanumSquareRoundBold'; */
`;

const StResetButton = styled.div`
  flex-basis: 25%;

  /* position: absolute;
  right: 23%;
  width: 25vw;
  height: 20px;
  justify-content: space-between;
  font-family: 'NanumSquareRoundBold'; */
`;
