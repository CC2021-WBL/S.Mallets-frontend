const Backdrop = (prop: { handleNav: () => void }) => {
  return (
    <div
      className="fixed z-[1] bg-black opacity-10 w-full h-full top-0 left-0"
      onClick={prop.handleNav}
      aria-hidden="true"
    ></div>
  );
};

export default Backdrop;
