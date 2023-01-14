import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BsBackspace } from 'react-icons/bs';
import styled from 'styled-components';

export default function BackButton() {
  const navigate = useNavigate();

  const StBackButton = styled.div`
    border: solid 2px white;
    border-radius: 5vw;
    font-size: 2vw;
    width: 100px;
    height: 100px;

    text-align: center;

    cursor: pointer;
    &:hover {
      background-color: #f3dc0c;
      transition: all 300ms ease;
    }
  `;

  return (
    <StBackButton
      onClick={() => {
        navigate(-1);
      }}
    >
      <BsBackspace />
    </StBackButton>
  );
}
