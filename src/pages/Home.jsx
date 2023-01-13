import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  // 포장 , 매장  id값
  const navigate = useNavigate();
  const place = [
    {
      takeOutId: 0,
      takeOut: '포장',
    },
    {
      takeOutId: 1,
      takeOut: '매장',
    },
  ];
  return (
    <div>
      <h1>Home</h1>
      {place.map((e) => {
        return (
          <div
            onClick={() => {
              navigate(`/Menu/${e.takeOutId}`);
            }}
          >
            {e.takeOut}
            {/* 포장 or 매장 */}
          </div>
        );
      })}
    </div>
  );
}

export default Home;
