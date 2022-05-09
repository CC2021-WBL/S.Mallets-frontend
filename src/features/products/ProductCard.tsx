interface productDataType {
  id: number;
  productName: string;
  productDescription: string;
  headDiameter: number;
  stickLength: number;
  weight: number;
  price: number;
  productImage: string;
  altText: string;
  seriesId: string;
}

const ProductCard = (prop: { productObject: productDataType }) => {
  return (
    <div className="w-screen">
      <div
        className="flex w-full max-w-[810px] grow
     flex-col justify-between p-6 sm:h-fit sm:w-full sm:p-6 md:flex-row md:p-10"
      >
        <div className="md:w-64">
          <img
            src={prop.productObject.productImage}
            alt="Red dot"
            className="mb-3 h-36 w-full shadow-none transition-shadow duration-300 ease-in-out hover:shadow-xl 
          md:mb-0 md:h-full md:w-full"
          />
        </div>
        <div className="card-data flex w-full flex-col justify-between gap-5 md:pl-4">
          <div className="flex h-10 items-center justify-between text-xl font-bold leading-6">
            <h3 className="model">{prop.productObject.productName}</h3>
            <div className="price h-full rounded-md border border-black p-2 text-center">
              {prop.productObject.price} € / para
            </div>
          </div>
          <p className="text-lg sm:pr-20 sm:text-xl">
            {prop.productObject.productDescription}
          </p>
          <div className="flex h-fit flex-col sm:h-12 sm:flex-row sm:justify-between">
            <div>
              <p className="py-1 text-sm sm:py-0 sm:text-base">
                Head Diameter: {prop.productObject.headDiameter} mm Ø
              </p>
              <p className="text-sm sm:py-0 sm:text-base">
                Stick length: {prop.productObject.stickLength} cm
              </p>
            </div>
            <button
              className="mt-10 h-12 w-56 rounded-md bg-[#232323] px-6 font-bold uppercase text-white shadow-none transition-shadow duration-300 
          ease-in-out hover:shadow-xl sm:mt-0"
            >
              Dodaj do koszyka
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
