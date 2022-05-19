/* eslint-disable import/named */

import * as Yup from 'yup';
import { Dispatch } from 'react';
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { authActions } from '../../app/store/authSlice';

// import { AiOutlineClose } from 'react-icons/ai';

interface IFormValues {
  email: string;
  password: string;
}
const LoginPage = () => {
  const dispatch: Dispatch<any> = useDispatch();
  // const navigate = useNavigate();
  // const [showModal, setShowModal] = useState<boolean>(false);
  const isAuth = useSelector((state: any) => state.auth.isAuthenticated);
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
      console.log('ooooopsie');
      return;
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
    }
    console.log(data);
    console.log(dispatch(authActions.login(data)));
    // console.log(authActions.login);
    // setShowModal(true);
    console.log(isAuth);
  };
  const logoutHandler = () => {
    dispatch(authActions.logout());
    console.log(dispatch(authActions.logout()));
    console.log(isAuth);
  };
  const { t } = useTranslation('login');
  const loginSchema = Yup.object().shape({
    email: Yup.string().email(t('emailError')).required(t('emailError2')),
    password: Yup.string().required(t('password2')),
  });
  return (
    <div className="mx-auto mt-8 mb-16 flex w-full max-w-7xl flex-col sm:px-3 md:flex-row md:gap-20 md:px-6 lg:px-8 ">
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
                className="mt-3 mb-5 text-sm text-red-600"
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
                className="mt-3 text-sm text-red-600"
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
      <div className="flex w-full flex-col items-end justify-self-end  p-3 md:w-1/2 ">
        <h2 className=" self-start pb-7 text-xl lg:text-2xl">{t('first')}</h2>
        <button className="mb-5 h-[3.75rem] w-full rounded bg-black text-white hover:opacity-75 ">
          {t('register')}
        </button>
        <button className="h-[3.75rem] w-full rounded border border-black bg-white text-black hover:bg-black hover:text-white hover:opacity-75  ">
          {t('continue')}
        </button>
      </div>
      {/* {showModal ? (
        <div
          onClick={() => navigate('/user')}
          onKeyDown={() => navigate('/user')}
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
            // style={{ backgroundImage: `url(${logosm})` }}
          >
            {t('modalOk')}
            <button
              onClick={() => navigate('/user')}
              onKeyDown={() => navigate('/user')}
              aria-label="close handler"
              className="absolute top-4 right-4 text-xl sm:top-10 sm:right-10"
            >
              <AiOutlineClose />
            </button>
          </div>
        </div>
      ) : null} */}
    </div>
  );
};

export default LoginPage;
