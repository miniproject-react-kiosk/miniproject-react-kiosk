import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
//3번페이지

function OrderChoice() {
  const navigate = useNavigate();
  const param = useParams();

  console.log(param);

  return (
    <div>
      <div>OrderChoice</div>
      <BackButton>이전으로</BackButton>
      <div
        onClick={() => {
          navigate(`/Menu/OrderChoice/MembershipLogin/${param.takeOutId}`);
        }}
      >
        멤버쉽으로 주문하기{' '}
      </div>
      <div
        onClick={() => {
          navigate(`/Menu/OrderChoice/OrderCheck/${param.takeOutId}`);
        }}
      >
        {' '}
        비회원으로 주문하기{' '}
      </div>
    </div>
  );
}

export default OrderChoice;
