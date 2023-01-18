import React, { useState } from 'react';
import styled from 'styled-components';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { deleteCart } from '../redux/modules/menuListSlice';
import { FaWonSign } from 'react-icons/fa';

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
          <h2>{item.menuName}</h2>{' '}
          <h3>
            {item.price} <FaWonSign />
          </h3>
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
            ---
          </StCartListControlBox>
          <StCartListControlBox2>{amount}</StCartListControlBox2>
          <StCartListControlBox onClick={() => setAmount(amount + 1)}>
            +++
          </StCartListControlBox>
        </StCartListControl>
        <StCartListDelete
          onClick={() => {
            handledDelete(item.id);
          }}
        >
          <RiDeleteBin5Line />
        </StCartListDelete>
      </StCartList>
    </>
  );
}

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
  justify-content: space-between;
  border: solid 2px #c0c0c0;
  border-radius: 10px;
  height: 60px;
  background-color: #c0c0c0;
  padding: 20px;
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
