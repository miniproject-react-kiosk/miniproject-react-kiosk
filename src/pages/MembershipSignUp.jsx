import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import BackButton from "../components/BackButton";
import PhoneNumberForm from "../components/PhoneNumberForm";

function MembershipLogin() {
  const navigate = useNavigate();
  const param = useParams();

  const handleAction = () => {
    alert("가입 가능한 전화번호입니다.");
    // alert("이미 멤버십 회원입니다.");
  };

  return (
    <div>
      <StHeader>
        <BackButton>이전으로</BackButton>
        <StTitle>JOIN US!</StTitle>
      </StHeader>
      <StContentsBox>
        <div>
          <StPhoneNumberInputBox>
            <PhoneNumberForm
              handleAction={handleAction}
              actionTitle=" 중복 체크하기 "
            ></PhoneNumberForm>
          </StPhoneNumberInputBox>
        </div>
      </StContentsBox>

      {/* 멤버십 가입하기 */}
      <StSignButton>
        <div class="d-grid gap-2 col-10 mx-auto">
          <button
            type="button"
            class="btn btn-outline-secondary btn-lg"
            onClick={() => {
              alert("회원가입이 완료되었습니다.");
              navigate(`/Menu/OrderChoice/OrderComplete/${param.takeOutId}`);
            }}
          >
            {" "}
            멤버십 가입하기
          </button>
        </div>
      </StSignButton>
    </div>
  );
}
export default MembershipLogin;

const StHeader = styled.div`
  background-color: #ffe600e2;
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  margin-bottom: 20px;
`;

const StTitle = styled.h1`
  text-align: center;
  font-family: "MorningBreezeBold";
  margin-top: 15px;
  color: #2a2a2a;
`;

const StContentsBox = styled.div`
  border: 3px solid #5a5a5aa6;
  border-radius: 12px;
  /* display: flex; */
  padding: 30px 30px;
  margin: auto;
  justify-content: center;
  margin-top: 15%;
  width: 60%;
  height: 160px;
`;

const StPhoneNumberInputBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 25px;
`;

const StSignButton = styled.div`
  display: flex;
  margin: auto;
  justify-content: center;
  margin-top: 3%;
  width: 25vw;
  height: 20px;
  font-family: "NanumSquareRoundBold";
`;
