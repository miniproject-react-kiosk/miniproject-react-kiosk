import React from 'react';
import styled from 'styled-components';

import { RiDeleteBin5Line } from 'react-icons/ri';

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

export default function CartList() {
  return (
    <div>
      <StCartList>
        <StCartListMenu>
          <h2>메뉴</h2> <div>가격</div>
        </StCartListMenu>

        <StCartListControl>
          <StCartListControlBox> -</StCartListControlBox>
          <StCartListControlBox2> 1</StCartListControlBox2>
          <StCartListControlBox> +</StCartListControlBox>
        </StCartListControl>

        <StCartListDelete>
          <RiDeleteBin5Line />
        </StCartListDelete>
      </StCartList>
    </div>
  );
}
