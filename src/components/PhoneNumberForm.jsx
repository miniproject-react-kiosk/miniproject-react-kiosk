import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import swal from 'sweetalert';

function PhoneNumberForm({ handleAction, actionTitle }) {
  const [numberValue, setNumberValue] = useState('');
  const [title, setTitle] = useState(actionTitle);

  const regPhone = (data) => {
    data = data.replace(/[^0-9]/g, '');
    data = data.replace(/(\d{3})(\d{4})(\d)/, '$1-$2-$3');
    return data.slice(0, 13);
  };

  const handleNumber = (e) => {
    const { value } = e.target;
    setNumberValue(regPhone(value));
  };

  const inputError = (numberValue) => {
    if (numberValue === '') {
      // btn.disabled;
      // StButton.disabled;
      swal('가입 실패!', '전화번호를 입력해주세요.', 'error');
    }
    return;
  };

  const onReset = () => {
    setNumberValue('');
  };

  useEffect(() => {
    setTitle(actionTitle);
  }, []);

  return (
    <div>
      <ContentBox>
        <ContentInput
          name='numberValue'
          value={numberValue}
          placeholder='전화번호를 입력해주세요.'
          onChange={handleNumber}
        />
        <StButton>
          <button
            type='button'
            class='btn btn-outline-secondary'
            onClick={() => {
              if (numberValue === '') {
                return alert('내용 작성 해주시죠. 좋은말로 할때.');
              }

              handleAction(numberValue);
              // inputError();
              onReset();
            }}
          >
            {title}
          </button>
        </StButton>
      </ContentBox>
    </div>
  );
}

export default PhoneNumberForm;

const ContentBox = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  font-family: 'NanumSquareRoundBold';
  font-size: 16px;
`;
const ContentInput = styled.input`
  text-align: center;
  width: 25vw;
  height: 38px;
`;

const StButton = styled.div`
  margin-left: 10px;
`;
