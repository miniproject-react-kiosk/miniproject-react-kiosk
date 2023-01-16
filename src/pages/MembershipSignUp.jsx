import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import BackButton from "../components/BackButton";

function MembershipLogin() {
  const navigate = useNavigate();
  const param = useParams();
  return (
    <div>
      <StHeader>
        <BackButton>이전으로</BackButton>
        <StTitle>JOIN US!</StTitle>
      </StHeader>
      <StContentsBox>
        <div>
          전화번호를 입력해주세요. <br></br>
          {/* <button
            onClick={() => {
              navigate(`/Menu/OrderChoice/OrderComplete/${param.takeOutId}`);
            }}
          >
            멤버쉽 회원가입하기(전화번호중복체크기능^^)
          </button> */}
          <StButton>
            <button
              type="button"
              class="btn btn-outline-secondary"
              onClick={() => {
                // 중복 체크 기능 넣기
              }}
            >
              중복 체크하기
            </button>
          </StButton>
        </div>
      </StContentsBox>

      <StSignButton>
        <div class="d-grid gap-2 col-10 mx-auto">
          <button
            type="button"
            class="btn btn-outline-secondary btn-lg"
            onClick={() => {
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
  display: flex;
  padding: 50px 50px;
  margin: auto;
  justify-content: center;
  text-align: center;
  margin-top: 10%;
  width: 80%;
  height: 150px;
  font-family: "NanumSquareRoundBold";
`;

const StSignButton = styled.div`
  display: flex;
  margin: auto;
  justify-content: center;
  margin-top: 15%;
  width: 25vw;
  height: 20px;
  font-family: "NanumSquareRoundBold";
`;

const StButton = styled.div`
  padding-left: 10px;
  /* margin-left: 20px; */
`;
