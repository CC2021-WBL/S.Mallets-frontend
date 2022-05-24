import CartTableHeading from './CartTableHeading';
import CartDeliveries from './CartDeliveries';
import CartTableBody from './CartTableBody';
import CartRemoveButton from './CartRemoveButton';

import CartSummaryRow from './CartTableSummaryRow';

const Cart = () => {
  return (
    <div className="p-4">
      <table className="w-full table-auto">
        <CartTableHeading />
        <CartTableBody />
      </table>

      <div className="my-3 flex items-center justify-between ">
        <CartRemoveButton />
        <CartDeliveries />
      </div>

      <table className="w-full table-auto">
        <CartSummaryRow />
      </table>
    </div>
  );
};
export default Cart;
