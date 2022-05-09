import inputStyle from './inputStyle';

inputStyle;
const CartPage = () => {
  return (
    <>
      <div>CartPage</div>
      <div className="w-auto mx-8 my-8">
        Strona główna {'>'} Koszyk {'>'}
        <b> Zarejestruj się</b>
      </div>
      <form>
        <div className="flex flex-col mx-8 my-4">
          <label>
            <input
              type="text"
              placeholder="Imię"
              className={inputStyle}
            ></input>
          </label>
          <label>
            <input
              type="text"
              placeholder="Nazwisko"
              className={inputStyle}
            ></input>
          </label>
          <label>
            <input
              type="text"
              placeholder="Adres Email"
              className={inputStyle}
            ></input>
          </label>
          <label>
            <input
              type="text"
              placeholder="Hasło"
              className={inputStyle}
            ></input>
          </label>
          <button className="bg-black bg hover:bg-slate-800 text-white font-bold h-16 w-96 p-">
            ZAREJESTRUJ SIĘ
          </button>
        </div>
      </form>
    </>
  );
};
export default CartPage;
