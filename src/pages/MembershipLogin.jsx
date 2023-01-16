import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';

function MembershipLogin() {
  const navigate = useNavigate();
  const param = useParams();
  return (
    <div>
      MembershipLogin
      <BackButton>이전으로</BackButton>
      <div>
        <button
          onClick={() => {
            navigate(`/Menu/OrderChoice/OrderComplete/${param.takeOutId}`);
          }}
        >
          멤버쉽 로그인하기(전화번호입력)
        </button>
      </div>
      <button
        onClick={() => {
          navigate(`/Menu/OrderChoice/MembershipSignUp/${param.takeOutId}`);
        }}
      >
        멤버쉽 회원가입하기(전화번호중복체크기능^^)
      </button>
    </div>
  );
}
export default MembershipLogin;
