import { useSelector } from 'react-redux';
import Cart from './Cart';
import { RootState } from '../../app/store';

import { NavLink } from 'react-router-dom';

const CartPage = () => {
  const cart = useSelector((state: RootState) => state.cart);

  return (
    <div className="mx-auto w-full max-w-7xl sm:px-3 md:px-6 lg:px-8">
      {cart.counter !== 0 ? (
        <>
          <Cart />
          <NavLink to="/cart/delivery">Dostawa form</NavLink>
          <NavLink to="/cart/delivery/summary">Podsumowanie</NavLink>
        </>
      ) : (
        <div>Koszyk pusty</div>
      )}
    </div>
  );
};
export default CartPage;
