import React from 'react';
import BackHomeButton from '../components/BackHomeButton';

function OrderComplete() {
  return (
    <div>
      <div>주문이 성공적으로 진행되었습니다.</div>
      <div>주문번호는 123 입니다</div>
      <div>소요시간은 10분이 걸립니다.</div>
      <div>안내번호가 뜰경우 카운터로 오시면 됩니다.</div>
      <div>
        <BackHomeButton />
      </div>
    </div>
  );
}

export default OrderComplete;
