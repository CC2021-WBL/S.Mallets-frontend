/* eslint-disable import/named */

import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import { AiOutlineClose } from 'react-icons/ai';
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import LogoCarpet from '../../tools/LogoCarpet';
import logosm from '../../assets/logosmall.png';

interface IFormValues {
  email: string;
  message: string;
}
const ContactPage = () => {
  const { t } = useTranslation(['home', 'navAndFooter']);
  const [showModal, setShowModal] = useState<boolean>(false);
  const closeModal = () => {
    setShowModal(false);
  };
  const contactSchema = Yup.object().shape({
    email: Yup.string().email(t('emailError')).required(t('emailError2')),
    message: Yup.string().min(50, t('message')).required(t('message2')),
  });
  return (
    <div className="relative w-full max-w-7xl">
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
        <div className="h-fit-content  my-14 mx-3 w-11/12 self-start px-3 md:w-8/12 md:px-6 lg:w-7/12 lg:px-8 lg2:w-1/2 ">
          <LogoCarpet className="absolute  -top-[6.5rem] right-12 hidden lg:block " />
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
              className=" flex h-[3.75rem]  border-b border-solid border-black bg-[#F0F0F0] p-6 focus:border-transparent focus:outline focus:outline-2 focus:outline-black"
            />
            <ErrorMessage
              component="a"
              name="email"
              className="mt-3 text-xs text-red-600"
            />

            <Field
              name="message"
              component="textarea"
              placeholder={`${t('message2')}`}
              className="mt-9 h-56 border-b border-solid border-black bg-[#F0F0F0] p-6 focus:border-transparent focus:outline focus:outline-2 focus:outline-black "
            />

            <ErrorMessage
              component="a"
              name="message"
              className="mt-3 text-xs text-red-600"
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
    </div>
  );
};

export default ContactPage;
