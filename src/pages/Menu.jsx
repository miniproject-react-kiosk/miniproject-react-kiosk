import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components';
import { BsCartCheck } from 'react-icons/bs';
import { BiUndo } from 'react-icons/bi';

// import BackButton from "../components/BackButton";
import MenuList from '../components/MenuList';

//2번페이지

function Menu() {
  const navigate = useNavigate();
  const param = useParams();

  return (
    <div>
      <StHeader>
        <StTitle>MENU</StTitle>
        {/* <BackButton>이전으로</BackButton> */}
        {/* <img src="/img/logo.png"></img> */}
      </StHeader>

      {/* 메뉴추가 */}
      <StMenuContainer>
        <div class='row row-cols-1 row-cols-md-4 g-4'>
          <MenuList />
          <MenuList />
          <MenuList />
          <MenuList />
          <MenuList />
          <MenuList />
          <MenuList />
          <MenuList />
          <MenuList />
          <MenuList />
          <MenuList />
          <MenuList />
          <MenuList />
        </div>
      </StMenuContainer>
      <StCartBox>
        <div>장바구니 자리</div>

        <StBuyOrResetBox>
          <div>결제창 자리</div>

          {/* 취소하기 버튼 */}
          <StResetButton>
            <div class='d-grid gap-2 col-10 mx-auto'>
              <button
                type='button'
                class='btn btn-outline-light btn-lg'
                onClick={() => {
                  navigate(-1);
                }}
              >
                {' '}
                <BiUndo className='Undo' /> 취소하기
              </button>
            </div>
          </StResetButton>

          {/* 결제하기 버튼 */}
          <StBuyButton>
            <div class='d-grid gap-2 col-10 mx-auto'>
              <button
                type='button'
                class='btn btn-outline-light btn-lg'
                onClick={() => {
                  navigate(`/Menu/OrderChoice/${param.takeOutId}`);
                }}
              >
                {' '}
                <BsCartCheck className='Order' /> 주문하기
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
  font-family: 'MorningBreezeBold';
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
  background-color: #3d3d3d97;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 300px;
`;

const StBuyOrResetBox = styled.div`
  background-color: #3d3d3d61;
  border-radius: 10px;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 100px;
`;

const StBuyButton = styled.div`
  position: absolute;
  right: 0%;
  width: 25vw;
  height: 20px;
  justify-content: space-between;
  font-family: 'NanumSquareRoundBold';
`;

const StResetButton = styled.div`
  position: absolute;
  right: 23%;
  width: 25vw;
  height: 20px;
  justify-content: space-between;
  font-family: 'NanumSquareRoundBold';
`;
