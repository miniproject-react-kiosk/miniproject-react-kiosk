import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

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
          value={numberValue || ''}
          placeholder='전화번호를 입력해주세요.'
          onChange={handleNumber}
        />
        <StButton>
          <button
            type='button'
            class='btn btn-outline-secondary'
            onClick={() => {
              onReset();
              handleAction();
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

// class PhoneForm extends Component {
//   state = {
//     name: "",
//     phone: "", //state에 name속성이 있어야 state.name, state.phone으로 불러올 수 있음.
//   };
//   handleChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value, //여기서 name은 name속성을 말하는 것인데,
//       //배열로 감싼 이유는 여러개 를 e.target.value로 넣어주려고 그런듯
//     });
//   };
//   handleSubmit = (e) => {
//     // 페이지 리로딩 방지 (원래 form에서 submit이 발생하면 페이지 리로딩이되는데,
//     // 그러면 우리가 지니고있는 상태값을 다 잃어버리므로 방지시킴)
//     e.preventDefault(); //원래 이벤트가 해야하는 작업 방지
//     // 상태값을 onCreate 를 통하여 부모에게 전달
//     this.props.onCreate(this.state);
//     // 상태 초기화
//     this.setState({
//       name: "",
//       phone: "",
//     });
//   };
//   render() {
//     return (
//       // onSubmit을 안써주면 말짱도루묵...
//       <form onSubmit={this.handleSubmit}>
//         <input
//           placeholder="이름"
//           value={this.state.name}
//           onChange={this.handleChange}
//           name="name" //name 속성 설정 필수
//         />
//         <input
//           placeholder="전화번호"
//           value={this.state.phone}
//           onChange={this.handleChange}
//           name="phone"
//         />
//         <button type="submit">등록</button>
//       </form>
//     );
//   }
// }
