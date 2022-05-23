import { useTranslation } from 'react-i18next';

const AboutMe = () => {
  const { t } = useTranslation('about');
  return (
    <div className="mx-6 my-12 w-full max-w-7xl px-3 md:px-6 lg:px-8">
      <div className="hero-about mx-4 mb-14" />
      <div className=" mx-4 mb-14 h-fit w-full md:w-1/2 lg2:mb-0 lg2:h-[25rem] ">
        <p className="mb-10 text-xl font-bold">{t('who')}</p>
        <p className="w-[80%]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum,
          reiciendis! Hic reprehenderit impedit numquam ipsa eos, obcaecati
          architecto corporis et.
        </p>
      </div>

      <div className="relative mx-4 mb-14 flex h-[31.3rem] flex-col items-center bg-[#ededed] lg:h-[41rem] lg:flex-row">
        <div className="about-right absolute right-0 -top-[25rem] hidden h-[35.3rem] w-[30.9rem] lg2:block" />
        <div className="about-left mb-14  h-1/2 w-full lg:mb-0 lg:h-[34.4rem] lg:w-1/2 " />
        <div className="wrap flex w-full flex-col lg:w-1/2 lg:pl-24">
          <p className="mb-10 text-xl font-bold">{t('what')}</p>
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
