import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BiHome } from "react-icons/bi";
import { BsCreditCard } from "react-icons/bs";
import BackButton from "../components/BackButton";
import { FaWonSign } from "react-icons/fa";

// import BackHomeButton from "../components/BackHomeButton";
import styled from "styled-components";

// import BackButton from "../components/BackButton";
// import BackHomeButton from "../components/BackHomeButton";

// const StAll = styled.div`
//   text-align: center;
//   max-width: 1200px;
//   z-index: 2;
// `;

// const StBoxs = styled.div`
//   height: 90vh;
//   display: flex;
//   align-items: center;
//   flex-direction: column;
//   justify-content: space-evenly;
// `;

// const StBox1 = styled.div`
//   flex-basis: 20%;
//   background-color: #fde6e6;
//   border: solid 2px white;
//   border-radius: 5vw;
//   width: 80vw;
//   height: 45vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const StBox2 = styled.div`
//   flex-basis: 50%;
//   background-color: #fde6e6;
//   border: solid 2px white;
//   border-radius: 5vw;
//   width: 80vw;
//   height: 45vh;
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   /* overflow: scroll;
//   -ms-overflow-style: none;
//   scrollbar-width: none;  */
//   overflow-y: auto;
//   //뭔진모르겠는데 스크롤 숨기는 기능임...
//   &::-webkit-scrollbar {
//     width: 4px;
//   }
//   &::-webkit-scrollbar-thumb {
//     background: transparent;
//   }
//   /* align-items: center; */
// `;
// const StBox3 = styled.div`
//   flex-basis: 30%;

//   background-color: #fde6e6;
//   border: solid 2px white;
//   border-radius: 5vw;
//   width: 80vw;

//   height: 45vh;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-evenly;
//   align-items: center;
// `;
// >>>>>>> 0d051c8047212464da3b512e7a2e46110d4d6b83

function OrderCheck() {
  const navigate = useNavigate();
  const param = useParams();
  return (
    <div>
      <StHeader>
        <StTitle>✔️ Order Check ✔️</StTitle>
      </StHeader>
      <BackButton>이전으로</BackButton>
      <StBox>
        <StContainerBox>주문을 확인해주세요!</StContainerBox>
      </StBox>
      <StBuyOrResetBox>
        {/* 취소하기 버튼 */}

        <StCartTotalPrice>
          <div class="d-grid gap-2 col-10 mx-auto">
            <div class="btn btn-outline-light btn-lg">
              총 가격
              {/* Total : {totalprice} <FaWonSign /> */}
            </div>
          </div>
        </StCartTotalPrice>

        <StResetButton>
          <div class="d-grid gap-2 col-10 mx-auto">
            <button
              type="button"
              class="btn btn-outline-light btn-lg"
              onClick={() => {
                navigate("/");
              }}
            >
              {" "}
              <BiHome className="BackHomeButton" /> 홈으로 돌아가기
            </button>
          </div>
        </StResetButton>

        {/* 결제하기 버튼 */}
        <StBuyButton>
          <div class="d-grid gap-2 col-10 mx-auto">
            <button
              type="button"
              class="btn btn-outline-light btn-lg"
              onClick={() => {
                navigate(`/Menu/OrderCheck/OrderChoice/${param.takeOutId}`);
              }}
            >
              {" "}
              <BsCreditCard className="Buy" /> 주문하기
            </button>
          </div>
        </StBuyButton>
      </StBuyOrResetBox>
    </div>
    // =======
    //           <div>your order</div>
    //           <StBox2 className='box2'>
    //             <div>주문을 확인 해주세요.주문을 확인 해주세요.</div>
    //             <div>주문을 확인 해주세요.</div>
    //             <div>주문을 확인 해주세요.</div>
    //             <div>주문을 확인 해주세요.</div>
    //           </StBox2>

    //           <StBox3>
    //             <div> total price</div>

    //             <div>
    //               <BackHomeButton />
    //               <button
    //                 onClick={(e) => {
    //                   navigate(
    //                     `/Menu/OrderChoice/OrderComplete/${param.takeOutId}`
    //                   );
    //                 }}
    //               >
    //                 {' '}
    //                 결제하기
    //               </button>
    //             </div>
    //           </StBox3>
    //         </StBoxs>
    //       </StAll>
    //     </>
  );
}

export default OrderCheck;

const StHeader = styled.div`
  background-color: #ffe600e2;
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
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

const StContainerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid #3d3d3d97;
  border-radius: 10px;
  padding: 5vw;
  width: 800px;
  height: 400px;
  text-align: center;
  font-family: "NanumSquareRoundBold";
  font-size: 14pt;
`;

const StBuyOrResetBox = styled.div`
  display: flex;
  background-color: #3c3c3caf;
  border-radius: 10px;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 150px;
`;

const StCartTotalPrice = styled.div`
  flex-basis: 50%;
  margin-top: 50px;
  font-family: "NanumSquareRoundBold";
`;

const StBuyButton = styled.div`
  flex-basis: 25%;
  margin-top: 50px;
  font-family: "NanumSquareRoundBold";
`;

const StResetButton = styled.div`
  flex-basis: 25%;
  margin-top: 50px;
  font-family: "NanumSquareRoundBold";
`;
