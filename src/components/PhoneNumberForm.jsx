import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";

// function PhoneNumberInput () {
// const handlePress = (e) => {
//   const regex = /^[0-9\b -]{0,13}$/;
//   if (regex.test(e.target.value)) {
//     setInputValue(e.target.value);
//   }
// }
// // export default class Example2 extends React.Component {
//   state = {
//     text: "텍스트",
//   };
//     return (
//       <div>

//         <input type="text" onChange={handleChange} value={inputValue} />
//         <input />
//         <h1>{this.state.text}</h1>
//       </div>
//     );
//   }

// retry

function PhoneNumberForm() {
  const [values, setValues] = useState({
    nameValue: "",
    numberValue: "",
    contentValue: "",
  });

  const { nameValue, numberValue, contentValue } = values;

  const handleNumber = (e) => {
    const { value, name } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  useEffect(() => {
    if (numberValue.length === 11) {
      setValues({
        numberValue: numberValue.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3"),
      });
    } else if (numberValue.length === 13) {
      setValues({
        numberValue: numberValue
          //하이픈이 입력되면 공백으로 변경되고 하이픈이 다시 생성됨
          .replace(/-/g, "")
          .replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3"),
      });
    }
  }, [numberValue]);

  return (
    <div>
      <ContentBox>
        <div>Name</div>
        <ContentInput
          name="nameValue"
          value={nameValue || ""}
          onChange={handleNumber}
        />
      </ContentBox>
      <ContentBox>
        <div>Phone Number</div>
        <ContentInput
          name="numberValue"
          value={numberValue || ""}
          onChange={handleNumber}
        />
      </ContentBox>
      <ContentBox>
        <div>Content</div>
        <ContentInput
          name="contentValue"
          value={contentValue || ""}
          onChange={handleNumber}
        />
      </ContentBox>
    </div>
  );
}

export default PhoneNumberForm;

const ContentBox = styled.input``;
const ContentInput = styled.input``;
