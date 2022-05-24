import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../app/store';
import {
  Product,
  decrement,
  decrementHeadDiameter,
  decrementStickLength,
  decrementWeight,
  increment,
  incrementHeadDiameter,
  incrementStickLength,
  incrementWeight,
  removeFromCart,
  toggleEdit,
} from './cartSlice';

import { useTranslation } from 'react-i18next';
import toast from 'react-hot-toast';

const CartTableBody = () => {
  const dispatch: AppDispatch = useDispatch();
  const { t } = useTranslation('cart');

  const cart = useSelector((state: RootState) => state.cart);

  return (
    <tbody className="text-center">
      {cart &&
        cart.products.map((product: Product, index: number) => {
          return (
            <tr key={product.id} className="h-14">
              <td>{index + 1}</td>
              <td className="font-semibold uppercase">{product.seriesName}</td>

              <td>
                <div className="flex justify-center font-semibold uppercase">
                  {product.productModel}
                </div>
              </td>
              <td className="relative">
                {!product.edited ? (
                  <div className="flex justify-center font-semibold">
                    {product.headDiameter} mm
                  </div>
                ) : (
                  <div className="flex flex-row items-center justify-center font-semibold">
                    {product.headDiameter} mm
                    <div className="flex flex-col">
                      <button
                        className="absolute bottom-8 right-1/2 -rotate-90"
                        onClick={() =>
                          dispatch(incrementHeadDiameter(product.id))
                        }
                      >
                        {'>'}
                      </button>
                      <button
                        className="absolute right-[48.2%] top-8 rotate-90"
                        onClick={() =>
                          dispatch(decrementHeadDiameter(product.id))
                        }
                      >
                        {'>'}
                      </button>
                    </div>
                  </div>
                )}
              </td>

              <td className="relative">
                {!product.edited ? (
                  <div className="flex justify-center  font-semibold">
                    {product.stickLength.toFixed(1)} cm
                  </div>
                ) : (
                  <div className="a flex flex-row items-center justify-center  font-semibold">
                    {product.stickLength.toFixed(1)} cm
                    <div className="flex flex-col">
                      <button
                        className="absolute bottom-8 right-1/2 -rotate-90"
                        onClick={() =>
                          dispatch(incrementStickLength(product.id))
                        }
                      >
                        {'>'}
                      </button>
                      <button
                        className="absolute right-[48.2%] top-8 rotate-90"
                        onClick={() =>
                          dispatch(decrementStickLength(product.id))
                        }
                      >
                        {'>'}
                      </button>
                    </div>
                  </div>
                )}
              </td>

              <td className="relative">
                {!product.edited ? (
                  <div className="flex justify-center  font-semibold">
                    {product.weight} g
                  </div>
                ) : (
                  <div className="a flex flex-row items-center justify-center  font-semibold">
                    {product.weight} g
                    <div className="flex flex-col">
                      <button
                        className="absolute bottom-8 right-1/2 -rotate-90"
                        onClick={() => dispatch(incrementWeight(product.id))}
                      >
                        {'>'}
                      </button>
                      <button
                        className="absolute right-[48.2%] top-8 rotate-90"
                        onClick={() => dispatch(decrementWeight(product.id))}
                      >
                        {'>'}
                      </button>
                    </div>
                  </div>
                )}
              </td>

              <td className="relative">
                <div className="a flex flex-row items-center justify-center font-semibold">
                  {product.quantity}
                  <div className="flex flex-col">
                    <button
                      className="absolute bottom-8 right-1/2 -rotate-90"
                      onClick={() => dispatch(increment(product.id))}
                    >
                      {'>'}
                    </button>
                    <button
                      className="absolute right-[48.2%] top-8 rotate-90"
                      onClick={() => dispatch(decrement(product.id))}
                    >
                      {'>'}
                    </button>
                  </div>
                </div>
              </td>
              <td className="font-semibold">{Number(product.price)} €</td>
              <td className="font-semibold">
                {Number(product.price) * product.quantity} €
              </td>
              <td>
                <div className="flex flex-col">
                  <button
                    className="text-xs"
                    onClick={() => dispatch(toggleEdit(product.id))}
                  >
                    {!product.edited ? 'edytuj' : 'zapisz'}
                  </button>
                  <button
                    className="text-xs"
                    onClick={() => {
                      toast.error(t('productRemovedFromCart'));
                      dispatch(removeFromCart(product.id));
                    }}
                  >
                    usuń
                  </button>
                </div>
              </td>
              <td></td>
              <td></td>
            </tr>
          );
        })}
    </tbody>
  );
};
export default CartTableBody;
