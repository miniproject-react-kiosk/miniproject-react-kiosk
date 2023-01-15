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

      {/* 메뉴 추가 테스트 부트스트랩 */}
      <div class="card">
        <button type="button" class="btn btn-secondary">
          {" "}
          버튼테스트
        </button>
        <div class="card-body">
          <h5 class="card-title">카드테스트</h5>
          <p class="card-text">메뉴 이름이 들어올 자리</p>
          <img
            src="https://www.elandrs.com/upload/prd/img/984/600/2101556984_0000001.jpg"
            class="card-img-top"
            alt="..."
          ></img>
          <div class="card-body">
            <p class="card-text">메뉴 설명이 들어올 자리</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
