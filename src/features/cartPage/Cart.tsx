import CartDeliveries from './CartDeliveries';
import CartRemoveButton from './CartRemoveButton';
import CartSummaryRow from './CartTableSummaryRow';
import CartTableBody from './CartTableBody';
import CartTableHeading from './CartTableHeading';

interface CartTypes {
  openModalHandler: () => void;
}

const Cart = (prop: CartTypes) => {
  return (
    <div className="p-4">
      <table className="w-full table-auto">
        <CartTableHeading />
        <CartTableBody />
      </table>

      <div className="my-3 flex items-center justify-between ">
        <CartRemoveButton openModalHandler={prop.openModalHandler} />
        <CartDeliveries />
      </div>

      <table className="w-full table-auto">
        <CartSummaryRow />
      </table>
    </div>
  );
};
export default Cart;
