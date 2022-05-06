const mock = [
  {
    seriesName: 'Seria aaaa',

    productImage: require('../../../assets/mockImages/dog_1.png'),
    id: 1,
    altText: 'doggo1',
  },
  {
    seriesName: 'Seria bbbbb',

    productImage: require('../../../assets/mockImages/dog_2.png'),
    id: 2,
    altText: 'doggo2',
  },
  {
    seriesName: 'Seria ccccc',

    productImage: require('../../../assets/mockImages/dog_3.png'),
    id: 3,
    altText: 'doggo3',
  },
  {
    seriesName: 'Seria ddddd',

    productImage: require('../../../assets/mockImages/dog_4.png'),
    id: 4,
    altText: 'doggo4',
  },
  {
    seriesName: 'Seria eeeee',

    productImage: require('../../../assets/mockImages/dog_5.png'),
    id: 5,
    altText: 'doggo4',
  },
  {
    seriesName: 'Seria fffff',

    productImage: require('../../../assets/mockImages/dog_6.png'),
    id: 6,
    altText: 'doggo4',
  },
];
const ProductSeriesPage = (): JSX.Element => {
  return (
    <>
      <div className="container flex max-w-7xl flex-wrap justify-center">
        {mock.map((index) => (
          <div
            key={index.id}
            className="flex h-[445px] w-[350px] flex-col items-center py-9"
          >
            <img
              src={index.productImage}
              alt={index.altText}
              className="mb-20 h-52 w-52 rounded-full"
            />
            <h3 className="text-xl font-bold">{index.seriesName}</h3>
          </div>
        ))}
      </div>
    </>
  );
};
export default ProductSeriesPage;
