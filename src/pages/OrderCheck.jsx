import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import BackButton from '../components/BackButton';
import { BiHome } from 'react-icons/bi';
import { BsCreditCard } from 'react-icons/bs';
import { FaWonSign } from 'react-icons/fa';
import OrderMenuTable from '../components/OrderMenuTable';

// import BackHomeButton from "../components/BackHomeButton";
import axios from 'axios';
// import { useCookies } from "react-cookie"; // useCookies import
// import BackButton from "../components/BackButton";
// import BackHomeButton from "../components/BackHomeButton";

function OrderCheck() {
  //FIXME:
  // axios
  //   .post('http://13.209.12.254/order', {
  //     key1: 'value1',
  //     key2: 'value2',
  //   })
  //   .then((response) => {
  //     console.log(response.data);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  //TODO:

  const navigate = useNavigate();
  const param = useParams();
  const globaladdCart = useSelector((state) => state.menuList.menuList);

  let totalprice = 0;
  for (let i = 0; i < globaladdCart.length; i++) {
    totalprice = totalprice + globaladdCart[i].price * globaladdCart[i].amount;
  }
  console.log(globaladdCart);
  console.log('오더체크 페이지~~~~~~~~~~~~~~~~~~~~~`');

  axios.defaults.withCredentials = true;
  // axios.defaults.headers.common["Authorization"] = "Bearer " + token;

  return (
    <div>
      <StHeader>
        <StTitle>✔️ Order Check ✔️</StTitle>
      </StHeader>

      <BackButton>이전으로</BackButton>

      <StBox>
        <div>주문을 확인해주세요!</div>
        <StContainerBox>
          <StOrderContents>
            <StMenuTable></StMenuTable>
            <div>
              {globaladdCart?.map((cartMenu) => {
                console.log(globaladdCart);
                return (
                  <>
                    <StOrderCheckList>
                      {/* <img
                        src={cartMenu.imageUrl}
                        class='card-img-top'
                        alt='...'
                        width='10px'
                        height='500px'
                      ></img> */}

                      <StOrderCheckListBox1>
                        <h2> {cartMenu.menuName}</h2>
                      </StOrderCheckListBox1>

                      <StOrderCheckListBox2>
                        <h3>{cartMenu.amount}</h3>
                      </StOrderCheckListBox2>

                      <StOrderCheckListBox3>
                        <h3>
                          <FaWonSign /> {cartMenu.price}
                        </h3>
                      </StOrderCheckListBox3>
                    </StOrderCheckList>
                  </>
                );
              })}
            </div>
          </StOrderContents>
        </StContainerBox>
      </StBox>

      <StBuyOrResetBox>
        <StCartTotalPrice>
          <div class='d-grid gap-2 col-10 mx-auto'>
            <div class='btn btn-outline-light btn-lg'>
              Total : <FaWonSign /> {totalprice}
            </div>
          </div>
        </StCartTotalPrice>

        {/* 취소하기 버튼 */}
        <StResetButton>
          <div class='d-grid gap-2 col-10 mx-auto'>
            <button
              type='button'
              class='btn btn-outline-light btn-lg'
              onClick={() => {
                navigate('/');
              }}
            >
              {' '}
              <BiHome className='BackHomeButton' /> 홈으로 돌아가기
            </button>
          </div>
        </StResetButton>

        {/* 결제하기 버튼 */}
        <StBuyButton>
          <div class='d-grid gap-2 col-10 mx-auto'>
            <button
              type='button'
              class='btn btn-outline-light btn-lg'
              onClick={() => {
                navigate(`/Menu/OrderCheck/OrderChoice/${param.takeOutId}`);

                // axios.post('http://13.209.12.254/order', globaladdCart);

                //TODO: CORS정책 확인용.
                // axios({
                //   method: 'options',
                //   url: 'http://13.209.12.254/order',
                //   headers: {
                //     'Access-Control-Request-Method': 'POST',
                //     'Access-Control-Request-Headers': 'Content-Type',
                //   },
                // }).then((response) => {
                //   if (response.headers['access-control-allow-origin']) {
                //     console.log('CORS allowed');
                //   } else {
                //     console.log('CORS not allowed');
                //   }
                // });
                //TODO:

                axios
                  .post(
                    'http://13.209.12.254/order',
                    globaladdCart,
                    {},
                    {
                      withCredentials: true,
                    }
                  )
                  .then((res) => {
                    console.log(res);
                    console.log(res.data.authorization);
                    console.log(
                      'Authorization: ' + localStorage.getItem('Authorization')
                    );
                    console.log('Token: ' + localStorage.getItem('token'));

                    console.log('오더체크 페이지~~~~~~~~~~~~쿠키');

                    // const accessToken = res?.data?.accessToken;
                    // console.log(accessToken);

                    localStorage.setItem(
                      'Authorization',
                      res.data.authorization
                    ); // 쿠키에 토큰 저lo장
                  });
              }}
            >
              {' '}
              <BsCreditCard className='Buy' /> 주문하기
            </button>
          </div>
        </StBuyButton>
      </StBuyOrResetBox>
    </div>
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
  font-family: 'MorningBreezeBold';
  margin-top: 15px;
  color: #2a2a2a;
`;

const StBox = styled.div`
  display: flex;
  text-align: center;
  height: 90vh;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  font-family: 'NanumSquareRoundBold';
  font-size: 14pt;
`;

const StContainerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid #3d3d3d97;
  border-radius: 10px;
  margin-top: 5pt;
  padding: 3vw;
  width: 1000px;
  height: 500px;
  text-align: center;
`;

const StOrderContents = styled.div`
  justify-content: center;
  align-items: center;
  /* border: 3px solid #3d3d3d97; */
  padding: 15pt;
  width: 900px;
  height: 450px;
  overflow: scroll;
  text-align: center;
  font-family: 'NanumSquareRoundBold';
  font-size: 12pt;
`;

const StMenuTable = styled.div`
  margin-top: 20pt;
`;

const StBuyOrResetBox = styled.div`
  display: flex;
  background-color: #232323d1;
  border-radius: 10px;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
`;

const StCartTotalPrice = styled.div`
  flex-basis: 50%;
  font-family: 'NanumSquareRoundBold';
`;

const StBuyButton = styled.div`
  flex-basis: 25%;
  font-family: 'NanumSquareRoundBold';
`;

const StResetButton = styled.div`
  flex-basis: 25%;
  font-family: 'NanumSquareRoundBold';
`;

const StOrderCheckList = styled.div`
  background-color: #666464f1;
  color: white;
  border-radius: 10px;
  display: flex;
  margin-top: 20px;
  bottom: 0;
  width: 100%;
  height: 100px;
  align-items: center;
`;
const StOrderCheckListBox1 = styled.div`
  flex-basis: 60%;
`;

const StOrderCheckListBox2 = styled.div`
  flex-basis: 20%;
`;

const StOrderCheckListBox3 = styled.div`
  flex-basis: 20%;
`;
