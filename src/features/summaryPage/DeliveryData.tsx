import { DeliDataInterface } from '../deliveryPage/deliveryDataSlice';
import { userWithOrder } from '../userPage/UserPage';

const addressStyles = 'py-2 px-2';

const DeliveryData = (prop: {
  deliveryData: DeliDataInterface | userWithOrder;
}) => {
  console.log(prop.deliveryData);
  const {
    name,
    lastname,
    email,
    streetAndNumber,
    zipCode,
    city,
    country,
    phoneNumber,
    messageFromUser,
  } = prop.deliveryData;

  const dataArray = [
    `${name} ${lastname}`,
    `${streetAndNumber}`,
    `${zipCode} ${city}`,
    `${country}`,
    `${email}`,
    `${phoneNumber}`,
    `${messageFromUser}`,
  ];
  return (
    <>
      {dataArray.map((data, key) => (
        <p className={addressStyles} key={key}>
          {data}
        </p>
      ))}
    </>
  );
};

export default DeliveryData;
