import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import BackHomeButton from '../components/BackHomeButton';
import styled from 'styled-components';

const StAll = styled.div`
  text-align: center;
  max-width: 1200px;
  z-index: 2;
`;

const StBoxs = styled.div`
  height: 90vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
`;

const StBox1 = styled.div`
  flex-basis: 20%;
  background-color: #fde6e6;
  border: solid 2px white;
  border-radius: 5vw;
  width: 60vw;
  height: 45vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StBox2 = styled.div`
  flex-basis: 50%;
  background-color: #fde6e6;
  border: solid 2px white;
  border-radius: 5vw;
  width: 60vw;
  height: 45vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* overflow: scroll;
  -ms-overflow-style: none;  
  scrollbar-width: none;  */
  overflow-y: auto;
  //뭔진모르겠는데 스크롤 숨기는 기능임...
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: transparent;
  }
  /* align-items: center; */
`;
const StBox3 = styled.div`
  flex-basis: 30%;

  background-color: #fde6e6;
  border: solid 2px white;
  border-radius: 5vw;
  width: 60vw;
  height: 45vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

function OrderCheck() {
  const navigate = useNavigate();
  const param = useParams();
  return (
    <>
      <BackButton />
      <StAll>
        <StBoxs>
          <StBox1>주문을 확인 해주세요.</StBox1>

          <div>your order</div>
          <StBox2 className='box2'>
            <div>주문을 확인 해주세요.</div>
            <div>주문을 확인 해주세요.</div>
            <div>주문을 확인 해주세요.</div>
            <div>주문을 확인 해주세요.</div>
            <div>주문을 확인 해주세요.</div>
            <div>주문을 확인 해주세요.</div>
            <div>주문을 확인 해주세요.</div>
          </StBox2>

          <StBox3>
            <div> total price</div>

            <div>
              <BackHomeButton />
              <button
                onClick={(e) => {
                  navigate(
                    `/Menu/OrderChoice/OrderComplete/${param.takeOutId}`
                  );
                }}
              >
                {' '}
                결제하기
              </button>
            </div>
          </StBox3>
        </StBoxs>
      </StAll>
    </>
  );
}

export default OrderCheck;
