import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import BackHomeButton from '../components/BackHomeButton';

function OrderCheck() {
  const navigate = useNavigate();
  const param = useParams();
  return (
    <div>
      <div>OrderCheck</div>
      <BackButton />

      <div>
        <BackHomeButton />
        <button
          onClick={(e) => {
            navigate(`/Menu/OrderChoice/OrderComplete/${param.takeOutId}`);
          }}
        >
          {' '}
          결제하기
        </button>
      </div>
    </div>
  );
}

export default OrderCheck;
