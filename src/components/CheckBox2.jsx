// import React from "react";

// const CheckBox2 = () => {
//   return (
//     <div>
//       <input type="checkbox" />
//    </div>>
//   );
// };

// const [IsChecked, setIsChecked] = useState(false);

// const checkHandler = ({ target }) => {
//   setChecked(!IsChecked);
//   checkedItemHandler(issue.id, target.Ischecked);
// };

// const IssueList = () => {
//   const issues = [...Array(10).keys()]; // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

//   return (
//     <>
//       <Header>
//         <input type="checkbox" />
//         <input type="checkbox" checked={IsChecked} onChange={(e) => checkHandler(e)} />;
//       </Header>
//       <List>
//         {issues.map((issue, index) => (
//           <Issue key={index} />
//         ))}
//       </List>
//     </>
//   );
// };

// export default CheckBox2;

// retry
import React, { useState } from "react";

export default function CheckBox2() {
  const [isChecked, setIsChecked] = useState(false);

  const onChange = ({ target }) => {
    target.checked ? isChecked(true) : isChecked(false);
  };
  setIsChecked(isChecked);

  return (
    <div className="CheckBox2">
      <div className="check-state">
        <input type="checkbox" onClick={onChange}></input>
        SMS 수신 동의
      </div>
      {isChecked === true ? "동의" : "비동의"}
    </div>
  );
}

// import React, { useState } from "react";
// import "./styles.css";
// import Dark from "./Dark";
// import Light from "./Light";

// export default function App() {
//   const [isDark, setDark] = useState(false);
//   const onChange = ({ target }) => {
//     target.checked ? setDark(true) : setDark(false);
//   };

//   return (
//     <div className="App">
//       <div className="check-mode">
//         <input type="checkbox" onClick={onChange}></input>
//         다크모드
//       </div>
//       {isDark === true ? '다크모드' : '라이트모드'} // 이렇게 구현 하시면 됩니다. useState로 구분이 가능 합니다.
//     </div>
//   );
// }
