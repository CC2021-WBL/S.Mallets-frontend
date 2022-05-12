import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';

const CartPage = () => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .required('Wpisz swoje imię')
      .min(3, 'Imię musi się składać z min. 3 znaków')
      .max(15, 'Imię może się składać z maks. 15 znaków'),
    lastname: Yup.string()
      .required('Wpisz nazwisko')
      .min(3, 'Nazwisko musi się składać z min. 3 znaków')
      .max(15, 'Nazwisko może się składać z maks. 15 znaków'),
    password: Yup.string()
      .required('Hasło jest wymagane')
      .min(7, 'Hasło musi się składać z min. 7 znaków')
      .matches(/[a-zA-Z]/, 'Nie używaj znaków diakrytycznych'),
    email: Yup.string()
      .email('Niepoprawny adres email')
      .required('Adres email jest wymagany'),
  });

  return (
    <>
      <div>CartPage</div>
      <div className="mx-8 my-8 w-auto">
        Strona główna {'>'} Koszyk {'>'}
        <b> Zarejestruj się</b>
      </div>
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
        }}
      >
        <Form>
          <div className="form-wrapper m-[1.5rem_1.5rem_1.5rem_2rem] flex flex-col">
            <Field
              id="name"
              name="name"
              type="text"
              placeholder="Imię"
              className="form-input"
            ></Field>
            <ErrorMessage
              component="p"
              name="name"
              className="text-xs text-red-600"
            />

            <Field
              id="lastname"
              name="lastname"
              type="text"
              placeholder="Nazwisko"
              className="form-input"
            ></Field>
            <ErrorMessage
              component="p"
              name="lastname"
              className="text-xs text-red-600"
            />

            <Field
              id="email"
              name="email"
              type="email"
              placeholder="Adres Email"
              className="form-input"
            ></Field>
            <ErrorMessage
              component="p"
              name="email"
              className="text-xs text-red-600"
            />

            <Field
              id="password"
              name="password"
              type="password"
              placeholder="Hasło"
              className="form-input"
            ></Field>
            <ErrorMessage
              component="p"
              name="password"
              className="text-xs text-red-600"
            />

            <button className="btn-primary">ZAREJESTRUJ SIĘ</button>
          </div>
        </Form>
      </Formik>
    </>
  );
};
export default CartPage;
