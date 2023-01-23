import React from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineManageAccounts } from "react-icons/md";
import styled from "styled-components";

function AdminButton() {
  const navigate = useNavigate();

  return (
    <div>
      <StAdminButtonContainer>
        <div class="d-grid gap-2 col-1 mx-auto">
          <button
            type="button"
            class="btn btn-outline-secondary btn-lg"
            onClick={() => {
              navigate(`/PasswordProtectedPage`);
              // navigate(`/PasswordProtectedPage/Admin`);
            }}
          >
            <StAdminButton>
              <MdOutlineManageAccounts></MdOutlineManageAccounts>
            </StAdminButton>
          </button>
        </div>
      </StAdminButtonContainer>
    </div>
  );
}

export default AdminButton;

const StAdminButtonContainer = styled.div`
  margin-top: 10px;
  padding-right: 10px;
  position: fixed;
  right: 5%;
`;

const StAdminButton = styled.div`
  font-size: 20pt;
`;
