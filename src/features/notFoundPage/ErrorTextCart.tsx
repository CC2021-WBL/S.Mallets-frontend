import ellipse from '../../assets/ellipse.png';

function ErrorTextCart(prop: { mainText: string; subtext: string }) {
  return (
    <>
      <img
        src={ellipse}
        alt="decoration logo"
        className="pb-8 pt-12"
        aria-hidden="true"
      />
      <h1 className="pb-3 text-4xl font-normal leading-[3rem]">
        {prop.mainText}
      </h1>
      <h3 className="pb-14 text-2xl font-bold leading-7">{prop.subtext}</h3>
    </>
  );
}

export default ErrorTextCart;
