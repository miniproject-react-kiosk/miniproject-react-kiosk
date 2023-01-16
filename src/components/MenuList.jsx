import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components';
import AddCart from '../components/AddCart';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BiWon } from 'react-icons/bi';
// import menuListReducer from '../redux/modules/MenuListReducer';

export default function MenuList() {
  //조회...
  const [menuLists, setMenuLists] = useState(null);

  const fetchTodos = async () => {
    const { data } = await axios.get('http://localhost:3001/MenuList');
    setMenuLists(data);
  };

  useEffect(() => {
    setMenuLists();
    fetchTodos();
  }, []);
  console.log(menuLists);
  return (
    <div class='row row-cols-1 row-cols-md-4 g-4'>
      {menuLists?.map((menuList) => (
        <div>
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
                    <StAddCartButton>
                      {' '}
                      <AddCart />
                    </StAddCartButton>
                  </StCardText>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
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
