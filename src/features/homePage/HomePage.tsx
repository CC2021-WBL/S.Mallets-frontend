import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useTranslation } from 'react-i18next';

import group from '../../assets/groupLogo.png';
import { mock } from '../products/productSeries/mockSeries';

const HomePage = () => {
  const { t } = useTranslation('home');
  const contactSchema = Yup.object().shape({
    email: Yup.string().email(t('emailError')).required(t('emailError2')),
    message: Yup.string().min(50, t('message')).required(t('message2')),
  });
  return (
    <>
      <div className="hero relative mx-auto  mb-[15.6rem] flex max-w-7xl flex-col items-end bg-no-repeat pr-8 text-right text-white">
        <p className="mb-2.5 mt-16">S.MALLETS</p>
        <h1 className="max-w-sm text-6xl font-bold leading-[4.8rem]">
          Premium quality / fair price
        </h1>

        <div className="absolute inset-x-0 -bottom-40 mx-auto flex h-60 max-w-[80%] justify-center rounded-lg bg-[#EDEDED] p-10 text-left text-black sm:justify-start sm:pl-[4.4rem] lg:max-w-[58.7rem]">
          <blockquote>
            <p className="mb-5 max-w-[17rem]">{t('opinion')}</p>
            <p className="font-bold">Klemens Wariat</p>
          </blockquote>
        </div>

        <img
          src={group}
          alt="decoration logo"
          className="absolute right-[2.8rem] -bottom-[15.6rem] z-50 hidden  xl:block"
          aria-hidden="true"
        />
      </div>

      <div>
        <h2 className="ml-6 mb-9 text-2xl sm:mb-0">{t('subtitle')}</h2>
      </div>
      <div className=" relative mb-[100px] flex max-w-7xl flex-wrap justify-center">
        {mock
          .sort(() => 0.5 - Math.random())
          .slice(0, 6)
          .map((index) => (
            <div
              key={index.id}
              className="flex h-[27.8rem] w-[21.8rem] flex-col items-center py-0 sm:py-9"
            >
              <img
                src={index.productImage}
                alt={index.altText}
                className="mb-20 h-52 w-52 rounded-full"
              />
              <h3 className="text-xl font-bold">{index.seriesName}</h3>
            </div>
          ))}
      </div>

      <div className=" mx-6 mb-[50px] flex max-w-7xl justify-between sm:px-3 md:px-6 lg:px-8">
        <Formik
          initialValues={{
            email: '',
            message: '',
          }}
          validationSchema={contactSchema}
          onSubmit={(values) => {
            alert(JSON.stringify(values, null, 2));
          }}
        >
          <div className="h-fit-content  w-full lg:w-[50%] ">
            <h2 className="pb-7 text-2xl">{t('more')}</h2>
            <h3 className="pb-7">{t('contactForm')}</h3>

            <Form className="flex flex-col">
              <Field
                id="email"
                name="email"
                placeholder="Email"
                className=" flex h-[3.75rem]  bg-[#F0F0F0] p-6 text-xs"
              />
              <ErrorMessage
                component="a"
                name="email"
                className="mt-3 text-red-600"
              />

              <Field
                name="message"
                component="textarea"
                placeholder={`${t('message2')}`}
                className="mt-9 h-56 bg-[#F0F0F0] p-6 text-xs"
              />

              <ErrorMessage
                component="a"
                name="message"
                className="mt-3 text-red-600"
              />

              <button
                type="submit"
                className="mt-6 h-20 w-full bg-black text-white"
              >
                {t('send')}
              </button>
            </Form>
          </div>
        </Formik>
        <div className="circle hidden w-[50%] lg:block" />
      </div>
    </>
  );
};

export default HomePage;
