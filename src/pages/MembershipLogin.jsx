import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import BackButton from "../components/BackButton";
import PhoneNumberForm from "../components/PhoneNumberForm";

function MembershipLogin() {
  const navigate = useNavigate();
  const param = useParams();

  const handleAction = () => {
    alert("적립이 완료되었습니다.");
    // alert("멤버십 정보가 없습니다. 멤버십에 가입해주세요!")
    // console.log("Handle Action");
  };

  return (
    <div>
      <StHeader>
        <BackButton>이전으로</BackButton>
        <StTitle>Membership Login</StTitle>
      </StHeader>
      <StContentsBox>
        <div>
          <StPhoneNumberInputBox>
            <PhoneNumberForm
              handleAction={handleAction}
              actionTitle=" 적립하기 "
            ></PhoneNumberForm>
          </StPhoneNumberInputBox>
        </div>
      </StContentsBox>

      {/* 회원이 아니라면 ? 멤버십 가입하기 */}
      <StContentsBox2>
        <StSignUpInputBox>
          아직 회원이 아니신가요?
          <StSignButton>
            <div class="d-grid gap-2 col-10 mx-auto">
              <button
                type="button"
                class="btn btn-outline-secondary btn-lg"
                onClick={() => {
                  navigate(
                    `/Menu/OrderChoice/MembershipSignUp/${param.takeOutId}`
                  );
                }}
              >
                {" "}
                멤버십 가입하기
              </button>
            </div>
          </StSignButton>
        </StSignUpInputBox>
      </StContentsBox2>
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

const StContentsBox2 = styled.div`
  border: 3px solid #5a5a5aa6;
  border-radius: 12px;
  /* display: flex; */
  padding: 30px 30px;
  margin: auto;
  justify-content: center;
  margin-top: 3%;
  width: 60%;
  height: 160px;
`;

const StPhoneNumberInputBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 25px;
`;

const StSignUpInputBox = styled.div`
  justify-content: center;
  text-align: center;
  font-family: "NanumSquareRoundBold";
  font-size: 14pt;
  color: #636363;
`;

const StSignButton = styled.div`
  display: flex;
  margin: auto;
  justify-content: center;
  margin-top: 2%;
  width: 25vw;
  height: 20px;
  font-family: "NanumSquareRoundBold";
`;
