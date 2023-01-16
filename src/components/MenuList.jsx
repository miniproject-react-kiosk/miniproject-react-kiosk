import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components';
import AddCart from '../components/AddCart';

export default function MenuList() {
  return (
    <div>
      <div class='col'>
        <div class='card h-40'>
          <img
            src='https://www.mcdonalds.co.kr/upload/product/pcfile/1653436847042.png'
            class='card-img-top'
            alt='...'
          ></img>
          <div class='card-body'>
            <StCardTitle>
              {/* <h5 class="card-title">맥크리스피 디럭스 버거</h5> */}
              <p>맥크리스피 디럭스 버거</p>
            </StCardTitle>
            <StCardText>
              <p class='card-text'>
                100% 통닭다리살 겉바속촉 케이준 치킨 패티, 촉촉한 포테이토
                브리오쉬 번, 스페셜 스모키 소스가 선사하는 놀라운 치킨 버거!
              </p>
              <StAddCartButton>
                {' '}
                <AddCart />
              </StAddCartButton>
            </StCardText>
          </div>
        </div>
      </div>
    </div>
  );
}

const StAddCartButton = styled.div`
  display: flex;
  justify-content: center;
  /* position: relative; */
  /* width: fit-content; */
  /* margin: auto; */
  /* width: 20vw; */
  /* align-items: center; */
`;

const StCardTitle = styled.p`
  text-align: center;
  font-weight: bold;
  font-size: 18pt;
`;

const StCardText = styled.p`
  text-align: center;
  font-weight: bold;
  color: #868686;
  font-family: 'NanumSquareRoundBold';
`;
