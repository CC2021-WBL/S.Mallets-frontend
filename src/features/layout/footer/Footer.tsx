import { Link } from 'react-router-dom';

import fb from '../../../assets/facebook.png';

const Footer = () => {
  return (
    <footer className="h-[27.8125rem] w-full bg-black text-white ">
      <div className="xl container  mx-auto columns-2 px-[60px] pt-[3.75rem]  sm:px-0">
        <div>
          <h2 className="text-[1.5625rem]">Dane kontaktowe</h2>
          <div className=" leading-[150%]">
            <h4 className="mt-[2.3125rem] font-bold"> S.mallets</h4>
            <h4>Tomasz Skrętkowski</h4>
            <h4>Tel: +48 660 748 918</h4>
            <h4>E-Mail: s.mallets.mail@gmail.com</h4>
          </div>
          <a
            href="https://www.facebook.com/skrettomasz"
            target="_blank"
            rel="noreferrer"
          >
            <img src={fb} alt="facebook" className="mt-[3.75rem]" />
          </a>
        </div>
        <div className="flex break-before-column flex-col items-end gap-y-[2rem]">
          <Link to="/product-series">Produkty</Link>
          <Link to="/about-me">O mnie</Link>
          <Link to="/">Serwis</Link>
          <Link to="/admin">Admin</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
