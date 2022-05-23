import { DeliDataInterface } from '../deliveryPage/deliveryDataSlice';

const addressStyles = 'py-2 px-2';

const DeliveryData = (prop: { deliveryData: DeliDataInterface }) => {
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
