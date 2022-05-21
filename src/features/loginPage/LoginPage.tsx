/* eslint-disable import/named */

import * as Yup from 'yup';
import toast from 'react-hot-toast';
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { RootState } from '../../app/store';
import { authActions } from './authSlice';
import { userActions } from './userSlice';

interface IFormValues {
  email: string;
  password: string;
}
const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector(
    (state: RootState) => state.authentication.isAuthenticated,
  );
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
        dispatch(authActions.login());
        dispatch(
          userActions.user({
            email: resJson.email,
            name: resJson.name,
            lastname: resJson.lastname,
            roles: resJson.roles,
            phoneNumber: resJson.phoneNumber,
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
  };

  const logoutHandler = () => {
    dispatch(authActions.logout());
    const toastId = toast.loading('Loading...');
    toast.success(t('toastOut'), {
      id: toastId,
    });
  };

  return (
    <div className="mx-auto mt-8 mb-16 flex w-full max-w-7xl flex-col sm:px-3 md:flex-row md:gap-20 md:px-6 lg:px-8 ">
      {isAuth && (
        <>
          <h1 className="fixed top-0 left-0 z-50">zalogowany</h1>
          <button onClick={logoutHandler} className="fixed top-10 left-0 z-50">
            Wyloguj
          </button>
        </>
      )}
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
                className=" mb-5 text-sm text-red-600"
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
                className=" text-sm text-red-600"
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
        <Link to="/forgot">{t('forgot')}</Link>
      </div>
      <div className="flex w-full flex-col items-end justify-self-end  p-3 md:w-1/2 ">
        <h2 className=" self-start pb-7 text-xl lg:text-2xl">{t('first')}</h2>
        <Link
          className="mb-5 flex h-[3.75rem] w-full items-center justify-center rounded bg-black text-white hover:opacity-75 "
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
