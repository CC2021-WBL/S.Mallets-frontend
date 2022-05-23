const AboutMe = () => {
  return (
    <div className="mx-6 my-12 w-full max-w-7xl px-3 md:px-6 lg:px-8">
      <div className="hero-about mx-4 mb-14" />
      <div className=" mx-4 mb-14 h-fit w-full md:w-1/2 lg2:mb-0 lg2:h-[400px] ">
        <p className="mb-10 text-xl">Kim jestem?</p>
        <p className="">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum,
          reiciendis! Hic reprehenderit impedit numquam ipsa eos, obcaecati
          architecto corporis et.
        </p>
      </div>

      <div className="relative mx-4 mb-14 flex h-[500px] flex-col items-center bg-[#ededed] lg:h-[655px] lg:flex-row">
        <div className="about-right absolute right-0 -top-[400px] hidden h-[565px] w-[495px] lg2:block" />
        <div className="about-left mb-14  h-1/2 w-full lg:mb-0 lg:h-[550px] lg:w-1/2 " />
        <div className="wrap flex w-full flex-col lg:w-1/2 lg:pl-24">
          <p className="mb-10 text-xl">Co robię?</p>
          <p className="pr-4 pb-4 md:pb-0">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum,
            reiciendis! Hic reprehenderit impedit numquam ipsa eos, obcaecati
            architecto corporis et.
          </p>
        </div>
      </div>
      <div className="about-sticks mx-4 " />
    </div>
  );
};
export default AboutMe;
