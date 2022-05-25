import { Address } from '../userPage/userSlice';
import { DeliDataInterface } from '../deliveryPage/deliveryDataSlice';

export interface options {
  userAddressData?: Address;
  deliveryData: DeliDataInterface;
}

export const createDeliveryData = (options: options) => {
  if (options.deliveryData.name.length !== 0) {
    return options.deliveryData;
  } else if (options.userAddressData) {
    return options.userAddressData as DeliDataInterface;
  }
  return options.deliveryData;
};
