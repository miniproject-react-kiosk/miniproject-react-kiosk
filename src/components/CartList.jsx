import React, { useState } from 'react';
import styled from 'styled-components';
import { RiDeleteBin5Line } from 'react-icons/ri';

export default function CartList() {
  const [num, setNum] = useState(1);

  //FIXME: useSelector 하면 없앨부분
  const [menus, setMenus] = useState({
    menu: '맥날1',
    price: 1000,
  });
  return (
    <div>
      <StCartList>
        <StCartListMenu>
          <h2>{menus.menu}</h2> <div>{menus.price * num}</div>
        </StCartListMenu>

        <StCartListControl>
          <StCartListControlBox
            onClick={() => {
              if (num === 0) {
                //FIXME:  0 밑으로 갈때는 삭제하는 함수를 반환하게끔.. 만들기!
                setNum(num);
              } else {
                setNum(num - 1);
              }
            }}
          >
            -
          </StCartListControlBox>
          <StCartListControlBox2> {num}</StCartListControlBox2>
          <StCartListControlBox
            onClick={() => {
              setNum(num + 1);
            }}
          >
            +
          </StCartListControlBox>
        </StCartListControl>

        <StCartListDelete>
          <RiDeleteBin5Line />
        </StCartListDelete>
      </StCartList>
    </div>
  );
}

// css 구역
const StCartList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  align-items: center;
  padding: 10px;
  height: 80px;
`;

const StCartListMenu = styled.div`
  flex-basis: 60%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border: solid 2px #c0c0c0;
  border-radius: 10px;
  height: 60px;
  background-color: #c0c0c0;

  /* display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: skyblue;
  align-items: center; */
`;
const StCartListControl = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  /* border: solid 2px gray; */

  align-items: center;
  flex-basis: 30%;
  height: 60px;
  /* margin: 0 20px 0 20px; */
`;

const StCartListControlBox = styled.div`
  margin: 5px;
  border: solid 2px white;
  border-radius: 10px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: 22%;
  background-color: white;
  cursor: pointer;
  &:hover {
    border: solid 2px #ffe600e2;

    background-color: #ffe600e2;
    transition: all 300ms ease;
    /* transform: rotate(-30deg) scale(1.2); */
  }
`;

const StCartListControlBox2 = styled.div`
  margin: 5px;
  border: solid 2px #c0c0c0;
  border-radius: 10px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: 22%;

  background-color: #c0c0c0;
`;

const StCartListDelete = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: 10%;
  border: solid 2px white;
  border-radius: 10px;
  height: 60px;
  background-color: white;
  font-size: 40px;
  cursor: pointer;
  &:hover {
    border: solid 2px #ffe600e2;

    background-color: #ffe600e2;
    transition: all 300ms ease;
    /* transform: rotate(-30deg) scale(1.2); */
  }
`;
