import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { BiRestaurant } from 'react-icons/bi';

const StAll = styled.div`
  text-align: center;
  max-width: 1200px;
  /* position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0; */
  /* display: flex;
  align-items: center;
  justify-content: center; */
  /* display: -webkit-flex;
  -webkit-align-item: center;
  -webkit-justify-content: center; */
`;

const StBoxs = styled.div`
  position: absolute;
  top: 0;
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

  /* line-height: 10vh; */
  display: flex;
  flex-direction: column;

  cursor: pointer;
  &:hover {
    background-color: #f3dc0c;
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
  font-size: 8vw;
  /* transform: rotate(-30deg) scale(1.2); */
`;
const StBoxText = styled.div`
  flex-basis: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4vw;
`;

//1번페이지

function Home() {
  // 포장 , 매장  id값
  const navigate = useNavigate();
  const place = [
    {
      takeOutId: 'takeOut',
      takeOut: '포장',
      img: <HiOutlineShoppingBag />,
    },
    {
      takeOutId: 'NoneTakeOut',
      takeOut: '매장',
      img: <BiRestaurant />,
    },
  ];
  return (
    <StAll>
      <div>Logo</div>
      <StBoxs>
        {place.map((e) => {
          return (
            <StBox
              onClick={() => {
                navigate(`/Menu/${e.takeOutId}`);
              }}
            >
              <StBoxImg className='img'>{e.img}</StBoxImg>
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
