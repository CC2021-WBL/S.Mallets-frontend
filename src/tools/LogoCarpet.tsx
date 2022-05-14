import carpet from '../assets/carpet.png';

const LogoCarpet = (prop: { className: string }) => {
  return <img src={carpet} alt="logo carpet" className={prop.className} />;
};

export default LogoCarpet;
