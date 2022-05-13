const Backdrop = (prop: { handleClose: () => void }) => {
  return (
    <div
      className="fixed top-0 left-0 z-20 h-full w-full bg-black opacity-20"
      onClick={prop.handleClose}
      aria-hidden="true"
    ></div>
  );
};

export default Backdrop;
