import { useState } from 'react';
import { useSelector } from 'react-redux';

import CounterButton from './CounterButton';

export default function CartList() {
  const globaladdCart = useSelector((state) => state.menuList.menuList);
  //plus카운트 props로 보내는작업중..
  const [test, setTest] = useState(globaladdCart);
  const plusAmount = (id) => {
    const changeTest = test.map((x) => {
      if (x.id === id) {
        const changedTargetMenu = { ...x, amount: x.amount + 1 };
        return changedTargetMenu;
      }

      return x;
    });
    setTest(changeTest);
  };
  return (
    <div>
      {globaladdCart?.map((menu) => {
        // console.log(menu);
        return (
          <div key={menu.id}>
            <CounterButton item={menu} plusAmount={plusAmount}></CounterButton>
          </div>
        );
      })}
    </div>
  );
}
