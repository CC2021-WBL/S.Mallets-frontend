import inputStyle from './inputStyle';

inputStyle;
const CartPage = () => {
  return (
    <>
      <div>CartPage</div>
      <div className="mx-8 my-8 w-auto">
        Strona główna {'>'} Koszyk {'>'}
        <b> Zarejestruj się</b>
      </div>
      <form>
        <div className="mx-8 my-4 flex flex-col">
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
          <button className="bg p- h-16 w-96 bg-black font-bold text-white hover:bg-slate-800">
            ZAREJESTRUJ SIĘ
          </button>
        </div>
      </form>
    </>
  );
};
export default CartPage;
