import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BsBackspace } from 'react-icons/bs';
import styled from 'styled-components';

const StAll = styled.div`
  /* background-color: yellow; */
  text-align: center;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px 0px 20px;
  margin-top: 20px;
  /* height: 30px; */
`;
const StBox = styled.div`
  width: 40px;
  height: 30px;
  line-height: 30px;
  /* border: solid gray 1px; */
  border-radius: 15px;
`;

const StBackButton = styled.div`
  border-radius: 15px;

  cursor: pointer;
  &:hover {
    background-color: #f3dc0c;
    transition: all 300ms ease;
  }
  /* &:hover .BackButton {
    transition: all 300ms ease;
    transform: rotate(5deg) scale(1.1);
  } */
`;

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <StAll>
      <div>Logo</div>
      <StBox>
        <StBackButton
          onClick={() => {
            navigate(-1);
          }}
        >
          <BsBackspace className='BackButton' />
        </StBackButton>
      </StBox>
    </StAll>
  );
}
