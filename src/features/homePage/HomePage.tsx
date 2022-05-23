/* eslint-disable import/named */

import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { AiOutlineClose } from 'react-icons/ai';
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import group from '../../assets/groupLogo.png';
import logosm from '../../assets/logosmall.png';
import { Loader } from '../Loader';

interface IFormValues {
  email: string;
  message: string;
}

const HomePage = () => {
  const { t, i18n } = useTranslation('home');
  const language = i18n.language as 'pl' | 'en';
  const [showModal, setShowModal] = useState<boolean>(false);
  const closeModal = () => {
    setShowModal(false);
  };
  const contactSchema = Yup.object().shape({
    email: Yup.string().email(t('emailError')).required(t('emailError2')),
    message: Yup.string().min(50, t('message')).required(t('message2')),
  });

  const [seriesData, setSeriesData] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    async function fetchSeriesData() {
      try {
        const series = await fetch(
          'https://s-mallets-backend.vercel.app/series/all',
          { method: 'GET', redirect: 'follow' },
        );
        const resJson = await series.json();
        if (series.status === 200) {
          setSeriesData(resJson);
          setIsPending(false);
        } else {
          toast.error(t('toastBad'));
        }
      } catch (error) {
        toast.error(t('toastBad'));
      }
    }
    fetchSeriesData();
  }, []);

  return (
    <div className="mx-auto w-full max-w-7xl">
      <div className="hero relative mx-auto mb-7 flex max-w-7xl flex-col items-end bg-no-repeat pr-8 text-right sm:mb-56 sm:text-white">
        <p className="mb-2.5 mt-16 hidden sm:block">S.MALLETS</p>
        <h1 className="hidden max-w-sm text-5xl font-bold leading-[4.8rem] sm:block">
          Premium quality / fair price
        </h1>
        <div className="absolute inset-x-0 bottom-20 mx-auto flex h-60 max-w-[80%] justify-center rounded-lg bg-[#E5E1C6] bg-opacity-60 from-[#E5E1C6] to-transparent p-10 text-left text-black sm:-bottom-40 sm:justify-start sm:bg-[#EDEDED] sm:bg-gradient-to-b sm:pl-[4.4rem] lg:max-w-[58.7rem]">
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
        <h2 className="mb-9 text-center text-2xl sm:mb-6">{t('subtitle')}</h2>
      </div>
      <div className="relative flex max-w-7xl flex-wrap justify-center sm:mb-16">
        {isPending && <Loader />}
        {seriesData &&
          Array.from(seriesData)
            .sort(() => 0.5 - Math.random())
            .slice(0, 6)
            .map((index: any) => (
              <Link
                key={index.id}
                className="mb-14 flex w-[21.8rem] flex-col items-center py-0 hover:cursor-pointer sm:mb-6 sm:rounded-lg sm:py-9 sm:hover:shadow-lg md:h-[27.8rem]"
                to={`/products-series/${index.seriesName}`}
              >
                <img
                  src={'data:image/png;base64,' + index.seriesImage}
                  alt={index.seriesAltText[language]}
                  className="mb-10 h-52 w-52 rounded-full md:mb-20"
                />
                <h3 className="text-xl font-bold">
                  {index.seriesName.replace('-', ' ')}
                </h3>
              </Link>
            ))}
      </div>

      <div className="mx-6 mb-20 flex max-w-7xl justify-between sm:px-3 md:px-6 lg:px-8">
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
            actions.resetForm();
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
              .then(() => {
                actions.setSubmitting(false);
                actions.resetForm();
              });
          }}
        >
          <div className="h-fit-content mx-auto w-11/12 md:w-8/12 lg:w-7/12 lg2:w-1/2 ">
            <h2 className="pb-7 text-2xl">{t('more')}</h2>
            <h3 className="pb-7">{t('contactForm')}</h3>
            {showModal ? (
              <div
                onClick={closeModal}
                onKeyDown={closeModal}
                role="button"
                tabIndex={0}
              >
                <div className="fixed top-0 left-0  z-20 h-full w-full bg-black opacity-20" />
                <div
                  className="bg- fixed top-1/2 left-1/2  z-30 flex h-40 w-10/12 -translate-y-1/2 -translate-x-1/2 items-center justify-center rounded-lg bg-stone-200 p-6 text-center shadow-xl hover:cursor-default sm:h-60 sm:p-8 sm:text-lg md:text-xl lg:text-2xl lg2:w-1/2 "
                  onClick={(e: any) => e.stopPropagation()}
                  onKeyDown={(e: any) => e.stopPropagation()}
                  role="button"
                  tabIndex={0}
                  style={{ backgroundImage: `url(${logosm})` }}
                >
                  {t('modal')}
                  <button
                    onClick={closeModal}
                    onKeyDown={closeModal}
                    aria-label="close handler"
                    className="absolute top-4 right-4 text-xl sm:top-10 sm:right-10"
                  >
                    <AiOutlineClose />
                  </button>
                </div>
              </div>
            ) : null}
            <Form className="flex flex-col">
              <Field
                id="email"
                name="email"
                placeholder="Email"
                className=" flex h-[3.75rem]  border-b border-solid border-black bg-[#F0F0F0] p-6 "
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
                className="mt-9 h-56 border-b border-solid border-black bg-[#F0F0F0] p-6 "
              />

              <ErrorMessage
                component="a"
                name="message"
                className="mt-3 text-red-600"
              />

              <button
                type="submit"
                className="mt-6 h-[3.75rem] w-full rounded bg-black text-white hover:opacity-75"
              >
                {t('send')}
              </button>
            </Form>
          </div>
        </Formik>
        <div className="circle hidden w-[50%] lg2:block" />
      </div>
    </div>
  );
};

export default HomePage;
