import { NavLink } from 'react-router-dom';

const CartPage = () => {
  return (
    <>
      <h1 className="p-8 text-center text-6xl">Cart Page</h1>
      <NavLink to="/cart/summary">Podsumowanie</NavLink>
    </>
  );
};
export default CartPage;
