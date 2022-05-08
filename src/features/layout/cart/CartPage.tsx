const CartPage = () => {
  const dumStyle = {
    outline: '2px dotted grey',
  };
  const inputStyle = {
    height: '4rem',
    borderBottom: '1px solid black',
    background: '#EDEDED',
    width: '25rem',
    marginBottom: '22px',
    padding: '1rem',
  };
  return (
    <>
      <div>CartPage</div>
      <div
        style={{
          width: 'auto',
          marginTop: '2rem',
          marginLeft: '2rem',
          ...dumStyle,
        }}
      >
        Strona główna Koszyk {'>'}
        <b> Zarejestruj się</b>
      </div>
      <form>
        <div
          className="inputFormsWrapper"
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginLeft: '2rem',
            marginTop: '2rem',
            ...dumStyle,
          }}
        >
          <label>
            <input
              type="text"
              placeholder="Imię"
              style={{ ...inputStyle }}
            ></input>
          </label>
          <label>
            <input
              type="text"
              placeholder="Nazwisko"
              style={{ ...inputStyle }}
            ></input>
          </label>
          <label>
            <input
              type="text"
              placeholder="Adres Email"
              style={{ ...inputStyle }}
            ></input>
          </label>
          <label>
            <input
              type="text"
              placeholder="Hasło"
              style={{ ...inputStyle }}
            ></input>
          </label>
          <button
            style={{
              width: '25rem',
              height: '4rem',
              background: 'black',
              color: 'white',
              ...dumStyle,
            }}
          >
            ZAREJSTRUJ SIĘ
          </button>
        </div>
      </form>
    </>
  );
};
export default CartPage;
