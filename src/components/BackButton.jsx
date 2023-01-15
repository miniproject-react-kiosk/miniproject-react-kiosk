import React from "react";
import { useNavigate } from "react-router-dom";
import { BsBackspace } from "react-icons/bs";
import styled from "styled-components";

function BackButton() {
  const navigate = useNavigate();

  return (
    <div>
      {/* 백버튼 수정 테스트 */}
      <StBackButtonContainer>
        <div class="d-grid gap-2 col-1 mx-auto">
          <button
            type="button"
            class="btn btn-outline-secondary btn-lg"
            onClick={() => {
              navigate(-1);
            }}
          >
            {" "}
            <BsBackspace className="BackButton" />
          </button>
        </div>
      </StBackButtonContainer>
    </div>
  );
}

export default BackButton;

const StBackButtonContainer = styled.div`
  /* justify-items: right; */
  margin-top: 15px;
  padding-right: 10px;
  position: fixed;
  right: 5%;
`;
