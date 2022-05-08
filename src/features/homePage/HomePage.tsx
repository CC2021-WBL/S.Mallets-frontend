const HomePage = () => {
  return (
    <>
      HomePage
      <div
        style={{
          position: 'absolute',
          left: '50%',
          width: '100px', // this decides on svg with (and height respectively
          // outline: '.5px dotted grey',
          margin: '0 auto',
        }}
      >
        <svg
          version="1.1"
          viewBox="0 0 110 110"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            transform="translate(-56.666 -83.368)"
            fill="none"
            strokeLinecap="round"
            strokeWidth="10"
          >
            <path
              className="animate-path1dance origin-right"
              d="m157.54 148.49-45.873-24.098m-45.893 3.9379a46.977 46.977 0 0 1 53.303-36.353 46.977 46.977 0 0 1 38.978 53.8 46.977 46.977 0 0 1-0.51569 2.7134"
            />
            <path
              className="animate-path2dance origin-right"
              d="m65.777 128.33 45.892 24.108m45.873-3.9481a46.977 46.977 0 0 1-53.284 36.265 46.977 46.977 0 0 1-38.978-53.8 46.977 46.977 0 0 1 0.49628-2.625"
            />
          </g>
        </svg>
      </div>
    </>
  );
};

export default HomePage;
