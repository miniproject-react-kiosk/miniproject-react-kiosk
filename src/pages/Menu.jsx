import React from "react";
import { useNavigate, useParams } from "react-router-dom";
// import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.css";
import BackButton from "../components/BackButton";
// import { Card } from "react-bootstrap";

//2번페이지

function Menu() {
  const navigate = useNavigate();
  const param = useParams();

  //FIXME: console.log 나중에 지울것..
  console.log(param);
  return (
    <div>
      <div>Menu</div>
      <BackButton>이전으로</BackButton>

      <button
        onClick={() => {
          navigate(`/Menu/OrderChoice/${param.takeOutId}`);
        }}
      >
        {" "}
        주문하기
      </button>

      {/* 메뉴추가 사진테스트 */}
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card h-100">
            <img
              src="https://www.mcdonalds.co.kr/upload/product/pcfile/1653436847042.png"
              class="card-img-top"
              alt="..."
            ></img>
            <div class="card-body">
              <h5 class="card-title">맥크리스피 디럭스 버거</h5>
              <p class="card-text">
                100% 통닭다리살 겉바속촉 케이준 치킨 패티, 촉촉한 포테이토
                브리오쉬 번, 스페셜 스모키 소스가 선사하는 놀랍도록 새로운 맛의
                치킨 버거!
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img
              src="https://www.mcdonalds.co.kr/upload/product/pcfile/1583727855319.png"
              class="card-img-top"
              alt="..."
            ></img>
            <div class="card-body">
              <h5 class="card-title">빅맥</h5>
              <p class="card-text">
                100% 순 쇠고기 패티 두 장에 빅맥®만의 특별한 소스. 입안에서 살살
                녹는 치즈와 신선한 양상추, 양파, 그리고 피클까지. 50년 넘게 전
                세계인의 입맛을 사로 잡은 버거의 대명사.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img
              src="https://www.mcdonalds.co.kr/upload/product/pcfile/1583728352960.png"
              class="card-img-top"
              alt="..."
            ></img>
            <div class="card-body">
              <h5 class="card-title">맥스파이시 상하이 버거</h5>
              <p class="card-text">
                매콤한 시즈닝을 입힌 100% 닭가슴 통살 위에 아삭아삭한 양상추와
                신선한 토마토~ 겉은 바삭, 속은 부드러운 치킨 패티의 매콤함으로
                입맛도 기분도 화끈하게!
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img
              src="https://www.mcdonalds.co.kr/upload/product/pcfile/1583727649835.png"
              class="card-img-top"
              alt="..."
            ></img>
            <div class="card-body">
              <h5 class="card-title">맥치킨 모짜렐라</h5>
              <p class="card-text">
                든든한 맥치킨에 골든 모짜렐라 치즈 스틱 2개와 매콤한 아라비아따
                소스를 더해 강렬하게 재탄생한 맥치킨 모짜렐라!
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img
              src="https://www.mcdonalds.co.kr/upload/product/pcfile/1599119647587.png"
              class="card-img-top"
              alt="..."
            ></img>
            <div class="card-body">
              <h5 class="card-title">1955 버거</h5>
              <p class="card-text">
                113g 두툼한 순 쇠고기 패티, 특별한 1955 소스에 깊은 풍미의
                그릴드 어니언까지! 맥도날드가 처음 생긴 1955년의 맛을 담은
                영원한 오리지널 1955 버거
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img
              src="https://www.mcdonalds.co.kr/upload/product/pcfile/1599119647587.png"
              class="card-img-top"
              alt="..."
            ></img>
            <div class="card-body">
              <h5 class="card-title">베이컨 토마토 디럭스</h5>
              <p class="card-text">
                두 장의 100% 순 쇠고기 패티에 그릴에 구워 더욱 고소한 1장의
                베이컨을 얹고, 신선한 토마토와 양상추, 매콤달콤한 스위트 칠리
                소스, 치즈, 마요네즈를 더해 더욱 풍부하고 신선한 맛의 프리미엄
                버거.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
