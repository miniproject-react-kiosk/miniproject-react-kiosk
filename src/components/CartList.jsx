import styled from "styled-components";
import { BsTrash } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { deleteCart } from "../redux/modules/menuListSlice";
import { upButton } from "../redux/modules/menuListSlice";
import { useState } from "react";
import CounterButton from "./CounterButton";

export default function CartList() {
  const globaladdCart = useSelector((state) => state.menuList.menuList);
  const dispatch = useDispatch();

  // +버튼 기능
  const [amount, setAmount] = useState(1);

  //삭제 기능
  const handledDelete = (id) => {
    dispatch(deleteCart(id));
  };

  return (
    <div>
      {globaladdCart?.map((menu) => {
        // console.log(menu);
        return (
          <div key={menu.id}>
            <StCartList>
              <StCartListMenu>
                <h2>{menu.menuName}</h2> <div>{menu.price * amount}</div>
              </StCartListMenu>

              <CounterButton item={menu.amount}>s</CounterButton>
              <StCartListDelete
                onClick={() => {
                  handledDelete(menu.id);
                }}
              >
                <BsTrash />
              </StCartListDelete>
            </StCartList>
          </div>
        );
      })}
    </div>
  );
}

// css 구역
const StCartList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  align-items: center;
  padding: 10px;
  height: 80px;
`;

const StCartListMenu = styled.div`
  flex-basis: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: solid 2px #c0c0c0;
  border-radius: 10px;
  height: 60px;
  background-color: #c0c0c0;
  padding: 20px;

  /* display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: skyblue;
  align-items: center; */
`;
// const StCartListControl = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-evenly;
//   /* border: solid 2px gray; */

//   align-items: center;
//   flex-basis: 30%;
//   height: 60px;
//   /* margin: 0 20px 0 20px; */
// `;

// const StCartListControlBox = styled.div`
//   margin: 5px;
//   border: solid 2px white;
//   border-radius: 10px;
//   height: 60px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-basis: 22%;
//   background-color: white;
//   cursor: pointer;
//   &:hover {
//     border: solid 2px #ffe600e2;

//     background-color: #ffe600e2;
//     transition: all 300ms ease;
//     /* transform: rotate(-30deg) scale(1.2); */
//   }
// `;

// const StCartListControlBox2 = styled.div`
//   margin: 5px;
//   border: solid 2px #c0c0c0;
//   border-radius: 10px;
//   height: 60px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-basis: 22%;

//   background-color: #c0c0c0;
// `;

const StCartListDelete = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: 10%;
  border: solid 2px white;
  border-radius: 10px;
  height: 60px;
  background-color: white;
  font-size: 40px;
  cursor: pointer;
  &:hover {
    border: solid 2px #ffe600e2;

    background-color: #ffe600e2;
    transition: all 300ms ease;
    /* transform: rotate(-30deg) scale(1.2); */
  }
`;
