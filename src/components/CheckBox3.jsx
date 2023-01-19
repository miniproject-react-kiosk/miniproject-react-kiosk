import React from "react";
import styled from "styled-components";

function CheckBox3() {
  return (
    <div>
      <form>
        {/* SMS 수신 동의 체크박스 */}
        <SmsCheckBox>
          <input type="checkbox" id="smsAgreement" name="sms" value="true" />
          {/* <label for="smsAgreement"></label> */}
          <StText>
            <span> SMS 수신 동의</span>
          </StText>
        </SmsCheckBox>
        {/* <SmsCheckBox>
              {DataInfo.map((item) => (
                <Checkbox key={item.id} text={item.text} />
              ))}
            </SmsCheckBox> */}
      </form>
    </div>
  );
}

export default CheckBox3;

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
