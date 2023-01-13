import React from 'react';
import { useNavigate } from 'react-router-dom';
import BackButton from '../components/BackButton';

function Menu() {
  const navigate = useNavigate();
  return (
    <div>
      <div>Menu</div>
      <BackButton>이전으로</BackButton>
      <button
        onClick={() => {
          navigate('Menu/:takeOutId/OrderCheck');
        }}
      >
        {' '}
        주문하기
      </button>
    </div>
  );
}

export default Menu;
