import React from "react";
import { useNavigate, useParams } from "react-router-dom";
// import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.css";
import styled from "styled-components";
import { BsCartCheck } from "react-icons/bs";
import { BiUndo } from "react-icons/bi";

//2번페이지

function Menu() {
  const navigate = useNavigate();
  const param = useParams();

  //FIXME: console.log 나중에 지울것..
  console.log(param);
  return (
    <div>
      <StHeader>
        <StTitle>MENU</StTitle>
        {/* <BackButton>이전으로</BackButton> */}
        {/* <img src="/img/logo.png"></img> */}
      </StHeader>

      {/* 메뉴추가 */}
      <StMenuContainer>
        <div class="row row-cols-1 row-cols-md-5 g-4">
          <div class="col">
            <div class="card h-90">
              <img
                src="https://www.mcdonalds.co.kr/upload/product/pcfile/1653436847042.png"
                class="card-img-top"
                alt="..."
              ></img>
              <div class="card-body">
                <StCardTitle>
                  {/* <h5 class="card-title">맥크리스피 디럭스 버거</h5> */}
                  <p>맥크리스피 디럭스 버거</p>
                </StCardTitle>
                <StCardText>
                  <p class="card-text">
                    100% 통닭다리살 겉바속촉 케이준 치킨 패티, 촉촉한 포테이토
                    브리오쉬 번, 스페셜 스모키 소스가 선사하는 놀랍도록 새로운
                    치킨 버거!
                  </p>
                </StCardText>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-90">
              <img
                src="https://www.mcdonalds.co.kr/upload/product/pcfile/1583727855319.png"
                class="card-img-top"
                alt="..."
              ></img>
              <div class="card-body">
                <StCardTitle>
                  <p>빅맥</p>
                </StCardTitle>
                <StCardText>
                  <p class="card-text">
                    100% 순 쇠고기 패티 두 장에 빅맥만의 특별한 소스. <br></br>
                    50년 넘게 전 세계인의 입맛을 사로 잡은 버거의 대명사.
                  </p>
                </StCardText>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-90">
              <img
                src="https://www.mcdonalds.co.kr/upload/product/pcfile/1583728352960.png"
                class="card-img-top"
                alt="..."
              ></img>
              <div class="card-body">
                <StCardTitle>
                  <p>맥스파이시 상하이 버거</p>
                </StCardTitle>
                <StCardText>
                  <p class="card-text">
                    매콤한 시즈닝을 입힌 100% 닭가슴 통살 위에 아삭아삭한
                    양상추와 신선한 토마토~ 겉바속촉 치킨 패티로 입맛도 기분도
                    화끈하게!
                  </p>
                </StCardText>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-90">
              <img
                src="https://www.mcdonalds.co.kr/upload/product/pcfile/1583727649835.png"
                class="card-img-top"
                alt="..."
              ></img>
              <div class="card-body">
                <StCardTitle>
                  <p>맥치킨 모짜렐라</p>
                </StCardTitle>
                <StCardText>
                  <p class="card-text">
                    든든한 맥치킨에 골든 모짜렐라 치즈 스틱 2개와 매콤한
                    아라비아따 소스를 더해 강렬하게 재탄생한 맥치킨 모짜렐라!
                  </p>
                </StCardText>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-90">
              <img
                src="https://www.mcdonalds.co.kr/upload/product/pcfile/1599119647587.png"
                class="card-img-top"
                alt="..."
              ></img>
              <div class="card-body">
                <StCardTitle>
                  <p>1955 버거</p>
                </StCardTitle>
                <StCardText>
                  <p class="card-text">
                    113g 두툼한 순 쇠고기 패티, 특별한 소스에 깊은 풍미의 그릴드
                    어니언까지! 1955년의 맛을 담은 영원한 오리지널 버거
                  </p>
                </StCardText>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-90">
              <img
                src="https://www.mcdonalds.co.kr/upload/product/pcfile/1599119647587.png"
                class="card-img-top"
                alt="..."
              ></img>

              <div class="card-body">
                <StCardTitle>
                  <p>베이컨 토마토 디럭스</p>
                </StCardTitle>
                <StCardText>
                  <p class="card-text">
                    두 장의 100% 순 쇠고기 패티와 그릴에 구운 1장의 베이컨을
                    얹고, 신선한 토마토와 양상추, 매콤달콤한 스위트 칠리 소스,
                    치즈, 마요네즈를 더한 프리미엄 버거.
                  </p>
                </StCardText>
              </div>
            </div>
          </div>
        </div>
      </StMenuContainer>
      <StCartBox>
        <div>장바구니 자리</div>

        <StBuyOrResetBox>
          <div>결제창 자리</div>

          {/* 취소하기 버튼 */}
          <StResetButton>
            <div class="d-grid gap-2 col-10 mx-auto">
              <button
                type="button"
                class="btn btn-outline-light btn-lg"
                onClick={() => {
                  navigate(-1);
                }}
              >
                {" "}
                <BiUndo className="Undo" /> 취소하기
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
                  navigate(`/Menu/OrderChoice/${param.takeOutId}`);
                }}
              >
                {" "}
                <BsCartCheck className="Order" /> 주문하기
              </button>
            </div>
          </StBuyButton>
        </StBuyOrResetBox>
      </StCartBox>
    </div>
  );
}

export default Menu;

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

const StMenuContainer = styled.p`
  padding: 35px;
  margin-top: 60px;
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
  font-family: "NanumSquareRoundBold";
`;

const StCartBox = styled.div`
  /* border: 2px solid #343333; */
  border-radius: 10px;
  background-color: #3d3d3d97;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 300px;
`;

const StBuyOrResetBox = styled.div`
  background-color: #3d3d3d61;
  border-radius: 10px;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 100px;
`;

const StBuyButton = styled.div`
  position: absolute;
  right: 0%;
  width: 400px;
  height: 20px;
  justify-content: space-between;
  font-family: "NanumSquareRoundBold";
  /* align-items: baseline; */
`;

const StResetButton = styled.div`
  position: absolute;
  right: 30%;
  width: 400px;
  height: 20px;
  justify-content: space-between;
  font-family: "NanumSquareRoundBold";
`;
