const mockImg =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==';

const ProductCard = () => {
  return (
    <div className="flex h-56">
      <img src={mockImg} alt="Red dot" width="215px" className="rounded-full" />
      <div className="card-data flex flex-col gap-5 pl-4">
        <div className="flex h-10 w-[540px] items-center justify-between text-xl  font-bold  leading-6">
          <h3 className="model">Model KH</h3>
          <div className="price h-full w-[122px] rounded-md border border-black p-2 text-center">
            cena: 75 €
          </div>
        </div>
        <p className="text-xl">
          Flanell - like type of sound. Articulate and warm.
        </p>
        <div className="flex justify-between">
          <div>
            <p>Head Diameter: 30 mm Ø</p>
            <p>Stick length: 75 mm</p>
          </div>
          <button className="rounded-md bg-[#232323] px-6 font-bold uppercase text-white">
            Dodaj do koszyka
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
