import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function BackHomeButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        navigate('/');
      }}
    >
      돌아가기
    </button>
  );
}
