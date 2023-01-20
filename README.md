
# My Kiosk
- 키오스크 기능구현 웹.
-----------
`BE`
- 유현승
- 전지영
- 이성진
`FE`
- 김유래
- 김지석

_기술 스택_ 
```r
1. react
2. react-redux-toolkit
3. react-router-dom
4. axios
5. css(styled-components)
``` 

_기능 소개_
___1. Home(포장,매장)___
- 포장,메뉴를 구분하기 위해  takeOutid를 만들었고 계속해서 페이지를 넘어갈때마다 해당 takeOutId가 유지되도록 만들었음.
- css transition 을 사용해서 움직이게끔 구현함.. 
___2.Menu___
1. 악시오스 get 을 통해 서버에 있는  id,menuName,price,amount,imageUrl 을 받아와서 map함수를 사용해서 메뉴리스트가 보여지게끔 만들었음..
2. 장바구니 버튼 클릭시 해당 id,menuName,price이 장바구니 구역에 표시되도록.
3. 스크롤도 구역에 나눠서 스크롤이 되는 기능을 구현 했음..
4. 수량 + - 버튼 클릭시 해당 메뉴의 가격이 계산이 되도록 만들었고 수량이  0이하로 될때는 자동으로 삭제되는 기능을 구현했고  삭제버튼 기능역시 구현했음...
5. 장바구니에 메뉴가 추가되거나 수량이 변경이 될때마다 total 가격이 계속해서 바뀌는 기능.
6. 취소하기 버튼 클릭시 다시 홈화면으로 가는것...

___3. Order Check___
1. 장바구니에 담았던 menuName, amount, price , tatal 값을 가져와서  화면에 보여주는기능.
2. 상단의 이전버튼 컴포넌트를 만들어서 어느 페이지든 사용할수있게끔 만들었음..

___4. OrderChoice___
1. 비회원 클릭시 바로 결제 진행, 주문완료 페이지

___5. MembershipLogin___
1. 전화번호 입력시 문자는 작성이 안되도록
2. 숫자 입력시 자동으로 하이픈 생성.

___6.MembershipSignUp___
1. 체크박스 true/false 토글 기능..

___7. OrderComplete___
1. 주문완료 alert기능
2. 주문을 계속 할때마다 주문번호가 올라가는 기능..

7. membership login/membershipSignup
