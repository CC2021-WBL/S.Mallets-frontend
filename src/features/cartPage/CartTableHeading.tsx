const CartTableHeading = () => {
  return (
    <thead className="table-head w-full">
      <tr>
        <th></th>
        <th scope="col" className="font-thin">
          Nazwa serii
        </th>
        <th scope="col" className="font-thin">
          Model
        </th>
        <th scope="col" className="font-thin">
          Średnica
        </th>
        <th scope="col" className="font-thin">
          Długość kijka
        </th>
        <th scope="col" className="font-thin">
          Waga
        </th>
        <th scope="col" className="font-thin">
          Sztuk
        </th>
        <th scope="col" className="font-thin">
          Cena
        </th>
        <th scope="col" className="font-thin">
          Łącznie
        </th>
        <th></th>
      </tr>
    </thead>
  );
};
export default CartTableHeading;
