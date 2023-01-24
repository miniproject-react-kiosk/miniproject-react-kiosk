import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import swal from "sweetalert";

// 마일리지 (Point)적립

function Point() {
  const [point, setPoint] = useState();
  const [numberValue, setNumberValue] = useState("");
  const [tokenValue, setTokenValue] = useState("");

  // useEffect(() => {
  //   axios
  //     .post("http://13.209.12.254/order/points", body, {
  //       withCredsentials: true,
  //     })
  //     .then((response) => {
  //       setPoint(response.data);
  //     });
  // }, []);

  const getDailySales = async () => {
    const body = { phoneNumber: numberValue, token: tokenValue };
    await axios
      .post("http://13.209.12.254/order/points", body, {
        withCredentials: true,
      })
      .then((response) => {
        setPoint(response.data);
      });
  };
  getDailySales();
  console.log("###", point);

  const handleAction = async (numberValue) => {
    if (response.data.httpStatus === 200) {
      swal("적립 완료!", "()원 적립이 완료되었습니다.", "success");
    } else {
      swal(
        "적립 실패!",
        "멤버십 정보가 없습니다. 멤버십에 가입해주세요!",
        "error"
      ).then(function () {});
    }
    console.log(point);

    return swal(
      "포인트 적립 완료!",
      { point },
      "원 적립이 완료되었습니다.",
      "success"
    );
  };
}

export default Point;
