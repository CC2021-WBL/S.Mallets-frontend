/* eslint-disable import/named */

import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface IFormValues {
  email: string;
  password: string;
}
const LoginPage = () => {
  const { t } = useTranslation('login');
  const loginSchema = Yup.object().shape({
    email: Yup.string().email(t('emailError')).required(t('emailError2')),
    password: Yup.string().required(t('password2')),
  });
  return (
    <div className="mt-8 mb-16 flex w-full max-w-7xl flex-col md:flex-row md:gap-28">
      <div className="h-fit-content  w-full md:w-1/2">
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={loginSchema}
          onSubmit={(
            values: IFormValues,
            actions: FormikHelpers<IFormValues>,
          ) => {
            actions.setSubmitting(true);
            actions.resetForm();
          }}
        >
          <div className="">
            <h2 className="pb-7 text-2xl">{t('loginText')}</h2>

            <Form className="flex flex-col">
              <Field
                id="email"
                name="email"
                placeholder="email"
                className=" mb-5 flex  h-[3.75rem] border-b border-solid border-black bg-[#F0F0F0] p-6"
              />
              <ErrorMessage
                component="a"
                name="email"
                className="mt-3 mb-5 text-red-600"
              />

              <Field
                type="password"
                name="password"
                placeholder={`${t('password')}`}
                className=" mb-5 flex  h-[3.75rem] border-b border-solid border-black bg-[#F0F0F0] p-6"
              />

              <ErrorMessage
                component="a"
                name="password"
                className="mt-3 text-red-600"
              />

              <button
                type="submit"
                className="my-6 h-[3.75rem] w-full rounded bg-black text-white hover:opacity-75"
              >
                {t('login')}
              </button>
            </Form>
          </div>
        </Formik>
        <Link to="#">{t('forgot')}</Link>
      </div>
      <div className="flex w-full flex-col items-end  justify-self-end md:w-1/2 ">
        <h2 className=" self-start pb-7 text-2xl">{t('first')}</h2>
        <button className="mb-5 h-[3.75rem] w-full rounded bg-black text-white hover:opacity-75 ">
          {t('register')}
        </button>
        <button className="h-[3.75rem] w-full rounded border border-black bg-white text-black hover:opacity-75  ">
          {t('continue')}
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
