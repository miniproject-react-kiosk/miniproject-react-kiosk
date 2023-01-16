import styled from 'styled-components';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCart } from '../redux/modules/menuListSlice';

export default function CartList() {
  const globaladdCart = useSelector((state) => state.menuList.menuList);
  const dispatch = useDispatch();
  const handledDelete = (id) => {
    dispatch(deleteCart(id));
  };

  return (
    <div>
      {globaladdCart?.map((menu) => (
        <div key={menu.id}>
          <StCartList>
            <StCartListMenu>
              <h2>{menu.menu}</h2> <div>{menu.price * menu.count}</div>
            </StCartListMenu>

            <StCartListControl>
              <StCartListControlBox
                onClick={() => {
                  if (menu.count === 0) {
                    //FIXME:  0 밑으로 갈때는 삭제하는 함수를 반환하게끔.. 만들기!
                    menu.count = 0;
                  } else {
                    menu.count = menu.count - 1;
                  }
                }}
              >
                -
              </StCartListControlBox>
              <StCartListControlBox2> {menu.count}</StCartListControlBox2>
              <StCartListControlBox
                onClick={() => {
                  menu.count = menu.count + 1;
                }}
              >
                +
              </StCartListControlBox>
            </StCartListControl>

            <StCartListDelete
              onClick={() => {
                handledDelete(menu.id);
              }}
            >
              <RiDeleteBin5Line />
            </StCartListDelete>
          </StCartList>
        </div>
      ))}
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
  justify-content: space-evenly;
  border: solid 2px #c0c0c0;
  border-radius: 10px;
  height: 60px;
  background-color: #c0c0c0;

  /* display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: skyblue;
  align-items: center; */
`;
const StCartListControl = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  /* border: solid 2px gray; */

  align-items: center;
  flex-basis: 30%;
  height: 60px;
  /* margin: 0 20px 0 20px; */
`;

const StCartListControlBox = styled.div`
  margin: 5px;
  border: solid 2px white;
  border-radius: 10px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: 22%;
  background-color: white;
  cursor: pointer;
  &:hover {
    border: solid 2px #ffe600e2;

    background-color: #ffe600e2;
    transition: all 300ms ease;
    /* transform: rotate(-30deg) scale(1.2); */
  }
`;

const StCartListControlBox2 = styled.div`
  margin: 5px;
  border: solid 2px #c0c0c0;
  border-radius: 10px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: 22%;

  background-color: #c0c0c0;
`;

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
