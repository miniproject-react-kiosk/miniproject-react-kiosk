import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Home</h1>
      <div
        onClick={() => {
          navigate(`/Menu`);
        }}
      >
        포장
      </div>
      <div
        onClick={() => {
          navigate('/Menu');
        }}
      >
        매장
      </div>
    </div>
  );
}

export default Home;
