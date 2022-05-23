const AboutMe = () => {
  return (
    <div className="mx-6 my-12 w-full max-w-7xl px-3 md:px-6 lg:px-8">
      <div className="hero-about mx-4 mb-14" />
      <div className=" mx-4 h-[400px] w-1/2 ">
        <p className="mb-10 text-xl">Kim jestem?</p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum,
          reiciendis! Hic reprehenderit impedit numquam ipsa eos, obcaecati
          architecto corporis et.
        </p>
      </div>

      <div className="relative mx-4 mb-14 flex h-[655px] items-center bg-[#ededed]">
        <div className="about-right absolute right-0 -top-[400px] h-[565px] w-[495px]" />
        <div className="about-left h-[550px] w-1/2" />
        <div className="wrap flex w-1/2 flex-col pl-24">
          <p className="mb-10 text-xl">Co robię?</p>
          <p className="pr-4">
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
