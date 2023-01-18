import { useSelector } from 'react-redux';
import CounterButton from './CounterButton';

export default function CartList() {
  const globaladdCart = useSelector((state) => state.menuList.menuList);

  return (
    <div>
      {globaladdCart?.map((menu) => {
        // console.log(menu);
        return (
          <div key={menu.id}>
            <CounterButton item={menu}></CounterButton>
          </div>
        );
      })}
    </div>
  );
}
