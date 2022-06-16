import * as Yup from 'yup';
import toast from 'react-hot-toast';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: '',
    lastname: '',
    email: '',
    phoneNumber: '',
    password: '',
  });
  const [error, setError] = useState(false);
  const { t } = useTranslation('registerForm');

  // const phoneRegExp =
  //   /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const passRegExp =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;

  const validationSchema = Yup.object({
    name: Yup.string()
      .required(t('errNoName'))
      .min(2, t('errName'))
      .max(15, t('errName2')),
    lastname: Yup.string()
      .required(t('errNoLastname'))
      .min(2, t('errLastname'))
      .max(20, t('errLastname2')),
    password: Yup.string()
      .required(t('errNoPassword'))
      .min(6, t('errPassword1'))
      .matches(passRegExp, t('errPassword2')),
    email: Yup.string().required(t('errNoEmail')).email(t('errEmail')),
    phoneNumber: Yup.string()
      .required(t('errNoPhone'))
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        t('errPhone'),
      ),
  });

  const registerHandler = async (data: object) => {
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    };

    try {
      const res = await fetch(
        'https://smallets-back.herokuapp.com/auth/register',
        options,
      );

      if (res.status !== 201) {
        setError(true);
        toast.error(t('toastBad'));
      }

      const resJson = await res.json();

      if (res.status === 201) {
        toast.success(t('toastOk'));
        setUserData(resJson);
        navigate('/login');
      }
    } catch (error) {
      console.log('catch');
    }
    return;
  };

  return (
    <div className="relative mx-auto mb-3 w-full max-w-7xl p-6 md:p-12">
      <Formik
        initialValues={userData}
        validationSchema={validationSchema}
        onSubmit={async (values: object) => {
          registerHandler(values);
        }}
      >
        <Form>
          <div className="relative">
            <Field
              id="name"
              name="name"
              type="text"
              placeholder={t('name')}
              className="form-input"
            ></Field>
            <ErrorMessage
              component="p"
              name="name"
              className="absolute top-16 text-xs text-red-600"
            />
          </div>
          <div className="relative">
            <Field
              id="lastname"
              name="lastname"
              type="text"
              placeholder={t('lastname')}
              className="form-input"
            ></Field>
            <ErrorMessage
              component="p"
              name="lastname"
              className="absolute top-16 text-xs text-red-600"
            />
          </div>
          <div className="relative">
            <Field
              id="phoneNumber"
              name="phoneNumber"
              type="tel"
              placeholder={t('errNoPhone')}
              className="form-input"
            />
            <ErrorMessage
              component="p"
              name="phoneNumber"
              className="absolute top-16 text-xs text-red-600"
            />
          </div>
          <div className="relative">
            <Field
              id="email"
              name="email"
              type="email"
              placeholder={t('email')}
              className="form-input"
            />
            <ErrorMessage
              component="p"
              name="email"
              className="absolute top-16 text-xs text-red-600"
            />
          </div>
          <div className="relative">
            <Field
              id="password"
              name="password"
              type="password"
              placeholder={t('password')}
              className="form-input"
            />
            <ErrorMessage
              component="p"
              name="password"
              className="absolute top-16 text-xs text-red-600"
            />
          </div>
          <button type="submit" className="btn-primary">
            {t('register')}
          </button>
          {error && (
            <div className=" my-8 border border-black p-4 text-sm sm:max-w-[24rem] ">
              {t('errAccountP1')}
              <br />
              <br />
              <Link to="/login" className="font-bold">
                {t('errAccountP2a')}
              </Link>{' '}
              <br />
              <Link to="/reset" className="font-bold">
                {t('errAccountP2b')}
              </Link>
            </div>
          )}
        </Form>
      </Formik>
    </div>
  );
};
export default RegisterPage;
