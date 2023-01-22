import axios from "axios";
// import { useNavigate } from "react-router-dom";
import BackHomeButton from "../components/BackHomeButton";
import styled from "styled-components";
import PasswordProtectedPage from "../components/PasswordProtectedPage";

// import axios from "axios";

function Admin() {
  // const navigate = useNavigate();
  return (
    <div>
      <StHeader>
        <StTitle>⚙︎ Administrator ⚙︎</StTitle>
      </StHeader>

      <StBox>
        <StContainerBox>
          <div>
            <PasswordProtectedPage />
          </div>
          {/* <StHighlight>{orderNum}</StHighlight> */}
        </StContainerBox>
        <StBackHomeButton
          onClick={() => {
            window.location.reload();
          }}
        >
          <BackHomeButton />
        </StBackHomeButton>
      </StBox>
    </div>
  );
}

export default Admin;

const StContainerBox = styled.div`
  justify-content: center;
  border: 3px solid #3d3d3d97;
  border-radius: 10px;
  padding: 5vw;
  margin-top: 80px;
  text-align: center;
  font-family: "NanumSquareRoundBold";
  font-size: 14pt;
  /* flex-basis: 50%; */
`;

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

const StBox = styled.div`
  height: 90vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const StBackHomeButton = styled.div`
  margin-top: 2%;
`;

const StHighlight = styled.div`
  color: #ff9900;
  font-size: 45pt;
  font-weight: bolder;
`;
