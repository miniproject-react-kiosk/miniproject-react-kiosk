import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';

function Menu() {
  const navigate = useNavigate();
  const param = useParams();
  //FIXME: console.log 나중에 지울것..
  console.log(param);
  return (
    <div>
      <div>Menu</div>
      <BackButton>이전으로</BackButton>

      <button
        onClick={() => {
          navigate(`/Menu/OrderChoice/${param.takeOutId}`);
        }}
      >
        {' '}
        주문하기
      </button>
    </div>
  );
}

export default Menu;
