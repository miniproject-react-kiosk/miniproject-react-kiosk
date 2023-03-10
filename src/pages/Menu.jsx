//2번페이지

import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import styled from "styled-components";
import { BsCartCheck } from "react-icons/bs";
import { BiUndo } from "react-icons/bi";
import { FaWonSign } from "react-icons/fa";
// import AddCart from "../components/AddCart";

import MenuList from "../components/MenuList";
import CartList from "../components/CartList";
import { useSelector } from "react-redux";

function Menu() {
  const navigate = useNavigate();
  const param = useParams();

  // 총가격...  각각의 amount*price
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
      </StCartBox>
      <StBuyOrResetBox>
        <StCartTotalPrice>
          <div class="d-grid gap-2 col-10 mx-auto">
            <div class="btn btn-outline-light btn-lg">
              Total : <FaWonSign /> {totalprice}
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

const StMenuContainer = styled.div`
  display: flex;
  z-index: 0;
  padding: 35px;
  margin-top: 60px;
`;

const StCartBox = styled.div`
  border-radius: 5px;
  background-color: #232323af;
  position: fixed;
  margin-bottom: 100px;
  padding: 10pt;
  bottom: 0;
  width: 100%;
  height: 200px;
  overflow-y: auto;
  //   // 뭔진 모르겠는데 스크롤 숨기는 기능임...
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: transparent;
  }
`;

const StBuyOrResetBox = styled.div`
  background-color: #0a0a0ae8;
  border-radius: 10px;
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 100px;
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
