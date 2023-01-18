import React, { useState } from "react";
import styled from "styled-components";
import { BsTrash } from "react-icons/bs";
import { BsPlusLg } from "react-icons/bs";
import { HiMinus } from "react-icons/hi";

import { useDispatch, useSelector } from "react-redux";
import { deleteCart } from "../redux/modules/menuListSlice";
import { FaWonSign } from "react-icons/fa";

export default function CounterButton({ item }) {
  const [amount, setAmount] = useState(1);
  // console.log(item);
  const dispatch = useDispatch();
  //삭제 기능
  const handledDelete = (id) => {
    dispatch(deleteCart(id));
  };

  return (
    <>
      <StCartList>
        <StCartListMenu>
          <div>{item.menuName}</div>{" "}
          <div>
            {item.price * amount} <FaWonSign />
          </div>
        </StCartListMenu>
        <StCartListControl>
          <StCartListControlBox
            onClick={() => {
              if (amount > 1) {
                setAmount(amount - 1);
              } else {
                handledDelete(item.id);
              }
            }}
          >
            <HiMinus />
          </StCartListControlBox>
          <StCartListControlBox2>{amount}</StCartListControlBox2>
          <StCartListControlBox onClick={() => setAmount(amount + 1)}>
            <BsPlusLg />
          </StCartListControlBox>
        </StCartListControl>
        <StCartListDelete
          onClick={() => {
            handledDelete(item.id);
          }}
        >
          <BsTrash />
        </StCartListDelete>
      </StCartList>
    </>
  );
}

const StCartList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 10pt;
  align-items: center;
  padding: 20px;
  height: 40px;
`;

const StCartListMenu = styled.div`
  flex-basis: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  height: 40px;
  background-color: #ffffffe0;
  padding: 20px 60px 20px;
  font-family: "NanumSquareRoundBold";
  font-size: 15pt;
`;

const StCartListControl = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-basis: 30%;
  font-weight: bold;
  /* height: 40px; */
  /* margin: 0 20px 0 20px; */
`;

const StCartListControlBox2 = styled.div`
  border-radius: 10px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: 22%;
  background-color: #ffffffe0;
`;

const StCartListControlBox = styled.div`
  border-radius: 10px;
  border-style: solid;
  border-color: white;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: 22%;
  background-color: #232323c9;
  color: white;
  cursor: pointer;
  &:hover {
    border: solid 2px #ffe600e2;
    background-color: #ffe600e2;
    transition: all 300ms ease;
    /* transform: rotate(-30deg) scale(1.2); */
  }
`;

const StCartListDelete = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: 10%;
  border-radius: 10px;
  height: 40px;
  background-color: white;
  font-size: 25px;
  cursor: pointer;
  &:hover {
    border: solid 2px #ffe600e2;
    background-color: #ffe600e2;
    transition: all 300ms ease;
    /* transform: rotate(-30deg) scale(1.2); */
  }
`;
