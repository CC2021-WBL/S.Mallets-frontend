import { Link } from 'react-router-dom';

const ConfirmationPage = () => {
  return (
    <div className="mt-14  max-w-7xl self-start  px-6 text-xl md:px-9 lg:px-12">
      <div className="max-w-[40rem] ">
        <p className="mb-5">Dziękujemy! Twoje zamówienie zostało przyjęte.</p>
        <p className="mb-5">
          Numer zamówienia to <span className="font-bold">11003</span>.
        </p>
        <p className="mb-10">
          Wkrótce na swojego maila dostaniesz informacje o szacowanym czasie
          realizacji i sposobie wysyłki.
        </p>
        <p>
          Jeśli masz jakieś pytania skontaktuj się z nami za pomocą formularza
          kontaktowego.
        </p>

        <div className="mb-10  mt-12 flex h-[3.75rem] max-w-[27.5rem] items-center justify-center rounded bg-black text-white hover:cursor-pointer hover:opacity-75">
          <Link to="/contact">FORMULARZ KONTAKTOWY</Link>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
