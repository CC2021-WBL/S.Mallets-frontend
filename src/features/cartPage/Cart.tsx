import { useDispatch, useSelector } from 'react-redux';
import {
  increment,
  decrement,
  incrementHeadDiameter,
  decrementHeadDiameter,
  incrementStickLength,
  decrementStickLength,
  Product,
  removeFromCart,
  clear,
  decrementWeight,
  incrementWeight,
  toggleEdit,
} from '../slices/cart-slice';

const Cart = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const cart = useSelector((state) => state.cart);

  return (
    <div>
      <h1 className="p-8 text-center text-6xl">Cart Page {}</h1>

      <table className="table-auto">
        <thead>
          <tr>
            <th></th>
            <th>Nazwa serii</th>
            <th>Model</th>
            <th>Średnica</th>
            <th>Długość kijka</th>
            <th>Waga</th>
            <th>Sztuk</th>
            <th>Cena</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart &&
            cart.map((product: Product, index: number) => {
              return (
                <tr key={product.id}>
                  <td>{index + 1}</td>
                  <td>{product.seriesId}</td>

                  <td>
                    <div className="flex justify-center">
                      {product.productAltTextKey}
                    </div>
                  </td>
                  <td>
                    {!product.edited ? (
                      <div className="flex justify-center">
                        {product.headDiameter} mm
                      </div>
                    ) : (
                      <div className="a flex flex-row items-center justify-center">
                        {product.headDiameter} mm
                        <div className="flex flex-col">
                          <button
                            onClick={() =>
                              dispatch(incrementHeadDiameter(product.id))
                            }
                          >
                            +
                          </button>
                          <button
                            onClick={() =>
                              dispatch(decrementHeadDiameter(product.id))
                            }
                          >
                            -
                          </button>
                        </div>
                      </div>
                    )}
                  </td>

                  <td>
                    {!product.edited ? (
                      <div className="flex justify-center">
                        {product.stickLength.toFixed(1)} cm
                      </div>
                    ) : (
                      <div className="a flex flex-row items-center justify-center">
                        {product.stickLength.toFixed(1)} cm
                        <div className="flex flex-col">
                          <button
                            onClick={() =>
                              dispatch(incrementStickLength(product.id))
                            }
                          >
                            +
                          </button>
                          <button
                            onClick={() =>
                              dispatch(decrementStickLength(product.id))
                            }
                          >
                            -
                          </button>
                        </div>
                      </div>
                    )}
                  </td>

                  <td>
                    {!product.edited ? (
                      <div className="flex justify-center">
                        {product.weight} g
                      </div>
                    ) : (
                      <div className="a flex flex-row items-center justify-center">
                        {product.weight} g
                        <div className="flex flex-col">
                          <button
                            onClick={() =>
                              dispatch(incrementWeight(product.id))
                            }
                          >
                            +
                          </button>
                          <button
                            onClick={() =>
                              dispatch(decrementWeight(product.id))
                            }
                          >
                            -
                          </button>
                        </div>
                      </div>
                    )}
                  </td>

                  <td>
                    <div className="a flex flex-row items-center justify-center">
                      {product.quantity}
                      <div className="flex flex-col">
                        <button onClick={() => dispatch(increment(product.id))}>
                          +
                        </button>
                        <button onClick={() => dispatch(decrement(product.id))}>
                          -
                        </button>
                      </div>
                    </div>
                  </td>
                  <td>{product.price} €</td>
                  <td>
                    <div className="flex flex-col">
                      <button onClick={() => dispatch(toggleEdit(product.id))}>
                        {!product.edited ? 'edytuj' : 'zapisz zmiany'}
                      </button>
                      <button
                        onClick={() => dispatch(removeFromCart(product.id))}
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
      </table>

      <button
        className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
        onClick={() => dispatch(clear())}
      >
        WYCZYŚĆ KOSZYK
      </button>
    </div>
  );
};
export default Cart;
