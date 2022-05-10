const CartPage = () => {
  return (
    <>
      <div>CartPage</div>
      <div className="mx-8 my-8 w-auto">
        Strona główna {'>'} Koszyk {'>'}
        <b> Zarejestruj się</b>
      </div>
      <form>
        <div className="form-wrapper m-[1rem_2rem_4rem_2rem] flex flex-col">
          <input type="text" placeholder="Imię" className="form-input"></input>
          <input
            type="text"
            placeholder="Nazwisko"
            className="form-input"
          ></input>
          <input
            type="text"
            placeholder="Adres Email"
            className="form-input"
          ></input>
          <input type="text" placeholder="Hasło" className="form-input"></input>
          <button className="btn-primary">ZAREJESTRUJ SIĘ</button>
        </div>
      </form>
    </>
  );
};
export default CartPage;
