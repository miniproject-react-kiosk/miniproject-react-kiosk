import React from "react";
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

  return (
    <div>
      <ContentBox>
        <div>Phone Number</div>
        <ContentInput
          name="numberValue"
          value={numberValue || ""}
          onChange={handleNumber}
        />
      </ContentBox>
    </div>
  );
}

export default PhoneNumberForm;

const ContentBox = styled.div``;
const ContentInput = styled.input``;
