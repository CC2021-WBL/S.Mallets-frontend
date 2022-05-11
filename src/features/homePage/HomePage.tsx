/* eslint-disable import/named */

import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import group from '../../assets/groupLogo.png';
import { mock } from '../../assets/mockData/mockSeriesData';

interface IFormValues {
  email: string;
  message: string;
}
const HomePage = () => {
  const { t, i18n } = useTranslation('home');
  const contactSchema = Yup.object().shape({
    email: Yup.string().email(t('emailError')).required(t('emailError2')),
    message: Yup.string().min(50, t('message')).required(t('message2')),
  });
  const [showModal, setShowModal] = useState<boolean>(false);
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="hero relative mx-auto  mb-[15.6rem] flex max-w-7xl flex-col items-end bg-no-repeat pr-8 text-right text-slate-500 sm:text-white">
        <p className="mb-2.5 mt-16">S.MALLETS</p>
        <h1 className="max-w-sm text-5xl font-bold leading-[4.8rem]">
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
          className="absolute right-[2.8rem] -bottom-[15.6rem] z-10 hidden  xl:block"
          aria-hidden="true"
        />
      </div>

      <div>
        <h2 className="ml-6 mb-9 text-center text-2xl sm:mb-0 sm:text-left">
          {t('subtitle')}
        </h2>
      </div>
      <div className=" relative mb-[6.3rem] flex max-w-7xl flex-wrap justify-center">
        {mock
          .sort(() => 0.5 - Math.random())
          .slice(0, 6)
          .map((index) => (
            <Link
              key={index.id}
              className="flex h-[27.8rem] w-[21.8rem] flex-col items-center py-0 hover:cursor-pointer hover:shadow-lg sm:py-9"
              to="/product-series"
            >
              <img
                src={index.productImage}
                alt={
                  // index.altText
                  i18n.language === 'en' ? index.altText.en : index.altText.pl

                  // index.altText[i18n.language]
                }
                className="mb-20 h-52 w-52 rounded-full"
              />
              <h3 className="text-xl font-bold">{index.id}</h3>
            </Link>
          ))}
      </div>

      <div className=" mx-6 mb-[3.1rem] flex max-w-7xl justify-between sm:px-3 md:px-6 lg:px-8">
        <Formik
          initialValues={{
            email: '',
            message: '',
          }}
          validationSchema={contactSchema}
          onSubmit={(
            values: IFormValues,
            actions: FormikHelpers<IFormValues>,
          ) => {
            actions.setSubmitting(true);

            setShowModal(true);
            emailjs
              .send(
                'service_ypr0zj8',
                'template_z0d7tqj',
                {
                  email: values.email,
                  message: values.message,
                },
                'user_pR6XzZUshqc9XuxuBLUzf',
              )
              .then(
                () => {
                  actions.setSubmitting(false);
                  actions.resetForm();
                },
                () => {
                  actions.setSubmitting(false);
                },
              );
          }}
        >
          <div className="h-fit-content  w-full lg:w-[50%] ">
            <h2 className="pb-7 text-2xl">{t('more')}</h2>
            <h3 className="pb-7">{t('contactForm')}</h3>
            {showModal ? (
              <div
                className="fixed top-0 left-0  z-20 h-full w-full bg-[#6864649f]"
                onClick={closeModal}
                onKeyDown={closeModal}
                role="button"
                tabIndex={0}
              >
                <div
                  className="  fixed top-[50%] left-[50%]  z-30 flex h-[12.5rem] w-[12.5rem] -translate-y-1/2 -translate-x-1/2 items-center justify-center rounded-lg bg-[#8a8686] p-4 hover:cursor-default sm:h-[50%] sm:w-[50%] "
                  onClick={(e: any) => e.stopPropagation()}
                  onKeyDown={(e: any) => e.stopPropagation()}
                  role="button"
                  tabIndex={0}
                >
                  {t('modal')}
                  <button
                    onClick={closeModal}
                    onKeyDown={closeModal}
                    aria-label="close handler"
                    className="absolute top-10 right-10 text-xl"
                  >
                    X
                  </button>
                </div>
              </div>
            ) : null}
            <Form className="flex flex-col">
              <Field
                id="email"
                name="email"
                placeholder="Email"
                className=" flex h-[3.75rem]  bg-[#F0F0F0] p-6 "
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
                className="mt-9 h-56 bg-[#F0F0F0] p-6 "
              />

              <ErrorMessage
                component="a"
                name="message"
                className="mt-3 text-red-600"
              />

              <button
                type="submit"
                className="mt-6 h-[3.75rem] w-full bg-black text-white hover:opacity-75"
              >
                {t('send')}
              </button>
            </Form>
          </div>
        </Formik>
        <div className="circle hidden w-[50%] lg2:block" />
      </div>
    </>
  );
};

export default HomePage;
