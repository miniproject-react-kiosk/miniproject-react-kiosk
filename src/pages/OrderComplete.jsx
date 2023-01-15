import React from 'react';

import styled from 'styled-components';
import { useNavigate } from 'react-router';
import { AiOutlineHome } from 'react-icons/ai';
const StTop = styled.div`
  /* background-color: yellow; */
  text-align: center;
  /* max-width: 1200px; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px 0px 20px;
  margin-top: 20px;
  /* height: 30px; */
`;
const StTopButton = styled.div`
  width: 40px;
  height: 30px;
  line-height: 30px;
  /* border: solid gray 1px; */
  border-radius: 15px;
`;

const StHomeButton = styled.div`
  border-radius: 15px;

  cursor: pointer;
  &:hover {
    background-color: #f3dc0c;
    transition: all 300ms ease;
  }
`;

const StAll = styled.div`
  height: 100vh;
  text-align: center;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StBox = styled.div`
  width: 80vw;
  height: 45vh;
  font-size: 2vw;
  border: 2px solid gray;
  border-radius: 3vw;
  height: 40vh;
  text-align: center;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function OrderComplete() {
  const navigate = useNavigate();
  return (
    <div>
      <StTop>
        <div>Logo</div>
        <StTopButton>
          <StHomeButton
            onClick={() => {
              navigate('/');
            }}
          >
            <AiOutlineHome />
          </StHomeButton>
        </StTopButton>
      </StTop>

      <StAll>
        <StBox>
          <div>
            <div>주문해주셔서 감사합니다.</div>
            <div>고객님의 주문이 정상적으로 완료되었습니다.</div>
          </div>
          <br></br>
          <div>
            <div>주문번호는 123 입니다</div>
            <div>소요시간은 10분이 걸립니다.</div>
            <div>안내번호가 뜰경우 카운터로 오시면 됩니다.</div>
          </div>
        </StBox>
      </StAll>
    </div>
  );
}

export default OrderComplete;
