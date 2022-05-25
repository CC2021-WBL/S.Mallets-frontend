import { DeliDataInterface } from '../deliveryPage/deliveryDataSlice';
import { UserStateTypes } from './userSlice';

export const refactorUserData = (user: UserStateTypes): DeliDataInterface => {
  const base = {
    name: user.name,
    lastname: user.lastname,
    email: user.email,
    phoneNumber: user.phoneNumber,
  };
  if (user.address) {
    return {
      ...base,
      country: user.address.country,
      city: user.address.city,
      streetAndNumber: user.address.streetAndNumber,
      zipCode: user.address.zipCode,
      messageFromUser: '',
    };
  }
  return {
    ...base,
    country: '',
    city: 'no address',
    streetAndNumber: '',
    zipCode: '',
    messageFromUser: '',
  };
};
