import { useSelector } from 'react-redux';

import { RootState } from '../../app/store';

const addressStyles = 'py-2 px-2';

const DeliveryData = () => {
  const deliveryData = useSelector((state: RootState) => state.deliveryData);

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
  } = deliveryData;

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
