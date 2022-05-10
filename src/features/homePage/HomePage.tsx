import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';

import group from '../../assets/groupLogo.png';
import { mock } from '../products/productSeries/mockSeries';

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Wpisz poprawny adres email')
    .required('Adres email jest wymagany'),
  message: Yup.string()
    .min(50, 'Wiadomość musi mieć min. 50 znaków')
    .required('Wpisz wiadomość'),
});

const HomePage = () => {
  return (
    <>
      <div className="hero relative mx-auto  mb-[15.6rem] flex max-w-7xl flex-col items-end bg-no-repeat pr-8 text-right text-white">
        <p className="mb-2.5 mt-16">S.MALLETS</p>
        <h1 className="max-w-sm text-6xl font-bold leading-[4.8rem]">
          Premium quality / fair price
        </h1>

        <div className="absolute inset-x-0 -bottom-40 mx-auto flex h-60 max-w-[80%] justify-center rounded-lg bg-[#EDEDED] pt-10 pl-6 text-left text-black sm:justify-start sm:pl-[4.4rem] lg:max-w-[58.7rem]">
          <blockquote>
            <p className="mb-5 max-w-[17rem]">
              “To są zajebiste pałeczki. Nie chcę już żadnych innych. Mój
              dyrygent jest wreszcie zadowolony, tylko Smallets!”
            </p>
            <p className="font-bold">Klemens Wariat</p>
          </blockquote>
        </div>

        <img
          src={group}
          alt="decoration logo"
          className="absolute right-[2.8rem] -bottom-[15.6rem] z-50 hidden  xl:block"
          aria-hidden="true"
        />
      </div>

      <div>
        <h2 className="ml-6 text-2xl">Odkryj produkty</h2>
      </div>
      <div className=" relative mb-[100px] flex max-w-7xl flex-wrap justify-center">
        {mock
          // .sort(() => 0.5 - Math.random())
          // .slice(0, 6)
          .map((index) => (
            <div
              key={index.id}
              className="flex h-[27.8rem] w-[21.8rem] flex-col items-center py-9"
            >
              <img
                src={index.productImage}
                alt={index.altText}
                className="mb-20 h-52 w-52 rounded-full"
              />
              <h3 className="text-xl font-bold">{index.seriesName}</h3>
            </div>
          ))}
      </div>

      <div className="mx-4 mb-[50px] flex max-w-7xl justify-between">
        <Formik
          initialValues={{
            email: '',
            message: '',
          }}
          validationSchema={loginSchema}
          onSubmit={(
            values,
            //  e
          ) => {
            alert(JSON.stringify(values, null, 2));
          }}
        >
          <div className="h-fit-content  w-full lg:w-[50%] ">
            {/* <p className=""> */}
            <h2 className="pb-[30px] text-[25px]">Chcesz wiedzieć więcej?</h2>
            <h3 className="pb-[30px]">
              Skontaktuj się ze mną za pomocą formularza kontaktowego:
            </h3>
            {/* </p> */}
            <Form className="flex flex-col">
              {/* <label htmlFor="Email">Email</label> */}
              <Field
                id="email"
                name="email"
                placeholder="email"
                className=" flex h-[60px]  bg-[#F0F0F0] pl-6 text-xs"
              />
              <ErrorMessage
                component="a"
                name="email"
                className="mt-3 text-red-600"
              />

              {/* <label htmlFor="message">Message</label> */}
              <Field
                name="message"
                component="textarea"
                placeholder="wpisz wiadomość"
                className="mt-[37px] h-56 bg-[#F0F0F0] pt-6 pl-6 text-xs"
              />
              <ErrorMessage
                component="a"
                name="message"
                className="mt-3 text-red-600"
              />

              <button
                type="submit"
                className="mt-6 h-20 w-full bg-black text-white"
              >
                WYŚLIJ WIADOMOŚĆ
              </button>
            </Form>
          </div>
        </Formik>
        <div className="bbb hidden w-[50%] lg:block lg:bg-bottom" />
      </div>
    </>
  );
};

export default HomePage;
