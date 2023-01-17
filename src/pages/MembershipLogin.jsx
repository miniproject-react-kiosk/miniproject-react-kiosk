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
          <StPhoneNumberIntutBox>
            <PhoneNumberForm></PhoneNumberForm>
            <StButton>
              <button
                type="button"
                value={inputNumber}
                class="btn btn-outline-secondary"
                onChange={onChangeInput}
                onClick={(onReset) => {
                  alert("적립이 완료되었습니다.");
                }}
              >
                적립하기
              </button>
              {/* <button onClick={onReset}>Reset</button> */}
            </StButton>
          </StPhoneNumberIntutBox>
        </div>
      </StContentsBox>

      <StSignButton>
        <div class="d-grid gap-2 col-10 mx-auto">
          <button
            type="button"
            class="btn btn-outline-secondary btn-lg"
            onClick={() => {
              navigate(`/Menu/OrderChoice/MembershipSignUp/${param.takeOutId}`);
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
  width: 70%;
  height: 160px;
`;
const StPhoneNumberIntutBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 25px;
`;

const StSignButton = styled.div`
  display: flex;
  margin: auto;
  justify-content: center;
  margin-top: 5%;
  width: 25vw;
  height: 20px;
  font-family: "NanumSquareRoundBold";
`;

const StButton = styled.div`
  margin-left: 10px;
`;
