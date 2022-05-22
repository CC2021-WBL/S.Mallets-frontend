/* eslint-disable import/named */

import * as Yup from 'yup';
import toast from 'react-hot-toast';
import { Dispatch } from 'react';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import Error from './Error';
import { authActions } from '../../app/store/authSlice';

interface IFormValues {
  email: string;
  password: string;
}
const LoginPage = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector((state: any) => state.auth.isAuthenticated);
  const { t } = useTranslation('login');

  const loginSchema = Yup.object().shape({
    email: Yup.string().email(t('emailError')).required(t('emailError2')),
    password: Yup.string().required(t('password2')),
  });

  const loginHandler = async (data: any) => {
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      // mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
    };
    // TODO: change to vercel/heroku/other
    const res = await fetch(
      // 'https://s-mallets-backend.vercel.app/auth/login',
      'http://localhost:3030/auth/login',
      options,
    );

    if (res.status !== 200) {
      // toast.success(t('toastBad'), {
      //   position: 'bottom-center',
      // });
      // handle error
    }
    console.log(res);
    const resJson = await res.json();
    console.log(resJson);
    // TODO: move resJson to store
    if (res.status === 200) {
      dispatch(
        authActions.login({ email: resJson.email, password: resJson.password }),
      );
      // toast.success(t('toastOk'));
      navigate('/user');
    }
    console.log(data);
    console.log(dispatch(authActions.login(data)));
  };

  const logoutHandler = () => {
    dispatch(authActions.logout());
    console.log(dispatch(authActions.logout()));
  };

  return (
    <>
      {isAuth ? (
        <>
          <h1 className="fixed top-0 left-0 z-50">zalogowany</h1>
          <button onClick={logoutHandler} className="fixed top-10 left-0 z-50">
            Wyloguj
          </button>
        </>
      ) : (
        <h6>😥Niezalogowany</h6>
      )}
      <div className="mx-auto mt-8 mb-16 flex w-full max-w-7xl flex-col sm:px-3 md:flex-row md:gap-20 md:px-6 lg:px-8 ">
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
              console.log(values);
              actions.setSubmitting(true);
              // loginHandler(values);
              toast.promise(loginHandler(values), {
                loading: `${t('toast')}`,
                success: `${t('toastOk')}`,
                error: `${t('toastBad')}`,
              });
            }}
          >
            <div className="">
              <h2 className="pb-7 text-xl lg:text-2xl">{t('loginText')}</h2>

              <Form className="flex flex-col">
                <div className="relative">
                  <Field
                    id="email"
                    name="email"
                    placeholder="email"
                    className="form-input"
                  />
                  <Error name="email" className="mb-5" />
                </div>
                <div className="relative">
                  <Field
                    type="password"
                    name="password"
                    placeholder={`${t('password')}`}
                    className="form-input"
                  />

                  <Error name="password" />
                </div>
                <button type="submit" className="btn-primary mb-5">
                  {t('login')}
                </button>
              </Form>
            </div>
          </Formik>
          <Link to="#">{t('forgot')}</Link>
        </div>
        <div className="flex w-full flex-col items-end justify-self-end  p-3 md:w-1/2 ">
          <h2 className="self-start pb-7 text-xl lg:text-2xl">{t('first')}</h2>
          <button className="btn-primary mb-6 self-start ">
            {t('register')}
          </button>
          <button className="btn-primary self-start ">{t('continue')}</button>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
