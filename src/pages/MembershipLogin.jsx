import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import BackButton from "../components/BackButton";
import PhoneNumberForm from "../components/PhoneNumberForm";

function MembershipLogin() {
  const navigate = useNavigate();
  const param = useParams();
  const [inputNumber, setInputNumber] = useState("");
  const onChangeInput = (e) => {
    setInputNumber(e.target.value);
  };
  const onReset = () => {
    setInputNumber("");
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
            <PhoneNumberForm></PhoneNumberForm>
            <StButton>
              <button
                type="button"
                value={inputNumber}
                class="btn btn-outline-secondary"
                onChange={onChangeInput}
                onClick={() => {
                  alert("적립이 완료되었습니다.");
                  onReset();
                }}
              >
                적립하기
              </button>
              {/* <button onClick={onReset}>Reset</button> */}
            </StButton>
          </StPhoneNumberInputBox>
        </div>
      </StContentsBox>

      {/* 회원이 아니라면 ? 멤버십 가입하기 */}
      <StContentsBox2>
        <StSignUpInputBox>
          아직 회원이 아니라면?
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
  font-size: 16pt;
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

const StButton = styled.div`
  margin-left: 10px;
`;
