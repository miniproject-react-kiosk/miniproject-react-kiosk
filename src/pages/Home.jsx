import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { BiRestaurant } from "react-icons/bi";

// 1번페이지

function Home() {
  // 포장 , 매장  id값
  const navigate = useNavigate();
  const place = [
    {
      takeOutId: "takeOut",
      takeOut: "포장",
      img: <HiOutlineShoppingBag />,
    },
    {
      takeOutId: "NoneTakeOut",
      takeOut: "매장",
      img: <BiRestaurant />,
    },
  ];
  return (
    <StAll>
      {/* <div>Logo</div> */}
      <StHeader>
        <StTitle>MY KIOSK!</StTitle>
        {/* <BackButton>이전으로</BackButton> */}
        {/* <img src="/img/logo.png"></img> */}
      </StHeader>
      <StBoxs>
        {place.map((e) => {
          return (
            <StBox
              onClick={() => {
                navigate(`/Menu/${e.takeOutId}`);
              }}
            >
              <StBoxImg className="img">{e.img}</StBoxImg>
              <StBoxText>{e.takeOut}</StBoxText>
              {/* 포장 or 매장 */}
            </StBox>
          );
        })}
      </StBoxs>
    </StAll>
  );
}

export default Home;

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

  /* line-height: 10vh; */
  display: flex;
  flex-direction: column;

  cursor: pointer;
  &:hover {
    background-color: #ffe600e2;
    transition: all 300ms ease;
    /* transform: rotate(-30deg) scale(1.2); */
  }

  &:hover .img {
    transition: all 300ms ease;
    transform: rotate(-30deg) scale(1.2);
  }
`;

const StBoxImg = styled.div`
  flex-basis: 65%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10vw;
  /* transform: rotate(-30deg) scale(1.2); */
`;

const StBoxText = styled.div`
  flex-basis: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
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
