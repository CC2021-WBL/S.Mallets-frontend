const mockImg =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==';

const ProductCard = () => {
  return (
    <>
      <div
        className="flex max-w-[810px] grow
     flex-col justify-between p-6 sm:h-56 sm:flex-row sm:p-3"
      >
        <div className="md:h-48 md:w-48">
          <img
            src={mockImg}
            alt="Red dot"
            className="sm:mb:0 mb-3 h-32 w-32 rounded-full shadow-none transition-shadow duration-300 
          ease-in-out hover:shadow-xl  sm:h-48 sm:w-48"
          />
        </div>
        <div className="card-data flex flex-col gap-5 sm:pl-4">
          <div className="flex h-10 items-center justify-between text-xl font-bold leading-6">
            <h3 className="model">Model KH</h3>
            <div className="price h-full w-32 rounded-md border border-black p-2 text-center">
              cena: 75 €
            </div>
          </div>
          <p className="text-lg sm:pr-20 sm:text-xl">
            Flanell - like type of sound. Articulate and warm.
          </p>
          <div className="flex h-fit flex-col sm:h-12 sm:flex-row sm:justify-between">
            <div>
              <p className="py-1 text-sm sm:py-0 sm:text-base">
                Head Diameter: 30 mm Ø
              </p>
              <p className="text-sm sm:py-0 sm:text-base">
                Stick length: 75 mm
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
    </>
  );
};

export default ProductCard;
