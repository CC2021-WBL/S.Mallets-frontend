import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { AppDispatch, RootState } from '../../app/store';
import { fetchDeliveries } from '../deliveryPage/deliverySlice';

interface delivery {
  id: string;
  deliveryName: string;
  deliveryArea: string;
  deliveryPriceEuro: number;
}
const CartDeliveries = () => {
  const dispatch: AppDispatch = useDispatch();
  const deliveries = useSelector((state: RootState) => state.deliveries.list);

  useEffect(() => {
    dispatch(fetchDeliveries());
  }, []);

  return (
    <div className=" my-5 flex flex justify-center justify-between rounded-2xl border-2 border-black p-4">
      <div>
        <div className="form-check">
          {deliveries &&
            deliveries.map((delivery: delivery) => (
              <div key={delivery.id}>
                <input
                  className="form-check-input checked:border-black-600 border-black-300 float-left mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-full border bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:bg-slate-900 focus:outline-none"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label
                  className="form-check-label inline-block text-gray-800"
                  htmlFor="flexRadioDefault1"
                >
                  {delivery.deliveryName}{' '}
                  {Number(delivery.deliveryPriceEuro).toFixed(2)}€ (
                  {delivery.deliveryArea})
                </label>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
export default CartDeliveries;
