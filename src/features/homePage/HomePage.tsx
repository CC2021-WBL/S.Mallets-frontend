// import loader from '../../assets/smalletsLogo.svg';

const HomePage = () => {
  return (
    <>
      <div style={{ position: 'absolute', left: '50%' }}>
        HomePage
        <img
          src={require('../../assets/smalletsLogo.svg')}
          alt="logo"
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
};

export default HomePage;
