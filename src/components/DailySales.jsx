import React, { useState, useEffect } from "react";
import axios from "axios";
import { BiWon } from "react-icons/bi";
import styled from "styled-components";
// import { useNavigate } from "react-router-dom";

function DailySales() {
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
  console.log("###", date, dailySales);

  return (
    <div>
      <StBox>
        <StContainerBox>
          <div>
            <StTitle>
              <div>✔︎ 당일 매출 조회</div>
            </StTitle>
            <input type="date" onChange={handleSelectDate}></input>
            {/* <input type="submit" value="Submit"></input> */}
          </div>
          <StHighlight>
            {" "}
            <BiWon />
            {dailySales}
          </StHighlight>
        </StContainerBox>
      </StBox>
    </div>
  );
}

export default DailySales;

const StContainerBox = styled.div`
  justify-content: center;
  border: 3px solid #3d3d3d97;
  border-radius: 10px;
  padding: 5vw;
  margin-top: 80px;
  text-align: center;
  font-family: "NanumSquareRoundBold";
  font-size: 12pt;
  /* flex-basis: 50%; */
`;

const StBox = styled.div`
  height: 90vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const StHighlight = styled.div`
  color: #1c1c1ca9;
  margin-top: 20pt;
  font-size: 28pt;
  font-weight: bolder;
`;

const StTitle = styled.div`
  font-family: "NanumSquareRoundBold";
  font-size: 14pt;
  margin-bottom: 20pt;
`;
