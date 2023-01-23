import React, { useState, useEffect } from "react";
import axios from "axios";
import BackHomeButton from "../components/BackHomeButton";
import { BiWon } from "react-icons/bi";
import styled from "styled-components";
// import { useNavigate } from "react-router-dom";

function Admin() {
  const [dailySales, setDailySales] = useState(0);
  const [date, setDate] = useState("");

  const handleSelectDate = (e) => {
    const selectedDate = e.target.value;
    const formattedDate = selectedDate.replace(/-/gi, "/");
    setDate(formattedDate);
  };

  // useEffect(() => {
  //   console.log("##", date, dailySales);
  //   getDailySales();
  // }, []);

  const getDailySales = async () => {
    await axios
      .post(
        "http://13.209.12.254/order/dailySales",
        { date: date },
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        setDailySales(response.data);
      });
  };
  getDailySales();

  return (
    <div>
      <StHeader>
        <StTitle>⚙︎ Administrator ⚙︎</StTitle>
      </StHeader>

      <StBox>
        <StContainerBox>
          <div>
            <p>
              <div>당일 매출 조회</div>
              <input type="date" onChange={handleSelectDate}></input>
              {/* <input type="submit" value="Submit"></input> */}
            </p>
          </div>

          <StHighlight>
            {" "}
            <BiWon />
            {dailySales}
          </StHighlight>
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
  color: #1c1c1ca9;
  font-size: 28pt;
  font-weight: bolder;
`;
