import styled from 'styled-components';
import BackHomeButton from '../components/BackHomeButton';
import axios from 'axios';
import { useEffect, useState } from 'react';

function OrderComplete() {
  const [menuLists, setMenuLists] = useState(null);

  const fetchTodos = async () => {
    // const { data } = await axios.get('http://localhost:3001/MenuList');
    const { data } = await axios.get('13.209.12.254/order/bill');
    console.log(menuLists);
    // console.log(data);s
    setMenuLists(data);
  };

  useEffect(() => {
    setMenuLists();
    fetchTodos();
  }, []);

  return (
    <div>
      <StHeader>
        <StTitle>🍔 ENJOY YOUR MEAL! 🍟</StTitle>
      </StHeader>

      <StBox>
        <StContainerBox>
          주문해주셔서 감사합니다. <br></br>
          고객님의 주문이 정상적으로 완료되었습니다. <br></br>
          고객님의 주문 번호는 {menuLists}번 입니다. <br></br>
          소요시간은 약 15분입니다.<br></br>
          주문번호 호출 시 카운터로 방문해주세요.
        </StContainerBox>
        <StBackHomeButton>
          <BackHomeButton />
        </StBackHomeButton>
      </StBox>
    </div>
  );
}

export default OrderComplete;

const StContainerBox = styled.div`
  justify-content: center;
  border: 3px solid #3d3d3d97;
  border-radius: 10px;
  padding: 5vw;
  text-align: center;
  font-family: 'NanumSquareRoundBold';
  font-size: 14pt;
  /* flex-basis: 50%; */
`;

const StHeader = styled.div`
  background-color: #ffe600e2;
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  margin-bottom: 20px;
`;

const StTitle = styled.h1`
  text-align: center;
  font-family: 'MorningBreezeBold';
  margin-top: 15px;
  color: #2a2a2a;
`;

const StBox = styled.div`
  height: 90vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const StBackHomeButton = styled.div`
  margin-top: 2%;
`;
