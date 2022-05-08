const Backdrop = (prop: { handleNav: () => void }) => {
  return (
    <div
      className="fixed top-0 left-0 z-[1] h-full w-full bg-black opacity-20"
      onClick={prop.handleNav}
      aria-hidden="true"
    ></div>
  );
};

export default Backdrop;
