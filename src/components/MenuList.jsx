import React, { useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components';
import AddCart from '../components/AddCart';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BiWon } from 'react-icons/bi';
// import menuListReducer from '../redux/modules/menuListReducer';

export default function MenuList() {
  //조회...
  const [menuLists, setMenuLists] = useState(null);

  //버튼 클릭시 추가 기능..
  // const [menuList, dispatch] = useReducer(menuListReducer, [
  //   { menu: '맥날1', price: 1000 },
  //   { menu: '맥날2', price: 2000 },
  //   { menu: '맥날3', price: 3000 },
  //   { menu: '맥날4', price: 4000 },
  // ]);

  const [cartList, setCartList] = useState([
    { menu: '맥날1', price: 1000 },
    { menu: '맥날2', price: 2000 },
    { menu: '맥날3', price: 3000 },
    { menu: '맥날4', price: 4000 },
  ]);

  const handleAdd = (e) => {
    console.log(e);

    // setCartList([...cartList, e]);
    // console.log(cartList);

    // const menu = 1;
    // const price = 1;

    // dispatch({ type: 'added', cartList });
  };

  const fetchTodos = async () => {
    const { data } = await axios.get('http://localhost:3001/MenuList');
    setMenuLists(data);
  };

  useEffect(() => {
    setMenuLists();
    fetchTodos();
  }, []);
  // console.log(menuLists);
  return (
    //TODO: map함수, 각각 속성값 접근 방법.
    <div class='row row-cols-1 row-cols-md-3 g-4'>
      {menuLists?.map((menuList) => {
        // console.log(menuList);
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
                    <p>{menuList.menu}</p>
                  </StCardTitle>
                  <StCardText>
                    <p class='card-text'>
                      {menuList.price}
                      <BiWon />
                    </p>
                    <StAddCartButton
                      onClick={() => {
                        handleAdd(menuList);
                      }}
                    >
                      {' '}
                      <AddCart />
                    </StAddCartButton>
                  </StCardText>
                </div>
              </div>
            </div>
          </div>
        );
      })}
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
