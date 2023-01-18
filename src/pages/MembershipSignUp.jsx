import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import BackButton from "../components/BackButton";
import PhoneNumberForm from "../components/PhoneNumberForm";
import swal from "sweetalert";
// import CheckBox3 from "../components/CheckBox3";
// import { DataInfo } from "../data/DataInfo";

function MembershipLogin() {
  const navigate = useNavigate();
  const param = useParams();

  const handleAction = () => {
    // alert("가입 가능한 전화번호입니다.");
    // alert("이미 멤버십 회원입니다.");

    // // 회원가입 로직 추가

    swal("멤버십가입 성공!", "가입 가능한 전화번호입니다.", "success");

    swal(
      "멤버십가입 실패!",
      "이미 멤버십 회원입니다.\n 등록한 번호로 로그인 해주세요.",
      "warning"
    ).then(function () {
      navigate(`/Menu/OrderChoice/MembershipLogin/${param.takeOutId}`);
    });
  };

  // 체크박스 로직 추가

  // 체크박스 useState 만들어서 변경할 함수 만들어 준 뒤, state값과 함술를 체크박스에 넘겨줘서 (props) 그 값과 함수(onClick에 연결) 사용
  // 넘겨준 값은 체크박스 UI를 state 값에 따라 바뀌게 구현

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
              actionTitle=" 중복 확인하기 "
            ></PhoneNumberForm>
          </StPhoneNumberInputBox>
        </div>
        <div>
          <form>
            {/* SMS 수신 동의 체크박스 */}
            <SmsCheckBox>
              <input
                type="checkbox"
                id="SMSAgreement"
                name="SMS"
                value="true"
              />
              {/* <label for="SMSAgreement"></label> */}
              <StText>
                <span> SMS 수신 동의</span>
              </StText>
            </SmsCheckBox>

            {/* 체크박스 로직 수정 */}
            {/* <SmsCheckBox>
              {DataInfo.map((item) => (
                <Checkbox key={item.id} text={item.text} />
              ))}
            </SmsCheckBox> */}
          </form>
        </div>
      </StContentsBox>

      {/* 멤버십 가입하기 */}
      <StSignButton>
        <div class="d-grid gap-2 col-10 mx-auto">
          <button
            type="button"
            class="btn btn-outline-secondary btn-lg"
            onClick={() => {
              swal(
                "멤버십가입이 완료되었습니다.",
                "\n()원이 적립이 완료되었습니다.",
                "success"
              ).then(function () {
                navigate(`/Menu/OrderChoice/OrderComplete/${param.takeOutId}`);
              });
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
  height: 200px;
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

const SmsCheckBox = styled.div`
  display: flex;
  /* border: 2px solid gainsboro; */
  width: 90pt;
  margin: auto;
  /* justify-content: center; */
  /* align-items: center; */
  text-align: center;
  padding: 25px 0;
  line-height: 5px;
  font-family: "NanumSquareRoundBold";
  font-size: 11pt;
  color: #5a5a5af4;
`;

const StText = styled.div`
  margin-top: 3pt;
  margin-left: 6pt;
`;
