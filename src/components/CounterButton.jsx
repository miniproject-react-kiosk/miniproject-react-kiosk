import React, { useState } from 'react';
import styled from 'styled-components';

export default function CounterButton({ item }) {
  const [amount, setAmount] = useState(item);

  return (
    <StCartListControl>
      <StCartListControlBox onClick={() => setAmount(amount - 1)}>
        ---
      </StCartListControlBox>
      <StCartListControlBox2>{amount}</StCartListControlBox2>
      <StCartListControlBox onClick={() => setAmount(amount + 1)}>
        +++
      </StCartListControlBox>
    </StCartListControl>
  );
}

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
