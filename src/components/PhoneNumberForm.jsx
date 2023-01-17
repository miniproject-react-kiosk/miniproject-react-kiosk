import React, { Component } from "react";
import styled from "styled-components";
import { useState } from "react";

function PhoneNumberForm() {
  const [numberValue, setNumberValue] = useState("");

  const regPhone = (data) => {
    data = data.replace(/[^0-9]/g, "");
    data = data.replace(/(\d{3})(\d{4})(\d)/, "$1-$2-$3");
    return data.slice(0, 13);
  };

  const handleNumber = (e) => {
    const { value } = e.target;
    setNumberValue(regPhone(value));
  };

  // const onReset = () => {
  //   setNumberValue("");
  // };

  return (
    <div>
      <ContentBox>
        {/* <div>Phone Number</div> */}
        <ContentInput
          name="numberValue"
          value={numberValue || ""}
          placeholder="전화번호를 입력해주세요."
          onChange={handleNumber}
        />
        {/* <button onClick={onReset}>Reset</button> */}
      </ContentBox>
    </div>
  );
}

// class PhoneNumberForm extends Component {
//   state = {
//     name: '',
//     phone: ''
//   }
//   handleChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value
//     })
//   }
//   handleSubmit = (e) => {
//     // 페이지 리로딩 방지
//     e.preventDefault();
//     // 상태값을 onCreate 를 통하여 부모에게 전달
//     this.props.onCreate(this.state);
//     // 상태 초기화
//     this.setState({
//       name: '',
//       phone: ''
//     })
//   }
//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
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

export default PhoneNumberForm;

const ContentBox = styled.div`
  text-align: center;
  font-family: "NanumSquareRoundBold";
  font-size: 16px;
`;
const ContentInput = styled.input`
  /* display: flex; */
  /* margin: auto; */
  /* justify-content: center; */
  text-align: center;
  width: 25vw;
  height: 38px;
`;
