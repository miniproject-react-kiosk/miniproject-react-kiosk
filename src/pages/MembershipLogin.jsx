import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import styled from 'styled-components';

const StBoxs = styled.div`
  /* position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  bottom: 0; */
  height: 90vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
`;

const StBox = styled.div`
  background-color: #fde6e6;
  border: solid 2px white;
  border-radius: 5vw;
  width: 60vw;
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  /* line-height: 10vh; */

  cursor: pointer;
  &:hover {
    background-color: #f3dc0c;
    transition: all 300ms ease;
  }
  &:hover .text {
    transition: all 400ms ease;
    transform: rotate(-10deg) scale(1.1);
  }
`;

const StBoxText = styled.div`
  font-size: 3vw;
`;

function MembershipLogin() {
  const navigate = useNavigate();
  const param = useParams();
  return (
    <div>
      <BackButton>이전으로</BackButton>
      <StBoxs>
        <StBox>
          <div>
            <input />
          </div>

          <StBoxText
            className='text'
            onClick={() => {
              navigate(`/Menu/OrderChoice/OrderComplete/${param.takeOutId}`);
            }}
          >
            멤버쉽 로그인하기
          </StBoxText>
        </StBox>
        <StBox
          onClick={() => {
            navigate(`/Menu/OrderChoice/MembershipSignUp/${param.takeOutId}`);
          }}
        >
          <StBoxText className='text'>멤버쉽 회원가입하기</StBoxText>
        </StBox>
      </StBoxs>
    </div>
  );
}
export default MembershipLogin;
