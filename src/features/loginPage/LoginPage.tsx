/* eslint-disable import/named */

import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import { useTranslation } from 'react-i18next';

interface IFormValues {
  email: string;
  password: string;
}
const LoginPage = () => {
  const { t } = useTranslation('login');
  const contactSchema = Yup.object().shape({
    email: Yup.string().email(t('emailError')).required(t('emailError2')),
    password: Yup.string().required(t('password2')),
  });
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={contactSchema}
      onSubmit={(values: IFormValues, actions: FormikHelpers<IFormValues>) => {
        actions.setSubmitting(true);
        console.log(values);
      }}
    >
      <div className="h-fit-content  w-full lg:w-[50%] ">
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
            className="mt-6 h-[3.75rem] w-full bg-black text-white hover:opacity-75"
          >
            {t('login')}
          </button>
        </Form>
      </div>
    </Formik>
  );
};

export default LoginPage;
