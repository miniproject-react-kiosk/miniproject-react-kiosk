
# My Kiosk
-----------
`BE`
- 유현승
- 전지영
- 이성진

`FE`
- 김유래
- 김지석

_________________
# 기술 스택 
```r
1. react
2. react-redux-toolkit
3. react-router-dom
4. axios
5. css(styled-components)
``` 
________________________
# 기능 소개

___1. Home(포장,매장)___

1. 포장,메뉴를 구분하기 위해  takeOutid를 만들었고 계속해서 
 페이지를 넘어갈때마다 해당 takeOutId가 유지되도록 만들었음.
2. css transition 을 사용해서 움직이게끔 구현함.. 

___2.Menu___

1. 메뉴리스트.................
2. 장바구니 버튼 클릭시 해당 id,menuName,price이 장바구니 구역에 표시되도록.
3. 장바구니 구역, 메뉴리스트 구역 따로 스크롤이 되는 기능
4. 수량 + - 버튼 클릭시 해당 메뉴의 가격이 계산이 되도록 만들었고 수량이  0이하로 될때는 자동으로 삭제되는 기능
5. 삭제 버튼 기능
6. 장바구니에 메뉴추가,수량 변경시 total 가격 계속해서 계산된 값으로 보여주는 기능
7. 취소하기 버튼 기능.

___3. Order Check___

1. 장바구니에 있던 menuName, amount, price , tatal 값을 가져와서  화면에 보여주는기능.
2. (이전버튼)  컴포넌트를 만들어서 어느 페이지든 사용할수있게끔 만들었음..


___4. OrderChoice___

1. 비회원 클릭시 바로 결제 진행-> 주문완료 페이지

___5. MembershipLogin___

1. 전화번호 입력시 문자는 작성이 안되도록
2. 숫자 입력시 자동으로 하이픈 생성.

___6.MembershipSignUp___

1. 체크박스 true/false 토글 기능..


___7. OrderComplete___

1. 주문완료 alert기능
2. 주문을 계속 할때마다 주문번호가 올라가는 기능..

__________________
# overview
![image](https://user-images.githubusercontent.com/86154028/213645304-44874450-beb8-491f-8d07-ea40881623b2.png)
![image](https://user-images.githubusercontent.com/86154028/213645401-2e6cfbfd-a53e-4844-a0a8-b1b56848c376.png)


![image](https://user-images.githubusercontent.com/86154028/213645632-ab8cc75c-3ee3-4052-8720-005b8abe270c.png)
![image](https://user-images.githubusercontent.com/86154028/213645670-5a9fbeb4-b5cd-4698-998b-efbf39dada62.png)
![image](https://user-images.githubusercontent.com/86154028/213645565-5e136579-8d00-4f1d-a3d9-015a58513d0b.png)



