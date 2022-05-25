/* eslint-disable import/named */

import * as Yup from 'yup';
import toast from 'react-hot-toast';
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { login } from '../../app/slices/authSlice';
import { userLogin } from '../../app/slices/userSlice';

interface IFormValues {
  email: string;
  password: string;
}
const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation('login');

  const loginSchema = Yup.object().shape({
    email: Yup.string().email(t('emailError')).required(t('emailError2')),
    password: Yup.string().required(t('password2')),
  });

  const loginHandler = async (data: object) => {
    const toastId = toast.loading('Loading...');
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('credentials', 'include');
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: headers,
    };

    try {
      const res = await fetch(
        'https://s-mallets-backend.vercel.app/auth/login',
        options,
      );

      if (res.status !== 200) {
        toast.error(t('toastBad'), {
          id: toastId,
        });
      }

      const resJson = await res.json();
      if (res.status === 200) {
        const token = resJson.token;
        if (token) {
          localStorage.setItem('auth', token);
        }
        dispatch(login());
        dispatch(
          userLogin({
            id: resJson.id,
            email: resJson.email,
            name: resJson.name,
            lastname: resJson.lastname,
            roles: resJson.roles,
            phoneNumber: resJson.phoneNumber,
            address: resJson.address,
          }),
        );

        toast.success(t('toastOk'), {
          id: toastId,
        });
        navigate('/user');
      }
    } catch (error) {
      toast.error(t('toastBad'));
    }
    return;
  };

  return (
    <div className="mx-auto mt-8 mb-16 flex w-full max-w-7xl flex-col px-3 md:flex-row md:gap-20 md:px-6 lg:px-8 ">
      <div className="h-fit-content  w-full p-3 md:w-1/2">
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
            loginHandler(values);
          }}
        >
          <div className="">
            <h2 className="pb-7 text-xl lg:text-2xl">{t('loginText')}</h2>
            <Form className="flex flex-col gap-7">
              <div className="relative">
                <Field
                  id="email"
                  name="email"
                  placeholder="email"
                  className="flex h-[3.75rem] w-full border-b border-solid border-black bg-[#F0F0F0] p-6 focus:border-transparent focus:outline focus:outline-2 focus:outline-black"
                />
                <ErrorMessage
                  component="a"
                  name="email"
                  className="absolute top-16 text-xs text-red-600"
                />
              </div>
              <div className="relative">
                <Field
                  type="password"
                  name="password"
                  placeholder={`${t('password')}`}
                  className="mb-5 flex h-[3.75rem] w-full border-b border-solid border-black bg-[#F0F0F0] p-6 focus:border-transparent focus:outline focus:outline-2 focus:outline-black"
                />

                <ErrorMessage
                  component="a"
                  name="password"
                  className="absolute top-16 text-xs text-red-600"
                />
              </div>
              <button
                type="submit"
                className="mb-7 h-[3.75rem] w-full rounded bg-black text-white hover:opacity-75 "
              >
                {t('login')}
              </button>
            </Form>
          </div>
        </Formik>
        <Link to="/forgot">{t('forgot')}</Link>
      </div>
      <div className="flex w-full flex-col items-end justify-self-end p-3 md:w-1/2">
        <h2 className=" self-start pb-7 text-xl lg:text-2xl">{t('first')}</h2>
        <Link
          className="mb-7 flex h-[3.75rem] w-full items-center justify-center rounded bg-black text-white hover:opacity-75 "
          to="/register"
        >
          {t('register')}
        </Link>
        <Link
          className="flex h-[3.75rem] w-full items-center justify-center rounded border border-black bg-white text-black hover:bg-black hover:text-white hover:opacity-75"
          to="/delivery"
        >
          {t('continue')}
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
