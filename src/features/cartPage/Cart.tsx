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
import { useEffect } from 'react';
import { createServer } from 'miragejs';
import { fetchDeliveries } from '../slices/delivery-slice';
import { AppDispatch, RootState } from '../../app/store';

createServer({
  routes() {
    this.get('/api/deliveries', () => [
      {
        id: '0a78645f-f742-4da1-b98f-45a13ecc6de8',
        deliveryName: 'DPD',
        deliveryArea: 'World',
        deliveryPriceEuro: 20.0,
      },
      {
        id: 'd17d00c2-b3ff-4b29-8d64-a67c7c077062',
        deliveryName: 'odbiór osobisty',
        deliveryArea: 'Gdańsk',
        deliveryPriceEuro: 0,
      },
    ]);
    this.get('/api/products', () => [
      {
        id: '1',
        productName: 'Super pałeczki chińskie',
        price: 74.99,
        headDiameter: 32,
        stickLength: 37,
        weight: 31,
        productImage: 'qwertyuiop',
        modifiedAt: '',
        createdAt: '',
        productDescriptionKey: 'supermallets',
        productAltTextKey: 'KM',
        seriesId: 'Beethoven',
      },
      {
        id: '13',
        productName: 'Lody pałeczki',
        price: 0.8,
        headDiameter: 35,
        stickLength: 36,
        weight: 34,
        productImage: 'qwertyuiop',
        modifiedAt: '',
        createdAt: '',
        productDescriptionKey: 'supermallets',
        productAltTextKey: 'KM',
        seriesId: 'Beethoven',
      },
      {
        id: '99',
        productName: 'Pałeczki Major Tom',
        price: 115.0,
        headDiameter: 35,
        stickLength: 36,
        weight: 34,
        productImage: 'qwertyuiop',
        modifiedAt: '',
        createdAt: '',
        productDescriptionKey: 'supermallets',
        productAltTextKey: 'KM',
        seriesId: 'Beethoven',
      },
      {
        id: '14',
        productName: 'Za pałki Spa raliż',
        price: 99.0,
        headDiameter: 35,
        stickLength: 36,
        weight: 34,
        productImage: 'qwertyuiop',
        modifiedAt: '',
        createdAt: '',
        productDescriptionKey: 'supermallets',
        productAltTextKey: 'KM',
        seriesId: 'Beethoven',
      },
    ]);
  },
});
interface delivery {
  id: string;
  deliveryName: string;
  deliveryArea: string;
  deliveryPriceEuro: number;
}

const Cart = () => {
  const dispatch: AppDispatch = useDispatch();

  const cart = useSelector((state: RootState) => state.cart);
  const deliveries = useSelector((state: RootState) => state.deliveries.list);

  useEffect(() => {
    dispatch(fetchDeliveries());
  }, []);

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
                  <td>{product.price.toFixed(2)} €</td>
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

      <div className="flex justify-center">
        <div>
          <div className="form-check">
            {deliveries &&
              deliveries.map((delivery: delivery) => (
                <div key={delivery.id}>
                  <input
                    className="form-check-input float-left mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-full border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label
                    className="form-check-label inline-block text-gray-800"
                    htmlFor="flexRadioDefault1"
                  >
                    {delivery.deliveryName}{' '}
                    {delivery.deliveryPriceEuro.toFixed(2)}€ (
                    {delivery.deliveryArea})
                  </label>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
