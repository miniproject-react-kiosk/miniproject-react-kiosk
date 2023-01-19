import 'bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components';
import AddCart from '../components/AddCart';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BiWon } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/modules/menuListSlice';
// import menuListReducer from '../redux/modules/menuListReducer';

export default function MenuList() {
  //조회...
  const dispatch = useDispatch();
  const [menuLists, setMenuLists] = useState(null);

  const [addedIds, setAddedIds] = useState([]);
  //FIXME:
  const handleAdd = (menu) => {
    const addedIdx = addedIds.findIndex((id) => id === menu.id);
    if (addedIdx === -1) {
      dispatch(addCart({ ...menu, amount: 1 }));
      setAddedIds([...addedIds, menu.id]);
    } else {
      dispatch(incrementAmount(menu.id));
    }
  };
  const incrementAmount = (id) => {
    return {
      type: 'increment',
      payload: id,
    };
  };

  //추가버튼 기능...
  // const handleAdd = (menu) => {
  //    dispatch(addCart(menu));
  //   // console.log(e);
  // };

  const fetchTodos = async () => {
    const { data } = await axios.get('http://localhost:3001/MenuList');
    // const { data } = await axios.get('http://13.209.12.254/store/menus');

    // console.log(data);s
    setMenuLists(data);
  };

  useEffect(() => {
    setMenuLists();
    fetchTodos();
  }, []);
  // console.log(menuLists);

  return (
    //TODO: map함수, 각각 속성값 접근 방법.
    // <<<<<<< HEAD
    //     <div class='row row-cols-1 row-cols-md-3 g-4'>
    //       {menuLists?.map((menuList) => {
    //         // console.log(menuList);
    //         return (
    //           <div key={menuList.id}>
    //             <div class='col'>
    //               <div class='card h-40'>
    //                 <img
    //                   src={menuList.imageUrl}
    //                   class='card-img-top'
    //                   alt='...'
    //                 ></img>
    //                 <div class='card-body'>
    //                   <StCardTitle>
    //                     {/* <h5 class="card-title">맥크리스피 디럭스 버거</h5> */}
    //                     <p>{menuList.menuName}</p>
    //                   </StCardTitle>
    //                   <StCardText>
    //                     <p class='card-text'>
    //                       <BiWon />
    //                       {menuList.price}
    //                     </p>
    //                     <StAddCartButton
    //                       onClick={() => {
    //                         handleAdd(menuList);
    //                       }}
    //                     >
    //                       {' '}
    //                       <AddCart />
    //                     </StAddCartButton>
    //                   </StCardText>
    // =======

    <div>
      {/*가로 스크롤 그거....어떻게 하는건데... (feat.bootstrap*/}
      {/* <StScrollHorizontal> */}
      <div class='row row-cols-1 row-cols-md-4 g-4'>
        {/* <div class="row row-cols-auto"> */}
        {menuLists?.map((menuList) => {
          // console.log(menuList);
          return (
            <div key={menuList.id}>
              <div class='col'>
                <div class='card h-40'>
                  <img
                    src={menuList.imageUrl}
                    class='card-img-top'
                    alt='...'
                  ></img>
                  <div class='card-body'>
                    <StCardTitle>
                      {/* <h5 class="card-title">맥크리스피 디럭스 버거</h5> */}
                      <p>{menuList.menuName}</p>
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
        <StEmptyBox>
          <div>{/* 메뉴 스크롤을 위핸 빈 박스 생성 */}</div>
        </StEmptyBox>
      </div>
      {/* </StScrollHorizontal> */}
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

const StEmptyBox = styled.div`
  display: flex;
  height: 400px;
`;

// const StScrollHorizontal = styled.div`
//   display: flex;
//   /* width: 500px; */
//   /* padding: 20px; */
//   overflow: scroll;
//   color: #112031;
//   background: #f0d9ff;
//   border: 1px solid #000;
//   /* 가로 스크롤 */
//   overflow: auto;
//   white-space: nowrap;
//   overflow-x:auto;
//    font-size:0;
// `;
