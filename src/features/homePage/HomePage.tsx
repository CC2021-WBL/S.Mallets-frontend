import group from '../../assets/groupLogo.png';

const HomePage = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl bg-no-repeat  hero flex flex-col items-end text-right text-white pr-8 relative">
        <p className="mb-2.5 mt-16">S.MALLETS</p>
        <h1 className="max-w-sm text-6xl font-bold leading-[4.8rem]">
          Premium quality / fair price
        </h1>

        <div className="max-w-[58.7rem] bg-[#EDEDED] mx-auto h-60 absolute -bottom-40 inset-x-0 text-black flex justify-center text-left pt-10 sm:justify-start sm:pl-[4.4rem] rounded-lg">
          <blockquote>
            <p className=" max-w-[17rem] mb-5 ">
              “To są zajebiste pałeczki. Nie chcę już żadnych innych. Mój
              dyrygent jest wreszcie zadowolony, tylko Smallets!”
            </p>
            <p className="font-bold">Klemens Wariat</p>
          </blockquote>
        </div>
        <img
          src={group}
          alt="decoration logo"
          className="z-50 hidden xl:block absolute right-[2.8rem] -bottom-[15.6rem]"
          aria-hidden="true"
        />
      </div>
    </>
  );
};

export default HomePage;
