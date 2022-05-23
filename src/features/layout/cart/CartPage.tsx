import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const CartPage = () => {
  const { t } = useTranslation('registerForm');
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const passRegExp =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  const errDB = undefined;

  let submitObject;

  const validationSchema = Yup.object({
    name: Yup.string()
      .required(t('errNoName'))
      .min(3, t('errName'))
      .max(15, t('errName2')),
    lastname: Yup.string()
      .required(t('errNoLastname'))
      .min(3, t('errLastname'))
      .max(15, t('errLastname2')),
    password: Yup.string()
      .required(t('errNoPassword'))
      .min(8, t('errPassword1'))
      .matches(passRegExp, t('errPassword2')),
    email: Yup.string().required(t('errNoEmail')).email(t('errEmail')),
    phoneNumber: Yup.string().matches(phoneRegExp, t('errPhone')),
  });
  ////

  // const registerHandler = async (data: object) => {
  //   // const toastId = toast.loading('Loading...');
  //   const options = {
  //     method: 'POST',
  //     body: JSON.stringify(data),
  //     headers: { 'Content-Type': 'application/json' },
  //   };

  //   try {
  //     const res = await fetch(
  //       'https://s-mallets-backend.vercel.app/auth/register',
  //       options,
  //     );

  //     if (res.status !== 200) {
  //       alert('toastBad'), console.log('');
  //     }

  //     // const resJson = await res.json();

  //     //     if (res.status === 200) {
  //     //       dispatch(authActions.register());
  //     //       dispatch(
  //     //         userActions.userRegister({
  //     //           email: resJson.email,
  //     //           name: resJson.name,
  //     //           lastname: resJson.lastname,
  //     //           roles: resJson.roles,
  //     //           phoneNumber: resJson.phoneNumber,
  //     //         }),
  //     //       );

  //     //       toast.success(t('toastOk'), {
  //     //         id: toastId,
  //     //       });
  //     //       navigate('/user');
  //     //     }
  //   } catch (error) {
  //     // toast.error(t('toastBad'));
  //     console.log('catch');
  //   }
  //   return;
  // };

  ////

  return (
    <>
      <Formik
        initialValues={{
          name: '',
          lastname: '',
          email: '',
          password: '',
        }}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 3));
          submitObject = JSON.stringify(values, null, 3);
          console.log(submitObject);
        }}
      >
        <div className="form-wrapper m-[1.5rem_1rem_1.5rem_1rem] flex w-full  flex-col p-2">
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
              ></Field>
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
              ></Field>
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
              ></Field>
              <ErrorMessage
                component="p"
                name="password"
                className="absolute top-16 text-xs text-red-600"
              />
            </div>
            <button type="submit" className="btn-primary">
              {t('register')}
            </button>
            {errDB && (
              <div className=" my-8 w-96 border border-black p-4 text-sm opacity-10 ">
                {t('errAccountP1')}
                <br />
                <br />
                <NavLink to="/reset">
                  {/* link to password reset */}
                  <strong>{t('errAccountP2')}</strong>
                  {/* "Error occurred. Try to log in again or", recover forgotten password." */}
                </NavLink>
              </div>
            )}
          </Form>
        </div>
      </Formik>
    </>
  );
};
export default CartPage;
