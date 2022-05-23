import { useSelector } from 'react-redux';

import { RootState } from '../../app/store';

const addressStyles = 'py-2 px-2';

const DeliveryData = () => {
  const deliveryData = useSelector((state: RootState) => state.deliveryData);
  console.log(deliveryData);
  const {
    name,
    lastname,
    email,
    streetAndHouseNr,
    postalCode,
    city,
    country,
    phoneNumber,
    additional,
  } = deliveryData;

  const addressArray = [
    `${name} ${lastname}`,
    `${streetAndHouseNr}`,
    `${postalCode} ${city}`,
    `${country}`,
    `${email}`,
    `${phoneNumber}`,
    `${additional}`,
  ];
  return (
    <>
      {addressArray.map((data, key) => (
        <p className={addressStyles} key={key}>
          {data}
        </p>
      ))}
    </>
  );
};

export default DeliveryData;
